// Email sending via Resend (raw fetch, no SDK) with a CAN-SPAM-compliant
// signature + one-click unsubscribe footer appended to every message.

import { BRAND } from "./brand.mjs";

const SENDER_NAME = process.env.OUTREACH_FROM_NAME || "Bruno Dossantos";
const SENDER_EMAIL = process.env.OUTREACH_FROM_EMAIL || process.env.CONTACT_FROM_EMAIL || "";
const REPLY_TO = process.env.OUTREACH_REPLY_TO || process.env.CONTACT_TO_EMAIL || "";
// Required by CAN-SPAM: a valid physical postal address.
const POSTAL = process.env.OUTREACH_POSTAL_ADDRESS || "B&B Global Services LLC, New Hampshire, USA";
const UNSUB_BASE = `${BRAND.site}/unsubscribe`;

export function unsubscribeUrl(email) {
  return `${UNSUB_BASE}?e=${encodeURIComponent(email)}`;
}

/** Full plain-text body with signature + compliance footer appended. */
export function composeFull(bodyText, prospect) {
  const sig = `\n\n— ${SENDER_NAME}\nB&B Global Services · ${BRAND.tagline}\n${BRAND.site}`;
  const footer =
    `\n\n—\nYou're receiving this because of a business connection or interest in technology services.` +
    `\nNot relevant? Unsubscribe: ${unsubscribeUrl(prospect.email)}` +
    `\n${POSTAL}`;
  return bodyText + sig + footer;
}

function toHtml(text, prospect) {
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const url = unsubscribeUrl(prospect.email);
  const sig = `<p style="margin-top:16px">— ${esc(SENDER_NAME)}<br/>B&amp;B Global Services · ${BRAND.tagline}<br/><a href="${BRAND.site}">${BRAND.site.replace("https://", "")}</a></p>`;
  const footer = `<hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0"/><p style="color:#94a3b8;font-size:12px">You're receiving this because of a business connection or interest in technology services. Not relevant? <a href="${url}">Unsubscribe</a>.<br/>${esc(POSTAL)}</p>`;
  const para = esc(text)
    .split(/\n{2,}/)
    .map((p) => `<p>${p.replace(/\n/g, "<br/>")}</p>`)
    .join("");
  return `<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;color:#0f172a;font-size:15px;line-height:1.5">${para}${sig}${footer}</div>`;
}

/**
 * Send one email via Resend. Includes List-Unsubscribe headers for one-click
 * unsubscribe (RFC 8058). Returns { ok, id?, error? }.
 */
export async function sendEmail({ to, subject, bodyText, prospect }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !SENDER_EMAIL) {
    return { ok: false, error: "RESEND_API_KEY and OUTREACH_FROM_EMAIL (or CONTACT_FROM_EMAIL) must be set to send." };
  }
  const fullText = composeFull(bodyText, prospect);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: `${SENDER_NAME} <${SENDER_EMAIL}>`,
      to: [to],
      reply_to: REPLY_TO || undefined,
      subject,
      text: fullText,
      html: toHtml(bodyText, prospect),
      headers: {
        "List-Unsubscribe": `<${unsubscribeUrl(to)}>, <mailto:${REPLY_TO || SENDER_EMAIL}?subject=unsubscribe>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    }),
  });
  if (!res.ok) return { ok: false, error: `Resend ${res.status}: ${(await res.text()).slice(0, 200)}` };
  const data = await res.json();
  return { ok: true, id: data.id };
}

export const senderConfigured = () => Boolean(process.env.RESEND_API_KEY && SENDER_EMAIL);
