import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/siteConfig";

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

type Lead = {
  name: string;
  company: string;
  email: string;
  phone: string;
  companySize: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  submittedAt: string;
};

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

  const lead: Lead = {
    name: data.name!.trim(),
    company: data.company?.trim() || "",
    email: data.email!.trim(),
    phone: data.phone?.trim() || "",
    companySize: data.companySize || "",
    service: data.service || "",
    budget: data.budget || "",
    timeline: data.timeline || "",
    message: data.message!.trim(),
    submittedAt: new Date().toISOString(),
  };

  const score = scoreLead(lead);

  // Fan out to every configured destination. None block the user's success
  // response — a downstream outage should never lose a lead or show an error.
  const results = await Promise.allSettled([
    sendEmailNotification(lead, score),
    sendAutoReply(lead),
    submitToHubSpot(lead),
    postToWebhook({ ...lead, leadScore: score.score, leadRating: score.rating }),
  ]);

  const delivered = results.some((r) => r.status === "fulfilled" && r.value);
  results.forEach((r) => {
    if (r.status === "rejected") console.error("Contact delivery error:", r.reason);
  });

  if (!delivered) {
    // No integration is configured (or all failed). Log so the lead isn't lost
    // and the developer knows to set environment variables.
    console.info(
      "New contact lead (configure RESEND_API_KEY, HUBSPOT_*, or CONTACT_WEBHOOK_URL to forward):",
      lead
    );
  }

  return NextResponse.json({ ok: true });
}

type LeadScore = { score: number; rating: "Hot" | "Warm" | "Cool" };

/**
 * Simple, transparent lead scoring to help prioritize follow-up. Higher
 * budgets, larger companies, near-term timelines, and a named service all
 * raise the score. Tune the weights to match what converts for you.
 */
function scoreLead(lead: Lead): LeadScore {
  let score = 0;

  const budgetPoints: Record<string, number> = {
    "Under $10,000": 5,
    "$10,000–$25,000": 15,
    "$25,000–$100,000": 30,
    "$100,000–$250,000": 40,
    "$250,000+": 50,
    "Monthly managed services": 35,
  };
  score += budgetPoints[lead.budget] ?? 0;

  const sizePoints: Record<string, number> = {
    "1–25": 5,
    "25–100": 15,
    "100–500": 25,
    "500–1,000": 25,
    "1,000–5,000": 20,
    "5,000+": 15,
  };
  score += sizePoints[lead.companySize] ?? 0;

  const timelinePoints: Record<string, number> = {
    Immediately: 25,
    "1–3 months": 20,
    "3–6 months": 10,
    "6+ months": 5,
    "Just exploring": 2,
  };
  score += timelinePoints[lead.timeline] ?? 0;

  if (lead.service && lead.service !== "Not sure yet") score += 10;
  if (lead.phone) score += 5;
  if (lead.company) score += 5;

  const rating: LeadScore["rating"] =
    score >= 70 ? "Hot" : score >= 40 ? "Warm" : "Cool";
  return { score, rating };
}

/**
 * Email notification via Resend (https://resend.com). Sends to the team and
 * sets reply-to so a reply goes straight back to the prospect.
 * Requires: RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL.
 */
async function sendEmailNotification(lead: Lead, score: LeadScore): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return false;

  const rows = [
    ["Name", lead.name],
    ["Company", lead.company],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Company size", lead.companySize],
    ["Service needed", lead.service],
    ["Budget range", lead.budget],
    ["Timeline", lead.timeline],
  ]
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#475569;font-weight:600">${k}</td><td style="padding:4px 0;color:#0f172a">${escapeHtml(
          v
        )}</td></tr>`
    )
    .join("");

  const ratingColor =
    score.rating === "Hot" ? "#13a3a3" : score.rating === "Warm" ? "#2f6bff" : "#64748b";

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px">
      <h2 style="color:#0a1429">New consultation request</h2>
      <p style="display:inline-block;background:${ratingColor};color:#fff;font-size:13px;font-weight:700;padding:4px 12px;border-radius:999px">
        ${score.rating} lead · score ${score.score}
      </p>
      <table style="border-collapse:collapse;font-size:14px;margin-top:8px">${rows}</table>
      <h3 style="color:#0a1429;margin-top:20px">Message</h3>
      <p style="white-space:pre-wrap;font-size:14px;color:#0f172a">${escapeHtml(
        lead.message
      )}</p>
      <p style="color:#94a3b8;font-size:12px;margin-top:20px">Submitted ${lead.submittedAt}</p>
    </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: to.split(",").map((e) => e.trim()),
      reply_to: lead.email,
      subject: `[${score.rating}] New consultation request — ${lead.name}${
        lead.company ? ` (${lead.company})` : ""
      }`,
      html,
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend failed: ${res.status} ${await res.text()}`);
  }
  return true;
}

/**
 * Auto-reply confirmation to the prospect via Resend, so they get an instant,
 * professional acknowledgement. Requires the same Resend env vars.
 */
async function sendAutoReply(lead: Lead): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  // Replies from prospects go to the PUBLIC address, never the private
  // delivery inbox (CONTACT_TO_EMAIL), so the personal email stays hidden.
  const replyTo = siteConfig.email;
  if (!apiKey || !from) return false;

  const firstName = lead.name.split(" ")[0] || "there";
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;color:#0f172a">
      <p>Hi ${escapeHtml(firstName)},</p>
      <p>Thanks for reaching out to B&amp;B Global Services. We've received your
      message and a member of our team will follow up within one business day
      to schedule your discovery call.</p>
      <p>In the meantime, if it's helpful, you can reach us any time here:
      <a href="${siteConfig.calendlyUrl || `${siteConfig.url}/contact`}">get in touch</a>.</p>
      <p>Talk soon,<br/>The B&amp;B Global Services Team</p>
      <p style="color:#94a3b8;font-size:12px;margin-top:20px">
        Technology delivery from idea to operations · bnbglobal.net
      </p>
    </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [lead.email],
      reply_to: replyTo,
      subject: "We received your message — B&B Global Services",
      html,
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend auto-reply failed: ${res.status} ${await res.text()}`);
  }
  return true;
}

/**
 * Lead capture via HubSpot Forms API.
 * Requires: HUBSPOT_PORTAL_ID, HUBSPOT_FORM_GUID.
 * https://legacydocs.hubspot.com/docs/methods/forms/submit_form
 */
async function submitToHubSpot(lead: Lead): Promise<boolean> {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;
  if (!portalId || !formGuid) return false;

  const [firstname, ...rest] = lead.name.split(" ");
  const fields = [
    { name: "firstname", value: firstname },
    { name: "lastname", value: rest.join(" ") },
    { name: "email", value: lead.email },
    { name: "company", value: lead.company },
    { name: "phone", value: lead.phone },
    { name: "message", value: lead.message },
    // Custom properties — create these in HubSpot or remove if unused.
    { name: "company_size", value: lead.companySize },
    { name: "service_needed", value: lead.service },
    { name: "budget_range", value: lead.budget },
    { name: "timeline", value: lead.timeline },
  ].filter((f) => f.value);

  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields,
        context: { pageName: "Contact — B&B Global Services" },
      }),
    }
  );

  if (!res.ok) {
    throw new Error(`HubSpot failed: ${res.status} ${await res.text()}`);
  }
  return true;
}

/** Generic webhook (Zapier, Make, n8n, internal endpoint, etc.). */
async function postToWebhook(
  lead: Lead & { leadScore?: number; leadRating?: string }
): Promise<boolean> {
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return false;

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
  if (!res.ok) {
    throw new Error(`Webhook failed: ${res.status}`);
  }
  return true;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
