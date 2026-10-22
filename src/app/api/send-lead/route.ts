import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { buildLeadConfirmationEmail, buildOwnerNotificationEmail } from "@/lib/digiKnowledgeBase";

export const runtime = "nodejs";

interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  chatSummary: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as LeadPayload;
    const { name, email, phone, service, chatSummary } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Συμπλήρωσε όνομα και email" }, { status: 400 });
    }

    const user = (process.env.SMTP_EMAIL || "").trim();
    const pass = (process.env.SMTP_PASSWORD || "").trim();
    const notificationEmail = (process.env.NOTIFICATION_EMAIL || "digiadsgr@gmail.com").trim();

    if (!user || !pass) {
      console.error("Missing SMTP credentials in environment variables.");
      return NextResponse.json({ success: false, error: "Το σύστημα αποστολής δεν έχει ρυθμιστεί." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
    });

    const leadHtml = buildLeadConfirmationEmail({ name, service: service ?? "", chatSummary });
    const notifyHtml = buildOwnerNotificationEmail({ name, email, phone: phone ?? "", service: service ?? "", chatSummary });

    // Send the email to the lead
    const leadResult = await transporter.sendMail({
      from: `"DIGIADS Virtual Agent" <${user}>`,
      to: email,
      replyTo: notificationEmail,
      subject: "Επιβεβαίωση Αίτησης — DIGIADS",
      html: leadHtml,
    }).catch(err => {
      console.error("Error sending lead email:", err);
      return null;
    });

    // Send the notification to the owner
    const notifyResult = await transporter.sendMail({
      from: `"DIGIADS Virtual Agent" <${user}>`,
      to: notificationEmail,
      replyTo: email,
      subject: `Νέο Lead: ${name} 🎯`,
      html: notifyHtml,
    }).catch(err => {
      console.error("Error sending owner email:", err);
      return null;
    });

    if (!leadResult && !notifyResult) {
      return NextResponse.json({ success: false, error: "Απέτυχε η αποστολή. Επικοινώνησε μαζί μας στο info@digiads.gr" }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Η αίτηση ελήφθη! Σου στείλαμε email επιβεβαίωσης.",
    });
  } catch (error) {
    console.error("Lead send critical error:", error);
    return NextResponse.json({ success: false, error: "Αποτυχία συστήματος" }, { status: 500 });
  }
}
