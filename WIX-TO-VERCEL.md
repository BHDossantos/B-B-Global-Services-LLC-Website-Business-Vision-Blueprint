# Deploying to Vercel + Connecting bnbglobal.net (registered at Wix)

A click-by-click guide. Two phases: **deploy on Vercel**, then **point the
Wix-registered domain at it**. Budget ~30 minutes of work + DNS propagation time.

---

## Phase A — Deploy on Vercel (~10 min)

1. Go to **[vercel.com](https://vercel.com)** and sign in with **GitHub**.
2. Click **Add New… → Project**.
3. Find and **Import** the repo
   `b-b-global-services-llc-website-business-vision-blueprint`.
   - If you don't see it, click **Adjust GitHub App Permissions** and grant access.
4. Vercel auto-detects **Next.js** — leave all build settings at their defaults.
5. (Optional now, can do later) Expand **Environment Variables** and add any from
   `.env.example` you're ready for (e.g. `RESEND_API_KEY`). You can add these later.
6. Click **Deploy**. Wait ~1–2 min for the build.
7. ✅ When it finishes, click the preview — your site is now **live on a
   `https://<project>.vercel.app` URL**. (This is the real site, just not on your
   domain yet. Test it here first.)

> **Important:** First merge PR #3 into `main` and set `main` as the default
> branch, so Vercel deploys the finished site. Vercel builds the default branch.

---

## Phase B — Point bnbglobal.net (at Wix) to Vercel

### Step 1 — Add the domain in Vercel
1. In your Vercel project: **Settings → Domains**.
2. Type `bnbglobal.net` → **Add**. Also add `www.bnbglobal.net`.
3. Vercel shows the exact DNS records it wants. Keep this tab open — you'll copy
   these values. They'll look like:
   - **A** record, name `@` → `76.76.21.21`
   - **CNAME** record, name `www` → `cname.vercel-dns.com`

### Step 2 — Choose your method at Wix

You have two options. **Use Method 1 if you have Wix email/mailboxes on this
domain** (it preserves them). Method 2 is simplest if you don't.

#### Method 1 — Edit DNS records at Wix (recommended, preserves email)
1. Go to **[wix.com/account/domains](https://www.wix.com/account/domains)**.
2. Click **bnbglobal.net → Manage DNS Records** (sometimes under **Advanced**).
3. Under **A (Host) Records**: edit the `@` record — **remove the Wix IP**
   (`185.230.63.x`) and set it to **`76.76.21.21`**.
4. Under **CNAME Records**: set `www` → **`cname.vercel-dns.com`**
   (remove any existing `www` pointing to Wix).
5. **Leave MX records untouched** — that keeps any Wix email working.
6. Save.

> If Wix won't let you edit the A record (because the domain is "connected to a
> Wix site"), first go to **Domains → bnbglobal.net → Disconnect / Unassign**
> from the Wix site, then the DNS records become editable.

#### Method 2 — Point nameservers to Vercel (simplest, but moves ALL DNS)
> ⚠️ Only do this if you do **not** rely on Wix for email on this domain —
> it replaces Wix's records, including MX (email).
1. In Vercel's domain panel, switch to the **Nameservers** option to see Vercel's
   nameservers (e.g. `ns1.vercel-dns.com`, `ns2.vercel-dns.com`).
2. At Wix: **Domains → bnbglobal.net → Advanced → Update Nameservers** → enter
   Vercel's nameservers → Save.

### Step 3 — Wait & verify
1. DNS changes take **minutes to a few hours** to propagate.
2. Back in Vercel's **Domains** panel, the domain flips to **Valid Configuration**
   and Vercel **auto-issues SSL**.
3. Visit **https://bnbglobal.net** — you should see the site with a padlock.
4. Confirm **www** redirects to the apex (set the preferred one in Vercel).

---

## After it's live
- Submit a test contact form + assessment; confirm the lead + auto-reply arrive
  (requires `RESEND_API_KEY` etc. set in Vercel env → redeploy).
- Update `bookingUrl` in `lib/siteConfig.ts` with the real Calendly link.
- Submit `https://bnbglobal.net/sitemap.xml` to Google Search Console.
- Run the QA crawler against the live URL: `QA_BASE=https://bnbglobal.net npm run qa`.

## Troubleshooting
- **403 / old Wix page still showing:** DNS hasn't propagated, or a Wix A record
  remains. Re-check the `@` A record = `76.76.21.21` and that the domain is
  disconnected from any Wix site.
- **"Invalid Configuration" in Vercel:** the records don't match — copy Vercel's
  values exactly (no trailing dots/spaces).
- **Email stopped working:** you changed nameservers (Method 2) and lost MX
  records. Switch back to Method 1, or re-add your email provider's MX records.
