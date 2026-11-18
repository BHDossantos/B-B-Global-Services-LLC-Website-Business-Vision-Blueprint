// Vercel serverless function: receives an insurance quote request, emails it
// via Resend, and records the SMS consent text + timestamp as proof of express
// written consent (what TCPA and the carriers expect you to be able to produce).
//
// Env vars required:
//   RESEND_API_KEY   - Resend API key
//   QUOTE_TO_EMAIL   - where leads land (never rendered on the site)
//   QUOTE_FROM_EMAIL - e.g. "Thrust Insurance <b@dossantosinsurance.org>"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const data = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

  // Honeypot: accept silently so bots don't learn anything.
  if (data.website) return res.status(200).json({ ok: true });

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const phone = (data.phone || "").trim();

  if (!name || !EMAIL_RE.test(email) || !phone) {
    return res.status(422).json({ error: "Name, a valid email, and phone number are required." });
  }

  const lead = {
    name,
    email,
    phone,
    quoteType: (data.quoteType || "").trim(),
    message: (data.message || "").trim(),
    smsConsent: data.smsConsent === true,
    consentText: (data.consentText || "").trim(),
    submittedAt: new Date().toISOString(),
    // Useful if a consent record is ever challenged.
    ip:
      (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
      req.socket?.remoteAddress ||
      "",
    userAgent: req.headers["user-agent"] || "",
  };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  const from = process.env.QUOTE_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    // Never fail the visitor because of our configuration. Log so the lead is
    // recoverable from function logs.
    console.error("Quote request received but email is not configured:", lead);
    return res.status(200).json({ ok: true });
  }

  const rows = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Quote type", lead.quoteType],
    ["SMS/calls consent", lead.smsConsent ? `YES — agreed ${lead.submittedAt}` : "no"],
    ["IP", lead.ip],
  ]
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#5c6476;font-weight:600">${k}</td><td style="padding:4px 0;color:#1f2330">${escapeHtml(v)}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px">
      <h2 style="color:#6d28d9;margin:0 0 12px">New insurance quote request</h2>
      <table style="border-collapse:collapse;font-size:14px">${rows}</table>
      ${lead.message ? `<h3 style="color:#1f2330;margin-top:20px">Message</h3>
      <p style="white-space:pre-wrap;font-size:14px">${escapeHtml(lead.message)}</p>` : ""}
      ${lead.smsConsent && lead.consentText ? `<h3 style="color:#1f2330;margin-top:20px">Consent disclosure shown</h3>
      <p style="font-size:12px;color:#5c6476;border-left:3px solid #6d28d9;padding-left:10px">${escapeHtml(lead.consentText)}</p>` : ""}
      <p style="color:#9aa0ad;font-size:12px;margin-top:20px">Submitted ${lead.submittedAt}</p>
    </div>`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((e) => e.trim()),
        reply_to: lead.email,
        subject: `New insurance quote request — ${lead.name}`,
        html,
      }),
    });
    if (!r.ok) throw new Error(`Resend ${r.status}: ${await r.text()}`);
  } catch (err) {
    // Log the full lead so nothing is lost if delivery fails.
    console.error("Quote email failed:", err, lead);
  }

  return res.status(200).json({ ok: true });
}
