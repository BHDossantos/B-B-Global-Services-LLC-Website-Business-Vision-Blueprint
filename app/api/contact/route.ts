import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  companySize?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  company_website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: silently accept to avoid tipping off bots.
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  // Server-side validation.
  const errors: string[] = [];
  if (!data.name?.trim()) errors.push("Name is required.");
  if (!data.email?.trim() || !EMAIL_RE.test(data.email)) {
    errors.push("A valid email is required.");
  }
  if (!data.message?.trim()) errors.push("Message is required.");

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 422 });
  }

  // ── Integration point ─────────────────────────────────────────────
  // Forward the lead to email/CRM here. The blueprint calls for HubSpot
  // (or a simple CRM) plus an email notification. Wire one of these up
  // using environment variables, e.g.:
  //
  //   - HubSpot Forms API  (HUBSPOT_PORTAL_ID / HUBSPOT_FORM_GUID)
  //   - Resend / SendGrid  (RESEND_API_KEY) for the email notification
  //   - A generic webhook  (CONTACT_WEBHOOK_URL)
  //
  // For now we log server-side so submissions aren't lost in development.
  const lead = {
    name: data.name,
    company: data.company || "",
    email: data.email,
    phone: data.phone || "",
    companySize: data.companySize || "",
    service: data.service || "",
    budget: data.budget || "",
    timeline: data.timeline || "",
    message: data.message,
    submittedAt: new Date().toISOString(),
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      // Don't fail the user's submission if the downstream webhook errors.
      console.error("Contact webhook failed:", err);
    }
  } else {
    console.info("New contact lead (configure CONTACT_WEBHOOK_URL to forward):", lead);
  }

  return NextResponse.json({ ok: true });
}
