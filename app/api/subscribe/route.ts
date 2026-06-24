import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Lightweight newsletter / top-of-funnel capture. Validates the email and
 * fans it out to the same destinations as the contact form so no interested
 * visitor is lost. All integrations are optional (see .env.example).
 */
export async function POST(request: Request) {
  let data: { email?: string; source?: string; company_website?: string };
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — silently accept bots.
  if (data.company_website) return NextResponse.json({ ok: true });

  if (!data.email?.trim() || !EMAIL_RE.test(data.email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 422 });
  }

  const record = {
    email: data.email.trim(),
    source: data.source || "newsletter",
    type: "subscriber",
    submittedAt: new Date().toISOString(),
  };

  await Promise.allSettled([emailNotify(record), webhook(record), hubspot(record)]);

  return NextResponse.json({ ok: true });
}

async function emailNotify(r: { email: string; source: string; submittedAt: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((e) => e.trim()),
      reply_to: r.email,
      subject: `New subscriber — ${r.email}`,
      html: `<p>New newsletter subscriber.</p><p><b>Email:</b> ${r.email}<br/><b>Source:</b> ${r.source}<br/><b>When:</b> ${r.submittedAt}</p>`,
    }),
  });
}

async function webhook(r: object) {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(r),
  });
}

async function hubspot(r: { email: string }) {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_NEWSLETTER_FORM_GUID || process.env.HUBSPOT_FORM_GUID;
  if (!portalId || !formGuid) return;
  await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields: [{ name: "email", value: r.email }] }),
    }
  );
}
