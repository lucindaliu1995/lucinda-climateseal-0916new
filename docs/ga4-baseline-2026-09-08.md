# Climate Seal GA4 Baseline

Reviewed 8 September 2026 from the signed-in GA4 interface. Property: Climate Seal Website (501965800). Report period: 11 August–7 September 2026, labelled Last 28 days. Property timezone was not independently checked.

No account configuration, event definitions, or data filters were changed. Hostname filters and secondary dimensions were applied temporarily to the report views.

## Live-domain figures

Filter: Hostname exactly matches `climate-seal.com`. This excludes localhost, 127.0.0.1 and the observed Google Translate proxy hostname. It does not exclude staff who visited the live domain, bots missed by GA4, or outreach-generated visits.

| Metric | Value |
| --- | ---: |
| Active users | 432 |
| Views | 633 |
| Average engagement time per active user | 15 seconds |
| Sessions | 531 |
| Engaged sessions | 167 |
| Engagement rate | 31.45% |
| Average engagement time per session | 12 seconds |
| Event count | 2,247 |
| Reported key events | 0 |

User metrics are estimates and may differ between reports and scopes. Sessions are visits, not unique people. Engagement time is active measurement time, not elapsed visit duration.

## Acquisition

Traffic acquisition report, same date range and live-domain hostname filter:

| Channel | Sessions | Share | Engagement rate | Average engagement per session |
| --- | ---: | ---: | ---: | ---: |
| Direct | 366 | 68.93% | 25.96% | 8 seconds |
| Organic Search | 114 | 21.47% | 49.12% | 28 seconds |
| Unassigned | 23 | 4.33% | 0% | 0 seconds |
| Referral | 14 | 2.64% | 57.14% | 6 seconds |
| Organic Social | 10 | 1.88% | 60% | 28 seconds |
| AI Assistant | 4 | 0.75% | 50% | 26 seconds |

Direct means attribution was unavailable or the visit was classified as direct. It is not proof of brand awareness or purely inbound discovery. Untagged email, messages and outreach links may contribute. Small channel samples should not support broad performance claims.

## Selected live-domain pages

| Page | Views | Active users | Average engagement per active user |
| --- | ---: | ---: | ---: |
| Homepage | 253 | 162 | 19 seconds |
| ISO 14067 / PAS 2050 / GHG Protocol comparison | 34 | 35 | 5 seconds |
| Resource Center | 33 | 21 | 24 seconds |
| Pricing | 27 | 27 | 6 seconds |
| FAQ | 24 | 25 | 8 seconds |
| PCF three-day response checklist | 23 | 9 | 30 seconds |
| LCA vs PCF vs EPD | 21 | 21 | 0 seconds |
| CBAM 2026 real carbon cost | 20 | 22 | 0 seconds |
| Consultant solution | 20 | 15 | 19 seconds |

These are observed rows, not a complete article ranking. Zero engagement time does not prove nobody read a page; collection and navigation behavior need validation. Do not add row-level users to calculate unique site visitors.

## Enquiries and measurement issues

- The Events report records `contact_form_submit`: **2 events, 2 total users**. A Hostname secondary dimension shows both events on `climate-seal.com`.
- The unfiltered Events report also records `demo_request_submit`: **2 events, 2 users**. Website code fires both names for a successful contact submission, so these must not be counted as four leads.
- Reconcile those two contact events with the Excel lead tracker and received enquiries. A production event does not prove a new qualified prospect; staff may test the production form too.
- Key-event reports show zero for this period despite the recorded custom submission events. Check which event is configured as the primary key event and from what date. Do not infer zero enquiries from the key-event total.
- The unfiltered report records 3 `book_demo_click` events from 3 users, 1 `pcf_pack_download`, and 1 `pricing_cta_click`. Hostnames were not checked for those events, and click tracking is not necessarily complete. They are not confirmed appointments or qualified leads.
- Local testing is definitely included in the property: homepage localhost rows show 33 views from 2 active users and 12m20s engagement per active user. The three-day checklist has 27 localhost views from 2 active users and 9m03s engagement.
- Across all hosts, the checklist shows 63 views and 2m36s average engagement. On the live domain alone it shows 23 views and 30s. Combined reports can therefore overstate public content engagement.

## Recommended next steps for T14

1. Prevent production analytics from collecting localhost and preview activity. Keep a production-hostname view for historical analysis; future tracking changes do not repair past data.
2. Verify `contact_form_submit` as the single primary website enquiry key event. Check current settings before making a change, and retain the separate distinction between an enquiry and a confirmed demo.
3. Introduce consistent UTM tags for outreach campaigns without names or email addresses in URLs. Separate outbound and inbound in Excel.
4. Reconcile the two observed production submissions with Excel and add statuses for contacted, demo booked, demo held, and qualified/not a fit.
5. Review the next comparable period after the September 8 release. This baseline ends September 7 and cannot measure that release's effect. No prior-period growth comparison or causal claim was made here.

Search Console, geographic breakdowns restricted to production, CRM outcomes and independent verification of the web-stream ID remain outside this review.
