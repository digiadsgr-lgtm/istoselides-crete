import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  chatSummary: string;
}

async function sendViaEmailJS(templateId: string, templateParams: Record<string, string>) {
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: templateId,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_PRIVATE_KEY,
      template_params: templateParams,
    }),
  });
  return response;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as LeadPayload;
    const { name, email, phone, service, chatSummary } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Συμπλήρωσε όνομα και email" }, { status: 400 });
    }

    const now = new Date().toLocaleString("el-GR", { timeZone: "Europe/Athens" });

    // ─── 1. Confirmation email to the lead ──────────────────
    const leadEmailParams = {
      to_name: name,
      to_email: email,
      service_interest: service ?? "Γενική Πληροφόρηση",
      chat_summary: chatSummary,
      sent_at: now,
      reply_email: "info@digiads.gr",
    };

    // ─── 2. Notification email to DIGIADS ───────────────────
    const notifyEmailParams = {
      lead_name: name,
      lead_email: email,
      lead_phone: phone ?? "Δεν δόθηκε",
      lead_service: service ?? "Δεν διευκρινίστηκε",
      chat_summary: chatSummary,
      sent_at: now,
      notify_email: process.env.NOTIFICATION_EMAIL ?? "digiadsgr@gmail.com",
    };

    const templateLead = process.env.EMAILJS_TEMPLATE_LEAD ?? "template_lead_confirm";
    const templateNotify = process.env.EMAILJS_TEMPLATE_NOTIFY ?? "template_notify_owner";

    // Send both emails in parallel
    const [leadRes, notifyRes] = await Promise.allSettled([
      sendViaEmailJS(templateLead, leadEmailParams),
      sendViaEmailJS(templateNotify, notifyEmailParams),
    ]);

    const leadOk = leadRes.status === "fulfilled" && leadRes.value.ok;
    const notifyOk = notifyRes.status === "fulfilled" && notifyRes.value.ok;

    if (!leadOk || !notifyOk) {
      console.warn("Email partial failure:", { leadOk, notifyOk });
    }

    return NextResponse.json({
      success: true,
      message: "Η αίτηση ελήφθη! Σου στείλαμε email επιβεβαίωσης.",
    });
  } catch (error) {
    console.error("Lead send error:", error);
    return NextResponse.json({ success: false, error: "Αποτυχία αποστολής" }, { status: 500 });
  }
}
