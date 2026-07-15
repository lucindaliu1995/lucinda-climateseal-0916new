import type { MetadataRoute } from 'next';
import {
  getAllWhitepapers,
  getMeaningfulArticles,
  hasChineseArticleVersion,
  hasChineseWhitepaperVersion,
} from '@/lib/content';

type SitemapOptions = {
  lastModified: string;
  changeFrequency: 'weekly' | 'monthly';
  priority: number;
  includeChinese?: boolean;
};

function createLocalizedEntries(
  base: string,
  path: string,
  options: SitemapOptions
): MetadataRoute.Sitemap {
  const englishUrl = `${base}${path}`;
  const languages = {
    en: englishUrl,
    ...(options.includeChinese === false ? {} : { zh: `${englishUrl}?lang=zh` }),
  };

  return Object.values(languages).map((url) => ({
    url,
    lastModified: options.lastModified,
    changeFrequency: options.changeFrequency,
    priority: options.priority,
    alternates: { languages },
  }));
}

/**
 * 生成 sitemap.xml（仅影响SEO抓取，不影响视觉）
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = (process.env.NEXT_PUBLIC_APP_URL || 'https://climate-seal.com').replace(/\/$/, '');
  const now = new Date().toISOString();
  const urls = [
    '/',
    '/about',
    '/products',
    '/pricing',
    '/contact',
    '/resources',
    '/faq',
    '/privacy',
    '/consultant-partner-program',
    '/referral-program',
    '/solutions/carbon-expert',
    '/solutions/brand-owner',
    '/solutions/supply-chain',
  ];
  const staticEntries = urls.flatMap((path) =>
    createLocalizedEntries(base, path, {
      lastModified: now,
      changeFrequency: 'weekly',
      priority: path === '/' ? 1 : 0.7,
    })
  );

  const articleEntries = getMeaningfulArticles().flatMap((article) =>
    createLocalizedEntries(base, `/resources/${article.id}`, {
      lastModified: new Date(article.publishDate).toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6,
      includeChinese: hasChineseArticleVersion(article),
    })
  );

  const whitepaperEntries = getAllWhitepapers().flatMap((whitepaper) =>
    createLocalizedEntries(base, `/resources/whitepapers/${whitepaper.id}`, {
      lastModified: new Date(whitepaper.publishDate).toISOString(),
      changeFrequency: 'monthly',
      priority: 0.65,
      includeChinese: hasChineseWhitepaperVersion(whitepaper),
    })
  );

  return [...staticEntries, ...articleEntries, ...whitepaperEntries];
}
