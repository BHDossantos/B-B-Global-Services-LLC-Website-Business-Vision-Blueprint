# Lead Delivery Setup — Get Leads in Your Inbox

The site captures leads from **3 places** (contact form, free assessment, ROI
calculator) plus newsletter signups. This guide turns on email delivery so
every one lands in **brunodossantos707@gmail.com** — without exposing that
address on the site.

There are two stages: a **3-minute quick start** (leads flowing today) and a
**production upgrade** (branded sender + auto-replies to prospects).

---

## ⚡ Quick start (3 minutes — leads start flowing)

This uses Resend's free test sender, so there's **no DNS to configure** yet.

1. Go to **[resend.com](https://resend.com)** → **Sign up** using
   **brunodossantos707@gmail.com**.
2. In the Resend dashboard → **API Keys** → **Create API Key** → copy it
   (starts with `re_`).
3. In **Vercel** → your project → **Settings → Environment Variables**, add
   these three (Environment: **Production**):

   | Name | Value |
   |---|---|
   | `RESEND_API_KEY` | `re_...` (the key you just copied) |
   | `CONTACT_TO_EMAIL` | `brunodossantos707@gmail.com` |
   | `CONTACT_FROM_EMAIL` | `onboarding@resend.dev` |

4. **Redeploy:** Vercel → Deployments → ⋯ on the latest → **Redeploy**
   (env vars only apply after a redeploy).
5. **Test:** open the live site → submit the contact form → a
   **"[Hot/Warm/Cool] New consultation request"** email arrives in your Gmail.

> Why `onboarding@resend.dev`? Resend lets you send from it to **your own
> signup email** with zero setup — perfect for getting started. Prospect
> auto-replies stay off until stage 2 (they need a verified domain).

---

## 🚀 Production upgrade (branded sender + prospect auto-replies)

Do this when you're ready — it makes emails come from `bnbglobal.net` and
turns on the automatic "we got your message" reply to every prospect.

1. In **Resend → Domains → Add Domain** → enter **bnbglobal.net**.
2. Resend shows a few **DNS records** (SPF, DKIM, etc.). Add them in **Wix →
   Settings → Domains → bnbglobal.net → Manage DNS records**. (These are
   additional records — they don't affect the A/CNAME pointing to Vercel.)
3. Wait for Resend to show the domain as **Verified**.
4. In **Vercel** env vars, change one value and add another:

   | Name | Value |
   |---|---|
   | `CONTACT_FROM_EMAIL` | `notifications@bnbglobal.net` |

5. **Redeploy.** Now lead notifications come from your domain, and every
   prospect gets an instant branded auto-reply with your booking link.

---

## What you'll receive

- **Contact form / assessment / ROI lead** → an email titled
  `[Hot] New consultation request — Name (Company)` with all their details and
  a **lead score** so you know who to call first.
- **Newsletter signup** → a short `New subscriber — email@…` notification.
- Replies you send go straight back to the prospect; your personal Gmail is
  never shown to them (reply-to is `hello@bnbglobal.net`).

## Optional: also push leads to a CRM or spreadsheet

Set any of these in Vercel env vars (see `.env.example`):
- `CONTACT_WEBHOOK_URL` — Zapier/Make/n8n/Google-Sheet webhook (gets every lead as JSON)
- `HUBSPOT_PORTAL_ID` + `HUBSPOT_FORM_GUID` — HubSpot CRM capture
