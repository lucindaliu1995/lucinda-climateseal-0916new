'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initializeAnalytics, trackEvent, type AnalyticsEventName } from '@/lib/analytics';

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    initializeAnalytics();
  }, []);

  useEffect(() => {
    if (pathname.startsWith('/solutions/')) {
      trackEvent('solution_page_view', {
        page_path: pathname,
        solution: pathname.split('/')[2] || 'unknown',
      });
    }
  }, [pathname]);

  useEffect(() => {
    let tracked = false;

    const trackScrollDepth = () => {
      const documentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body?.scrollHeight || 0,
      );
      const scrollPosition = window.scrollY + window.innerHeight;

      if (!tracked && documentHeight > window.innerHeight && scrollPosition >= documentHeight * 0.75) {
        tracked = true;
        trackEvent('scroll_75', { page_path: pathname });
      }
    };

    window.addEventListener('scroll', trackScrollDepth, { passive: true });
    trackScrollDepth();

    return () => window.removeEventListener('scroll', trackScrollDepth);
  }, [pathname]);

  useEffect(() => {
    const handleTrackedClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const element = target.closest<HTMLElement>('[data-analytics-event]');
      const eventName = element?.dataset.analyticsEvent as AnalyticsEventName | undefined;
      if (!element || !eventName) return;

      trackEvent(eventName, {
        page_path: pathname,
        link_text: element.textContent?.replace(/\s+/g, ' ').trim().slice(0, 120),
      });
    };

    document.addEventListener('click', handleTrackedClick);
    return () => document.removeEventListener('click', handleTrackedClick);
  }, [pathname]);

  return null;
}
