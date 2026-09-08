"""Read-only checks of rendered article links, dates, and enquiry form fields."""
import json
import sys
from html.parser import HTMLParser
from urllib.request import urlopen

base = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3011').rstrip('/')


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.required = []
        self.links = []
        self.options = []
        self.schemas = []
        self.script = None
        self.feed(html)

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if tag in ('input', 'select', 'textarea') and 'required' in attrs:
            self.required.append(attrs.get('name'))
        if tag == 'a':
            self.links.append(attrs)
        if tag == 'option':
            self.options.append(attrs.get('value'))
        if tag == 'script':
            self.script = (attrs.get('type'), [])

    def handle_data(self, data):
        if self.script:
            self.script[1].append(data)

    def handle_endtag(self, tag):
        if tag == 'script' and self.script:
            if self.script[0] == 'application/ld+json':
                self.schemas.append(json.loads(''.join(self.script[1])))
            self.script = None


def fetch(path):
    with urlopen(base + path, timeout=40) as response:
        assert response.status == 200, path
        return response.read().decode('utf-8')


for path in ('/contact', '/contact?lang=zh', '/', '/consultant-partner-program', '/referral-program'):
    page = Page(fetch(path))
    assert sorted(page.required) == ['company', 'email', 'name'], (path, page.required)
    assert 'consulting' in page.options and 'procurement' in page.options, path
    print('PASS three-field enquiry:', path)

targets = set()
for slug in ('bom-ready-for-pcf', 'secondary-data-for-pcf', 'pcf-reporting-periods-explained', 'cbam-default-values-vs-pcf'):
    for suffix in ('', '?lang=zh'):
        page = Page(fetch('/resources/' + slug + suffix))
        # Markdown links use this class; global navigation cannot satisfy this check.
        links = [a.get('href', '') for a in page.links if 'text-emerald-600 underline hover:text-emerald-700 transition-colors' in a.get('class', '')]
        assert any(link.startswith('/solutions/') for link in links), slug
        assert any(link.startswith('/contact') for link in links), slug
        targets.update(link for link in links if link.startswith('/'))
    print('PASS contextual solution and enquiry links:', slug)
for target in sorted(targets):
    fetch(target)
print('PASS internal link destinations:', len(targets))

for slug in ('cbam-default-values-vs-pcf', 'cbam-2026-real-carbon-cost', 'cbam-chinese-companies-carbon-competitiveness', 'cbam-exporters-selling-to-eu-preparation-guide'):
    for suffix in ('', '?lang=zh'):
        html = fetch('/resources/' + slug + suffix)
        page = Page(html)
        article = next(schema for schema in page.schemas if schema.get('@type') == 'Article')
        assert article['dateModified'] == '2026-09-08', slug
        assert article['datePublished'] != article['dateModified'], slug
        assert 'Updated' in html or '更新于' in html, slug
    print('PASS original publication date and substantive update date:', slug)

print('Content release checks passed; no forms submitted.')
