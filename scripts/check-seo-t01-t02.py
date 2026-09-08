"""Read-only checks for SEO audit tasks T01, T02, T05 and T15."""

import json
import sys
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from urllib.error import HTTPError
from urllib.request import HTTPRedirectHandler, Request, build_opener


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.links = []
        self.anchors = []
        self.titles = []
        self.in_title = False
        self.robots = []
        self.meta = {}
        self.language = None
        self.text = []
        self.schemas = []
        self.script = None
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'html':
            self.language = attrs.get('lang')
        elif tag == 'link':
            self.links.append(attrs)
        elif tag == 'a':
            self.anchors.append(attrs)
        elif tag == 'title':
            self.in_title = True
        elif tag == 'meta':
            self.meta[attrs.get('property') or attrs.get('name')] = attrs.get('content')
            if attrs.get('name') == 'robots':
                self.robots.append(attrs.get('content', ''))
        elif tag == 'script':
            self.script = (attrs.get('type'), [])

    def handle_data(self, data):
        if self.in_title:
            self.titles.append(data)
        if self.script is not None:
            self.script[1].append(data)
        else:
            self.text.append(data)

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        if tag == 'script' and self.script is not None:
            if self.script[0] == 'application/ld+json':
                self.schemas.append(json.loads(''.join(self.script[1])))
            self.script = None


base = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3011').rstrip('/')
canonical_base = (sys.argv[2] if len(sys.argv) > 2 else 'https://climate-seal.com').rstrip('/')
home = canonical_base + '/'
alternates = {'en': home, 'zh': home + '?lang=zh', 'x-default': home}


class RedirectHandler(HTTPRedirectHandler):
    # macOS Python 3.9 does not follow permanent 308 redirects by default.
    http_error_308 = HTTPRedirectHandler.http_error_302

    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return super().redirect_request(req, fp, 302 if code == 308 else code, msg, headers, newurl)


def fetch(path, cookie=None, expected_status=200):
    # urllib does not retain response cookies, so each case is independent.
    headers = {'User-Agent': 'SEO-Audit-Validation/1.0'}
    if cookie:
        headers['Cookie'] = cookie
    try:
        response = build_opener(RedirectHandler()).open(Request(base + path, headers=headers), timeout=90)
    except HTTPError as error:
        response = error
    with response:
        assert response.status == expected_status, (path, response.status)
        return response.read().decode('utf-8')


for path, language, cookie in [
    ('/', 'en', None),
    ('/?lang=zh', 'zh', None),
    ('/', 'en', 'preferred-language=zh'),
    ('/?lang=zh', 'zh', 'preferred-language=en'),
    ('/?lang=zh&utm_source=seo-test', 'zh', None),
    ('/?lang=en', 'en', None),
]:
    page = Page(fetch(path, cookie))
    expected = alternates[language]
    canonical = [link['href'] for link in page.links if link.get('rel') == 'canonical']
    languages = {link['hreflang']: link['href'] for link in page.links if 'hreflang' in link}
    assert page.language == language, (path, page.language)
    assert canonical == [expected], (path, canonical, expected)
    assert languages == alternates, (path, languages)
    assert page.meta['og:url'] == expected, (path, page.meta.get('og:url'))
    visible = ' '.join(page.text)
    assert '$299' in visible, path
    assert ('AI-Powered Sustainability' in visible) == (language == 'en'), path
    print(f'PASS home: {path}, cookie={cookie or "none"}')

namespaces = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9',
              'x': 'http://www.w3.org/1999/xhtml'}
entries = ET.fromstring(fetch('/sitemap.xml')).findall('s:url', namespaces)
home_entries = [entry for entry in entries
                if entry.findtext('s:loc', namespaces=namespaces) in (home, alternates['zh'])]
assert len(home_entries) == 2
for entry in home_entries:
    links = {link.attrib['hreflang']: link.attrib['href']
             for link in entry.findall('x:link', namespaces)}
    assert links == alternates, links
print('PASS sitemap: two home URLs with matching reciprocal language links')

for suffix in ('', '?lang=zh'):
    products = Page(fetch('/products' + suffix))
    software = [schema for schema in products.schemas
                if schema.get('@type') == 'SoftwareApplication'
                and schema.get('name') == 'Climate Seal Platform']
    assert len(software) == 1, software
    assert 'offers' not in software[0], software[0]
    pricing = Page(fetch('/pricing' + suffix))
    assert '$299' in ' '.join(pricing.text)
    print(f'PASS products/pricing{suffix}: obsolete Offer removed; visible $299 retained')

for suffix in ('', '?lang=zh'):
    page = Page(fetch('/' + suffix))
    for route in ('/about', '/products', '/pricing', '/contact'):
        assert any(a.get('href') == route for a in page.anchors), (suffix, route)
        fetch(route + suffix)
    for route in ('/pricing', '/contact'):
        assert sum(a.get('href') == route for a in page.anchors) >= 2, route
    print(f'PASS navigation/footer{suffix}: four crawlable destinations return 200')

for path in ('/seo-check-missing-page', '/seo-check-missing-page?lang=zh'):
    page = Page(fetch(path, expected_status=404))
    assert len(page.titles) == 1, (path, page.titles)
    assert 'not found' in page.titles[0] or '页面未找到' in page.titles[0]
    assert not any(link.get('rel') == 'canonical' or 'hreflang' in link for link in page.links)
    assert page.robots and all('noindex' in value for value in page.robots), page.robots
    print(f'PASS 404: {path}, single title, no canonical/hreflang, noindex')

print('T01, T02, T05 and T15 checks passed. No submissions or account changes performed.')
