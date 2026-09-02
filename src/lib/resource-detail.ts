import type { Metadata } from 'next';
import type { Language } from '@/lib/i18n';
import { buildLanguageAlternates, buildLocalizedCanonical, isChineseLanguage } from '@/lib/language';

type LocalizedRecord = {
  title: string;
  titleZh: string;
};

type LocalizedSummaryRecord = LocalizedRecord & {
  excerpt?: string;
  excerptZh?: string;
  intro?: string;
  introZh?: string;
};

type LocalizedSeoRecord = LocalizedSummaryRecord & {
  metaDescription?: string;
  metaDescriptionZh?: string;
  seoTitle?: string;
  seoTitleZh?: string;
  ogTitle?: string;
  ogTitleZh?: string;
  ogDescription?: string;
  ogDescriptionZh?: string;
  imageAlt?: string;
  imageAltZh?: string;
  keywords?: string[];
};

type DetailMetadataOptions = {
  canonical: string;
  language: Language;
  hasChineseVersion: boolean;
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  image: string;
  missingTitle: string;
};

type DetailJsonLdOptions = {
  baseUrl: string;
  pageUrl: string;
  language: Language;
  title: string;
  description: string;
  publishDate: string;
  image: string;
};

export function getLocalizedTitle(item: LocalizedRecord, language: Language): string {
  return isChineseLanguage(language) ? item.titleZh : item.title;
}

export function getLocalizedSummary(item: LocalizedSummaryRecord, language: Language): string {
  if (isChineseLanguage(language)) {
    return item.excerptZh || item.introZh || item.excerpt || item.intro || '';
  }

  return item.excerpt || item.intro || item.excerptZh || item.introZh || '';
}

export function getLocalizedMetaDescription(item: LocalizedSeoRecord, language: Language): string {
  if (isChineseLanguage(language)) {
    return item.metaDescriptionZh || getLocalizedSummary(item, language) || item.metaDescription || '';
  }

  return item.metaDescription || getLocalizedSummary(item, language) || item.metaDescriptionZh || '';
}

export function getLocalizedSeoTitle(item: LocalizedSeoRecord, language: Language): string {
  if (isChineseLanguage(language)) {
    return item.seoTitleZh || getLocalizedTitle(item, language);
  }

  return item.seoTitle || getLocalizedTitle(item, language);
}

export function getLocalizedOgTitle(item: LocalizedSeoRecord, language: Language): string {
  if (isChineseLanguage(language)) {
    return item.ogTitleZh || getLocalizedTitle(item, language);
  }

  return item.ogTitle || getLocalizedTitle(item, language);
}

export function getLocalizedOgDescription(item: LocalizedSeoRecord, language: Language): string {
  if (isChineseLanguage(language)) {
    return item.ogDescriptionZh || getLocalizedMetaDescription(item, language);
  }

  return item.ogDescription || getLocalizedMetaDescription(item, language);
}

export function getLocalizedImageAlt(item: LocalizedSeoRecord, language: Language): string {
  if (isChineseLanguage(language)) {
    return item.imageAltZh || `${getLocalizedTitle(item, language)} - cover image`;
  }

  return item.imageAlt || `${getLocalizedTitle(item, language)} - cover image`;
}

export function formatResourceDate(dateString: string, language: Language): string {
  const date = new Date(dateString);
  return isChineseLanguage(language)
    ? date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
    : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function createResourceDetailMetadata(options: DetailMetadataOptions): Metadata {
  return {
    title: options.title,
    description: options.description,
    ...(options.keywords?.length ? { keywords: options.keywords } : {}),
    alternates: {
      canonical: buildLocalizedCanonical(
        options.canonical,
        options.language,
        options.hasChineseVersion
      ),
      languages: buildLanguageAlternates(options.canonical, options.hasChineseVersion),
    },
    ...(isChineseLanguage(options.language) && !options.hasChineseVersion
      ? { robots: { index: false, follow: true } }
      : {}),
    openGraph: {
      title: options.ogTitle || options.title,
      description: options.ogDescription || options.description,
      type: 'article',
      images: [{ url: options.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: options.ogTitle || options.title,
      description: options.ogDescription || options.description,
      images: [options.image],
    },
  };
}

export function getAvailableResourceLanguage(
  language: Language,
  hasChineseVersion: boolean
): Language {
  return isChineseLanguage(language) && !hasChineseVersion ? 'en' : language;
}

export function createMissingResourceMetadata(title: string): Metadata {
  return {
    title,
    robots: { index: false, follow: false },
  };
}

export function buildResourcePageUrl(pathname: string, language: Language, baseUrl: string): string {
  return `${baseUrl}${pathname}${isChineseLanguage(language) ? '?lang=zh' : ''}`;
}

export function createResourceBreadcrumbJsonLd(
  language: Language,
  baseUrl: string,
  pageUrl: string,
  title: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isChineseLanguage(language) ? '首页' : 'Home', item: `${baseUrl}/` },
      { '@type': 'ListItem', position: 2, name: isChineseLanguage(language) ? '解决方案资源中心' : 'Solution Resources', item: `${baseUrl}/resources` },
      { '@type': 'ListItem', position: 3, name: title, item: pageUrl },
    ],
  };
}

export function createResourceArticleJsonLd(options: DetailJsonLdOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.title,
    description: options.description,
    datePublished: options.publishDate,
    dateModified: options.publishDate,
    inLanguage: isChineseLanguage(options.language) ? 'zh-CN' : 'en-US',
    image: [`${options.baseUrl}${options.image}`],
    mainEntityOfPage: options.pageUrl,
    author: {
      '@type': 'Organization',
      name: 'Climate Seal',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Climate Seal',
      logo: {
        '@type': 'ImageObject',
        url: `${options.baseUrl}/climate-seal-logo-green.png`,
      },
    },
  };
}
