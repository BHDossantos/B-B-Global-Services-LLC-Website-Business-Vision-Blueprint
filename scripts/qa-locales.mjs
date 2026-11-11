import assert from 'node:assert/strict';
const base = process.env.QA_BASE || 'http://127.0.0.1:3199';
const headings = new Set();
for (const locale of ['en', 'pt', 'es', 'it']) {
  for (const path of ['/', '/services/cloud-devops', '/privacy']) {
    const response = await fetch(base + path, { headers: { cookie: `NEXT_LOCALE=${locale}` }, signal: AbortSignal.timeout(20000) });
    assert.equal(response.status, 200, `${locale} ${path}`);
    const body = await response.text();
    assert.match(body, new RegExp(`<html[^>]*lang="${locale}"`), `${locale} locale must survive server rendering`);
    const heading = body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1];
    assert.ok(heading, `${locale} ${path} must render a heading`);
    if (path === '/') headings.add(heading);
  }
}
assert.equal(headings.size, 4, 'Each supported locale must render its translated homepage');
console.log('12 built-page locale checks pass (English, Portuguese, Spanish, Italian).');
