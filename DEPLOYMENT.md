# Deployment Guide

How to take the B&B Global Services site live on **Vercel** at **bnbglobal.net**.

---

## 1. Prerequisites

- The repository pushed to GitHub (done).
- A [Vercel](https://vercel.com) account (free Hobby tier works to start; Pro recommended for a business site).
- Access to your domain registrar's DNS for `bnbglobal.net`.

## 2. Import the project

1. In Vercel, click **Add New… → Project**.
2. Import the GitHub repo `b-b-global-services-llc-website-business-vision-blueprint`.
3. Framework preset: **Next.js** (auto-detected). Leave build settings at defaults:
   - Build command: `next build`
   - Output: `.next`
   - Install command: `npm install`
4. Click **Deploy**. The first build runs the same checks as CI (lint, types, build).

## 3. Environment variables

In **Project → Settings → Environment Variables**, add any you want active
(all optional — see `.env.example`). Apply to **Production** (and Preview if desired):

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` | Email notifications for contact form |
| `HUBSPOT_PORTAL_ID` / `HUBSPOT_FORM_GUID` | CRM lead capture |
| `CONTACT_WEBHOOK_URL` | Generic lead webhook |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 |
| `NEXT_PUBLIC_POSTHOG_KEY` / `NEXT_PUBLIC_POSTHOG_HOST` | PostHog analytics |

Redeploy after adding variables so they take effect.

## 4. Connect the domain

1. **Project → Settings → Domains → Add** → enter `bnbglobal.net` and `www.bnbglobal.net`.
2. Vercel shows the DNS records to set. At your registrar:
   - **Apex** `bnbglobal.net` → `A` record → `76.76.21.21`
   - **www** → `CNAME` → `cname.vercel-dns.com`
   - (Or follow Vercel's exact values — they may differ; trust the dashboard.)
3. Set `www` to redirect to the apex (or vice-versa) in Vercel's domain settings.
4. SSL certificates are issued automatically once DNS propagates (minutes to a few hours).

## 5. Business email (hello@bnbglobal.net)

Website sending and inbox email are separate:

- **Inbox** (receiving mail at `hello@bnbglobal.net`): set up Google Workspace
  or Microsoft 365 and add their **MX records** at your registrar.
- **Form sending** via Resend: verify the `bnbglobal.net` domain in Resend
  (adds SPF/DKIM records) and use a sender like `website@bnbglobal.net`.

## 6. Post-launch checklist

- [ ] Switch the GitHub repo's **default branch to `main`** (Settings → General).
- [ ] Verify `https://bnbglobal.net` loads with valid SSL and `www` redirects.
- [ ] Submit a test contact form; confirm the email/CRM destination receives it.
- [ ] Update `bookingUrl` in `lib/siteConfig.ts` with the real Calendly link.
- [ ] Submit `https://bnbglobal.net/sitemap.xml` to Google Search Console.
- [ ] Confirm analytics is recording (GA Realtime or PostHog).
- [ ] Spot-check OG preview by pasting the URL into LinkedIn/Slack.

## 7. Ongoing

- Every push to a PR runs CI (`.github/workflows/ci.yml`).
- Merging to `main` triggers a production deploy.
- Every PR/branch gets a Vercel **Preview URL** for review before merge.
