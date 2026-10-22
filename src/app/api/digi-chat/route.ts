import { NextRequest, NextResponse } from "next/server";
import { buildDigiSystemPrompt } from "@/lib/digiKnowledgeBase";

export const runtime = "nodejs";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const { messages, exchangeCount, currentPage } = await req.json() as {
      messages: ChatMessage[];
      exchangeCount: number;
      currentPage?: string;
    };

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API key missing" }, { status: 500 });
    }

    let systemPrompt = buildDigiSystemPrompt();
    if (currentPage) {
      systemPrompt += `\n\n[ΣΗΜΑΝΤΙΚΗ ΠΛΗΡΟΦΟΡΙΑ]\nΟ χρήστης αυτή τη στιγμή βρίσκεται στη σελίδα με URL/Path: "${currentPage}". Προσάρμοσε την απάντησή σου και το ενδιαφέρον σου με βάση αυτή τη σελίδα. Αν για παράδειγμα βρίσκεται στη σελίδα κατασκευής ιστοσελίδων (/web-design), μίλα στοχευμένα για αυτό.`;
    }

    // Normalize messages to ensure they strictly alternate and start with "user"
    const normalizedContents: { role: string; parts: { text: string }[] }[] = [];
    
    for (const m of messages) {
      if (normalizedContents.length === 0 && m.role !== "user") continue;
      
      const role = m.role === "assistant" ? "model" : "user";
      
      if (normalizedContents.length > 0 && normalizedContents[normalizedContents.length - 1].role === role) {
        normalizedContents[normalizedContents.length - 1].parts[0].text += "\n\n" + m.content;
      } else {
        normalizedContents.push({ role, parts: [{ text: m.content }] });
      }
    }

    if (normalizedContents.length === 0) {
      return NextResponse.json({
        message: "Γεια σου! Πώς μπορώ να σε βοηθήσω;",
        captureLeads: false,
      });
    }

    // Call Gemini with Streaming Enabled
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:streamGenerateContent?alt=sse&key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemPrompt }],
          },
          contents: normalizedContents,
          generationConfig: {
            temperature: 0.85,
            maxOutputTokens: 1500,
            topP: 0.9,
          },
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("Gemini API error:", err);
      if (response.status === 429) {
        return NextResponse.json({
          message: "Στιγμή — έχω πολλές συνομιλίες τώρα. Δοκίμασε ξανά σε λίγα δευτερόλεπτα! ⏱️",
          captureLeads: false,
        });
      }
      return NextResponse.json({ message: "Συγγνώμη, κάτι πήγε στραβά. Δοκίμασε ξανά!", captureLeads: false }, { status: 500 });
    }

    // Return the raw SSE stream to the client
    return new Response(response.body, {
      status: 200,
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        "Connection": "keep-alive",
      },
    });
  } catch (error) {
    console.error("Digi chat error:", error);
    return NextResponse.json(
      { message: "Κάτι πήγε στραβά. Επικοινώνησε μαζί μας στο info@digiads.gr 🙏", captureLeads: false },
      { status: 200 }
    );
  }
}
