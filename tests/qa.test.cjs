const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createServer } = require('node:http');
const { spawn } = require('node:child_process');

async function run(routes) {
  const server = createServer((req, res) => {
    const response = routes[req.url] || [404, 'Missing'];
    res.writeHead(response[0], { 'content-type': 'text/html' }); res.end(response[1]);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    return await new Promise((resolve, reject) => {
      const child = spawn(process.execPath, ['scripts/qa-crawl.mjs'], { env: { ...process.env, QA_BASE: `http://127.0.0.1:${server.address().port}` } });
      let output = ''; child.stdout.on('data', d => output += d); child.stderr.on('data', d => output += d);
      child.on('error', reject); child.on('close', code => resolve({ code, output }));
    });
  } finally { await new Promise(resolve => server.close(resolve)); }
}
const sitemap = '<urlset><url><loc>https://bnbglobal.net/</loc></url></urlset>';
const html = '<title>Demo</title><meta name="description" content="Demo description">';
test('QA refuses missing sitemap', async () => { const r = await run({}); assert.notEqual(r.code, 0); assert.match(r.output, /SITEMAP 404/); });
test('QA refuses empty sitemap', async () => { const r = await run({ '/sitemap.xml': [200, '<urlset/>'] }); assert.notEqual(r.code, 0); assert.match(r.output, /coverage is unverified/); });
test('QA fails on broken internal links', async () => { const r = await run({ '/sitemap.xml': [200, sitemap], '/': [200, html + '<a href="/missing">Broken</a>'] }); assert.notEqual(r.code, 0); assert.match(r.output, /404 \/missing/); });
test('QA fails on missing metadata', async () => { const r = await run({ '/sitemap.xml': [200, sitemap], '/': [200, '<p>Demo</p>'] }); assert.notEqual(r.code, 0); assert.match(r.output, /MISSING TITLE/); });
test('QA passes verified healthy coverage', async () => { const r = await run({ '/sitemap.xml': [200, sitemap], '/': [200, html] }); assert.equal(r.code, 0, r.output); assert.match(r.output, /Crawled 1 sitemap pages/); });
