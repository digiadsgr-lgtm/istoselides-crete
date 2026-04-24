import { NextRequest, NextResponse } from "next/server";
import { buildDigiSystemPrompt } from "@/lib/digiKnowledgeBase";

export const runtime = "nodejs";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const { messages, exchangeCount } = await req.json() as {
      messages: ChatMessage[];
      exchangeCount: number;
    };

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API key missing" }, { status: 500 });
    }

    const systemPrompt = buildDigiSystemPrompt();

    // Gemini REQUIRES: (1) conversation starts with "user", (2) strictly alternating user/model
    // Filter: remove the initial assistant greeting from history before sending to Gemini
    const filteredMessages = messages.filter((m, idx) => {
      // Drop the very first message if it's from the assistant (our greeting)
      if (idx === 0 && m.role === "assistant") return false;
      return true;
    });

    // If no user messages yet, nothing to send
    if (filteredMessages.length === 0) {
      return NextResponse.json({
        message: "Γεια σου! Πώς μπορώ να σε βοηθήσω;",
        captureLeads: false,
      });
    }

    // Map to Gemini format (user/model)
    const contents = filteredMessages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    // Call Gemini 2.0 Flash — most cost-effective model
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemPrompt }],
          },
          contents,
          generationConfig: {
            temperature: 0.85,
            maxOutputTokens: 400,
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

    const data = await response.json();
    const message: string =
      data.candidates?.[0]?.content?.parts?.[0]?.text ?? "Συγγνώμη, κάτι πήγε στραβά. Δοκίμασε ξανά!";

    // Trigger lead capture after 3 exchanges
    const captureLeads = exchangeCount >= 3;

    return NextResponse.json({ message, captureLeads });
  } catch (error) {
    console.error("Digi chat error:", error);
    return NextResponse.json(
      { message: "Κάτι πήγε στραβά. Επικοινώνησε μαζί μας στο info@digiads.gr 🙏", captureLeads: false },
      { status: 200 }
    );
  }
}
