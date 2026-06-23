// Pre-deploy QA crawler: checks every sitemap URL + all internal links for
// broken responses, and audits each page for unique title/meta description.
const BASE = process.env.QA_BASE || "http://localhost:3199";

async function getText(path) {
  const res = await fetch(BASE + path);
  const body = await res.text();
  return { status: res.status, body };
}

function attr(html, re) {
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

async function main() {
  // 1. Pull sitemap URLs.
  const sm = await getText("/sitemap.xml");
  const urls = [...sm.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
    m[1].replace(/^https?:\/\/[^/]+/, "").replace(/^https?:\/\/bnbglobal\.net/, "")
  );
  const paths = Array.from(new Set(urls.map((u) => u.replace("https://bnbglobal.net", "") || "/")));

  const titles = new Map();
  const descs = new Map();
  const brokenLinks = new Set();
  const internalLinks = new Set();
  const issues = [];

  for (const path of paths) {
    const { status, body } = await getText(path);
    if (status !== 200) {
      issues.push(`PAGE ${status}: ${path}`);
      continue;
    }
    const title = attr(body, /<title[^>]*>([^<]*)<\/title>/i);
    const desc = attr(body, /<meta name="description" content="([^"]*)"/i);
    if (!title) issues.push(`MISSING TITLE: ${path}`);
    if (!desc) issues.push(`MISSING DESCRIPTION: ${path}`);
    if (title) titles.set(title, (titles.get(title) || []).concat(path));
    if (desc) descs.set(desc, (descs.get(desc) || []).concat(path));

    // Collect internal links.
    for (const m of body.matchAll(/href="(\/[^"#?]*)"/g)) {
      internalLinks.add(m[1]);
    }
    // Check for raw "node=" attribute leaks or undefined text.
    if (body.includes("node=\"[object")) issues.push(`DOM LEAK node=: ${path}`);
    if (/>undefined</.test(body)) issues.push(`UNDEFINED TEXT: ${path}`);
  }

  // 2. Check every internal link resolves.
  for (const link of internalLinks) {
    if (link.startsWith("/_next") || link.startsWith("/api")) continue;
    const res = await fetch(BASE + link, { method: "GET" });
    if (res.status >= 400) {
      brokenLinks.add(`${res.status} ${link}`);
    }
  }

  // 3. Duplicate metadata.
  for (const [t, ps] of titles) if (ps.length > 1) issues.push(`DUP TITLE (${ps.length}): "${t.slice(0, 60)}" -> ${ps.join(", ")}`);
  for (const [d, ps] of descs) if (ps.length > 1) issues.push(`DUP DESCRIPTION (${ps.length}): ${ps.join(", ")}`);

  console.log(`Crawled ${paths.length} sitemap pages, ${internalLinks.size} unique internal links.`);
  console.log(`\n=== BROKEN LINKS (${brokenLinks.size}) ===`);
  console.log(brokenLinks.size ? [...brokenLinks].join("\n") : "none");
  console.log(`\n=== ISSUES (${issues.length}) ===`);
  console.log(issues.length ? issues.join("\n") : "none");
}

main().catch((e) => { console.error(e); process.exit(1); });
