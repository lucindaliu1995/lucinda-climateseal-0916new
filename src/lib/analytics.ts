export type AnalyticsEventName =
  | 'demo_request_submit'
  | 'contact_form_submit'
  | 'trial_request_submit'
  | 'account_created'
  | 'book_demo_click'
  | 'pricing_cta_click'
  | 'email_click'
  | 'linkedin_click'
  | 'newsletter_subscribe'
  | 'pcf_pack_download'
  | 'pcf_pack_form_submit'
  | 'case_study_view'
  | 'scroll_75'
  | 'solution_page_view';

export const ANALYTICS_MEASUREMENT_ID = 'G-BM7079RZZH';

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __climateSealAnalyticsInitialized?: boolean;
  }
}

export function initializeAnalytics(): void {
  if (typeof window === 'undefined' || window.__climateSealAnalyticsInitialized) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args: unknown[]) => {
    window.dataLayer?.push(args);
  });
  window.gtag('js', new Date());
  window.gtag('config', ANALYTICS_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
  window.__climateSealAnalyticsInitialized = true;
}

export function trackEvent(name: AnalyticsEventName, params: AnalyticsParams = {}): void {
  if (typeof window === 'undefined') return;

  initializeAnalytics();

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(['event', name, params]);
}
