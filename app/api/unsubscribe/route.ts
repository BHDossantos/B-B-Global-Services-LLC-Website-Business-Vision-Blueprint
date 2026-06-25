import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Records an unsubscribe request. The site is statically hosted, so this
 * endpoint notifies the operator (email + optional webhook) who removes the
 * address from the outreach suppression list via `npm run outreach -- unsubscribe`.
 * Supports both the on-site form (JSON/POST) and one-click List-Unsubscribe-Post.
 */
export async function POST(request: Request) {
  let email = "";
  const ct = request.headers.get("content-type") || "";
  try {
    if (ct.includes("application/json")) {
      email = (await request.json()).email || "";
    } else {
      const form = await request.formData();
      email = String(form.get("email") || "");
    }
  } catch {
    /* one-click POSTs may have empty bodies; fall through */
  }
  if (!email) {
    const url = new URL(request.url);
    email = url.searchParams.get("e") || url.searchParams.get("email") || "";
  }

  email = email.trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 422 });
  }

  const record = { type: "unsubscribe", email, at: new Date().toISOString() };

  // Notify the operator so the suppression list can be updated promptly.
  await Promise.allSettled([notifyEmail(record), notifyWebhook(record)]);
  console.info("Unsubscribe request:", record);

  return NextResponse.json({ ok: true });
}

// Allow one-click GET as a fallback (some clients hit the URL directly).
export async function GET(request: Request) {
  const url = new URL(request.url);
  const email = (url.searchParams.get("e") || url.searchParams.get("email") || "").trim().toLowerCase();
  if (email && EMAIL_RE.test(email)) {
    await Promise.allSettled([
      notifyEmail({ type: "unsubscribe", email, at: new Date().toISOString() }),
      notifyWebhook({ type: "unsubscribe", email, at: new Date().toISOString() }),
    ]);
  }
  return NextResponse.redirect(new URL(`/unsubscribe?e=${encodeURIComponent(email)}`, request.url));
}

async function notifyEmail(record: { email: string; at: string; type?: string }) {
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
      subject: `Unsubscribe request — ${record.email}`,
      text: `Suppress this address from outreach:\n\n${record.email}\n\nRun: npm run outreach -- unsubscribe --email ${record.email}\n\n(${record.at})`,
    }),
  });
}

async function notifyWebhook(record: object) {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(record),
  });
}
