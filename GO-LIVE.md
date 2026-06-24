# Go-Live Checklist

A foolproof, ordered path from this PR to a live site at **bnbglobal.net**.
Check items off in order. Most take minutes.

> Full details for each step are in `DEPLOYMENT.md`. This is the quick runbook.

## 1. Merge the code
- [ ] Open **PR #3**, confirm CI ("Lint, typecheck & build") is green
- [ ] In **GitHub → Settings → General → Default branch**, set default to `main`
- [ ] Mark PR #3 **Ready for review**, then **Merge** it into `main`

## 2. Deploy on Vercel
- [ ] Sign in to [vercel.com](https://vercel.com) and **Add New → Project**
- [ ] Import the repo (framework auto-detects as Next.js — keep defaults)
- [ ] Click **Deploy**; confirm the build succeeds and the `*.vercel.app` URL loads

## 3. Connect the domain
- [ ] Vercel → Project → **Settings → Domains** → add `bnbglobal.net` and `www.bnbglobal.net`
- [ ] At your registrar, set the DNS records Vercel shows
      (apex `A` → `76.76.21.21`; `www` `CNAME` → `cname.vercel-dns.com`)
- [ ] Set `www` → apex redirect (or vice-versa); wait for SSL to issue

## 4. Make leads reach you (pick at least one)
- [ ] **Resend** (recommended): verify `bnbglobal.net`, then set
      `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` in Vercel env vars
- [ ] and/or **HubSpot**: set `HUBSPOT_PORTAL_ID`, `HUBSPOT_FORM_GUID`
- [ ] and/or **Webhook**: set `CONTACT_WEBHOOK_URL`
- [ ] **Redeploy** after adding env vars so they take effect

## 5. Wire the booking + email inbox
- [ ] Create the **Calendly** event; update `bookingUrl` in `lib/siteConfig.ts`
      (commit → auto-deploys)
- [ ] Set up **hello@bnbglobal.net** (Google Workspace / M365) with MX records

## 6. Analytics (optional)
- [ ] Vercel Analytics works automatically once deployed
- [ ] For GA4/PostHog, set `NEXT_PUBLIC_GA_ID` and/or `NEXT_PUBLIC_POSTHOG_KEY`

## 7. Final verification (do this once live)
- [ ] `https://bnbglobal.net` loads with valid SSL; `www` redirects
- [ ] `npm run build && npm run start`, then `QA_BASE=... npm run qa` → 0 issues
- [ ] Submit a **test contact form** and a **test assessment**; confirm the
      lead arrives + the auto-reply email is received
- [ ] Submit `https://bnbglobal.net/sitemap.xml` to **Google Search Console**
- [ ] Paste the URL into LinkedIn/Slack to confirm the **OG preview** renders

## 8. Launch the business (the part that earns)
- [ ] Publish the **LinkedIn company page** (`business/marketing/linkedin-company-page.md`)
- [ ] Post launch post #1 (`business/marketing/linkedin-launch-posts.md`)
- [ ] Start the **outreach sequence** (`business/marketing/outreach-email-sequence.md`)
- [ ] Begin the **90-day plan** from the Business Vision Blueprint

---

### Pre-flight status (as of this PR)
- ✅ Production build green (95 routes); CI passing
- ✅ QA crawl: 0 broken links, 0 metadata issues
- ✅ SEO: per-page metadata, JSON-LD, sitemap, robots, OG images
- ✅ Lead capture: assessment, ROI calculator, contact form (validation + honeypot + scoring + auto-reply)
- ⏳ Needs you: domain, env keys, Calendly link, MSA legal review, real testimonials
