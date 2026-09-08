import assert from 'node:assert/strict';
import fs from 'node:fs';

const base = process.argv[2] || 'http://localhost:3011';
const articles = JSON.parse(fs.readFileSync('src/data/articles.json', 'utf8')).articles;
for (const query of ['', 'backup generators', 'PCF', '供应商', 'no-match-839251']) {
  const response = await fetch(`${base}/api/resources/search?q=${encodeURIComponent(query)}`);
  assert.equal(response.status, 200);
  const data = await response.json();
  assert.deepEqual(Object.keys(data), ['ids']);
  const expected = articles.filter((a) => [a.title, a.titleZh, a.excerpt, a.excerptZh, a.content, a.contentZh, a.category, a.categoryZh]
    .join(' ').toLocaleLowerCase().includes(query.toLocaleLowerCase())).map((a) => a.id);
  assert.deepEqual(data.ids, expected, query);
}
assert.equal((await fetch(`${base}/api/resources/search?q=${'x'.repeat(301)}`)).status, 400);
const html = await (await fetch(`${base}/resources`)).text();
for (const article of articles) {
  assert.ok(html.includes(`href="/resources/${article.id}"`), article.id);
  assert.ok(!html.includes(article.content.slice(0, 250)), 'Article body must not be in list props');
}
assert.ok(!html.includes('Temporary use of backup generators'), 'Full text belongs on the server');
assert.ok(Buffer.byteLength(html) < 200000, 'Listing payload regression');
const schemas = (source) => [...source.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
assert.ok(schemas(html).some((schema) => schema['@type'] === 'CollectionPage'));
for (const path of ['/', '/about', '/products', '/solutions/carbon-expert', '/solutions/brand-owner', '/solutions/supply-chain']) {
  const page = await (await fetch(base + path)).text();
  const data = schemas(page);
  const organizations = data.filter((schema) => schema['@type'] === 'Organization');
  assert.equal(organizations.length, 1, path);
  assert.ok(organizations[0]['@id'].endsWith('/#organization'), path);
  if (path === '/') assert.ok(data.some((schema) => schema['@type'] === 'WebSite'));
  if (path.startsWith('/solutions/')) assert.ok(data.some((schema) => schema['@type'] === 'BreadcrumbList'));
  if (path !== '/products') assert.ok(!data.some((schema) => schema['@type'] === 'SoftwareApplication'));
}
console.log(`PASS full-text search, Chinese search, empty/no results, payload guard, ${articles.length} SSR article links, and shared schemas`);
