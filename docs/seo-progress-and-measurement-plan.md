# SEO Progress and Measurement Plan

Prepared: 8 September 2026. This batch is available locally and has not been published.

## Implemented in this batch

| Audit task | Result | Remaining boundary |
| --- | --- | --- |
| T04: positioning | Updated general FAQ, Pricing, Contact introduction and homepage enquiry copy; carbon-focused Products positioning retained | Confirm each regulation's deployable package and version in product demonstrations; no new capability or certification claims added |
| T07: solution search intent | Specific titles, H1s and descriptions for consultants, brands/procurement, and manufacturers/exporters in English and Chinese | Dedicated PCF and CBAM workflow landing pages are still future content work |
| T10: Resource Center payload | Summary-only article props; full-text search runs on the server and returns IDs; category filters and reading time retained | Search requires a working connection; browsing remains available if search fails |
| T11: responsive images | Explicit sizes for list cards, lead image, whitepaper thumbnail, article cover and related cards; article cover frames use 1200:630 | This verifies the resource/article surfaces; it is not a full-site media or video performance audit |
| T12: structured data | Shared Organization ID; server-rendered Organization, homepage WebSite, solution BreadcrumbList, resource CollectionPage; publisher references aligned | No fabricated people, ratings, testimonials or case studies |
| T18: measurement | Local production HTML comparison, image selection checks and build verification | Public PageSpeed API returned 429 RESOURCE_EXHAUSTED; no reliable LCP, CLS, INP or field-data score obtained |

## Measurements and validation

- Resource Center initial uncompressed HTML: **476,487 bytes before; 114,179 bytes after**, a **76.0% reduction**. Both captures used the local production server at `/resources`, the same article library and the same request method.
- Resource Center route bundle as reported by Next.js: 8.76 kB before; 6.73 kB after. Reported first-load JS: 182 kB before; 180 kB after. These are build estimates, not measured visitor download times.
- All 18 article links remain in initial HTML.
- Full-text searches for `backup generators`, `PCF`, a Chinese supplier term, an empty query and a no-match query agree with the article corpus. The API returns IDs only, never article bodies.
- Search, category filtering and empty-result recovery were checked in the browser.
- At the tested 390px viewport, visible 150px article thumbnails selected `w=256` image variants. Thumbnail dimensions were 150 by 78.75 pixels, preserving 1200:630. Device pixel ratio and viewport can change the selected variant.
- Production build, schema checks, and existing language/canonical, sitemap, navigation and 404 checks passed.
- Existing image warnings in ExpandableCards remain unrelated to this batch.

## T14: questions the measurement should answer

1. Which channels bring relevant visitors?
2. Which articles bring readers to product or solution pages?
3. Which pages lead to a successfully delivered enquiry?
4. Which enquiries become booked demos and qualified opportunities?

Use GA4 for website activity, Search Console for Google search performance, and a lead sheet or existing CRM for sales outcomes. Each answers a different part of the journey.

## Phase 1: establish access and a baseline

- Confirm the GA4 property and web stream for `climate-seal.com`. Current code uses measurement ID `G-BM7079RZZH`; this identifies a stream, not evidence that every event is recorded correctly.
- Confirm Search Console ownership and access. Use its Performance and Pages reports; no new property is needed if the domain is already verified.
- Inspect the last 28 complete days and the preceding 28 days. Record property timezone, filters and any known tracking changes.
- Separate production traffic from localhost, staff testing and spam as far as the available data permits.
- Verify actual page views on client-side navigation, potential duplicate initialization, consent behavior, and receipt of custom events. Do not assume code installation proves collection.
- Record historical limitations. Changes to tracking or attribution cannot reconstruct data that was never collected.

## Phase 2: agree event definitions

| Measurement | Current implementation | Proposed use / check |
| --- | --- | --- |
| Page views | GA4 initialization is present | Verify one appropriate page view per navigation; break down landing page, source/medium, device and country |
| Demo CTA click | `book_demo_click` on selected links | An expression of interest, not a booked demo; check homepage and other CTA coverage |
| Successful enquiry | Both `contact_form_submit` and `demo_request_submit` fire after the API confirms success | Use **one**, preferably `contact_form_submit`, as the primary website key event; never add the two counts together |
| Newsletter subscription | `newsletter_subscribe` | A separate content conversion; it is not automatically a qualified sales lead |
| Response-pack request/download | `pcf_pack_form_submit`, `pcf_pack_download` | Distinguish a successfully submitted request from a click on the download link |
| Article engagement | `scroll_75` | Supporting engagement signal; combine with GA engagement rather than claiming the entire article was read |
| Solution interest | `solution_page_view` | Review the solution identifier and compare with general page views |
| Booked demo | No verified website event | Record only when an appointment is confirmed in the chosen lead system |
| Qualified opportunity | No verified website event | Record after the team confirms role, relevant use case, project timing and fit |

Do not send names, email addresses, phone numbers, message text, document contents or raw search queries to GA4. Keep personal contact details in the lead system. Validate query-string handling before adding new analytics parameters.

## Phase 3: connect enquiries to follow-up

Recommended starting point if there is no CRM: one private lead sheet with an owner and consistent statuses:

`New enquiry → Contacted → Demo booked → Demo held → Qualified / Not a fit`

Keep a request ID, submitted date, entry page, channel/campaign where lawfully available, assigned owner, next action and outcome. Contact information stays in the private lead system. A random request ID is a pseudonymous identifier, not a guarantee of anonymity.

The website currently distinguishes some form locations in analytics, but this alone is not complete first-touch attribution or a link to sales outcomes. Plan any storage/schema changes after choosing the lead system and confirming retention and consent practices.

## Phase 4: reporting

Start with a weekly manual review, not an automated alert system:

- Users, sessions and engaged sessions by channel and production landing page.
- Google impressions, clicks, CTR and average position by page and query group. Separate branded and non-branded queries.
- Top articles by visits and enquiry contribution where attribution is available.
- Successfully delivered enquiries, booked demos and qualified opportunities, shown as counts as well as rates.
- Target-country and device breakdowns only when sample sizes are useful.

Establish a baseline before setting growth targets. Do not imply that more clicks necessarily mean more qualified leads.

## Decisions to make together

1. Where are enquiries and demo outcomes recorded today, and who follows them up?
2. Can the team access the existing GA4 and Search Console accounts, or should we begin with exported reports?
3. What makes an enquiry qualified for Climate Seal, and which countries or customer groups are priorities?

## Still pending outside this batch

- T08: expert/team evidence and case studies, pending real source materials.
- T13: privacy specifics, pending confirmation of actual processing, retention and service providers.
- T07 dedicated workflow pages and T16 content hub/new guides: separate editorial work, not silently included as completed here.
- T17: external references or outreach, pending suitable partners and explicit permission to contact them.
- T18 field performance: retry when a usable PageSpeed/CrUX or existing monitoring source is available.

No analytics account settings, access rights, scheduled reports, CRM records, or outreach messages were changed in this batch.
