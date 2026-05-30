# B&B Global Services LLC — Website

**Technology Delivery From Idea to Operations.**

Marketing website for B&B Global Services LLC, a full-service technology
transformation and managed services company for mid-market businesses.
Built from the official Business Vision Blueprint.

## Stack

- **[Next.js 14](https://nextjs.org/)** (App Router) + **React 18**
- **TypeScript**
- **Tailwind CSS**
- Deploy target: **[Vercel](https://vercel.com/)**

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint (next/core-web-vitals)
npm run typecheck  # tsc --noEmit
```

## Project structure

```
app/
  layout.tsx              # Root layout, fonts, SEO metadata, JSON-LD schema
  page.tsx                # Homepage (all 9 blueprint sections)
  services/
    page.tsx              # Services overview
    [slug]/page.tsx       # 6 service pillar pages (data-driven)
  solutions/
    page.tsx              # Solutions overview
    [slug]/page.tsx       # 6 outcome-based solution pages
  industries/page.tsx
  about/page.tsx
  case-studies/page.tsx
  insights/page.tsx       # CMS-ready blog/insights index
  contact/page.tsx        # Contact form + booking + engagement offers
  api/contact/route.ts    # Form handler (validation, honeypot, webhook/CRM hook)
  sitemap.ts / robots.ts  # SEO
components/                # Hero, cards, framework, navbar, footer, form, FAQ, ...
lib/
  siteConfig.ts           # Brand, nav, contact details, booking URL
  content/                # Services, solutions, and marketing copy (single source of truth)
```

Content lives in `lib/content/*` so pages stay DRY and copy can later move to
a CMS without touching layout.

## Configuration

Update brand and integration details in **`lib/siteConfig.ts`**:

- `url` — production domain (used for canonical URLs, sitemap, JSON-LD)
- `email`, `phone`, `locations`
- `bookingUrl` — Calendly (or other) scheduling link
- `social.linkedin`

### Contact form / lead capture

`app/api/contact/route.ts` validates submissions (with a honeypot for spam)
and is ready to forward leads. Set an environment variable to wire it up:

```bash
# .env.local
CONTACT_WEBHOOK_URL=https://...   # generic webhook, Zapier, HubSpot, etc.
```

Without it, leads are logged server-side. Swap in HubSpot Forms API or
Resend/SendGrid for production email + CRM as noted in the route file.

## SEO

- Per-page `metadata` (titles, descriptions, keywords)
- `ProfessionalService` / `LocalBusiness` JSON-LD in the root layout
- `sitemap.xml` and `robots.txt` generated automatically
- Semantic headings, skip-to-content link, and accessible focus states

## Deployment (Vercel)

1. Push to GitHub (this repo).
2. Import the project in Vercel.
3. Set environment variables (e.g. `CONTACT_WEBHOOK_URL`).
4. Deploy — no extra build config needed.

## Roadmap (from the blueprint)

- Connect Insights to a headless CMS or MDX
- Add Google Analytics / PostHog
- Per-page case study and insight detail routes
- Careers, Partners, and Client Portal sections
