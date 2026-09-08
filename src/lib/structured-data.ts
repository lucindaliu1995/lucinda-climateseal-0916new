import type { Language } from '@/lib/i18n';

export const siteUrl = (process.env.NEXT_PUBLIC_APP_URL || 'https://climate-seal.com').replace(/\/$/, '');
export const organizationId = `${siteUrl}/#organization`;

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: 'Climate Seal',
  legalName: 'Climate Seal (Beijing) Technology Co., Ltd.',
  url: `${siteUrl}/`,
  logo: `${siteUrl}/climate-seal-logo-green.png`,
  sameAs: ['https://www.linkedin.com/company/climateseal/'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'xuguang.ma@climate-seal.net',
    telephone: '+86 15652618365',
  },
};

export function breadcrumbSchema(path: string, name: string, language: Language) {
  const suffix = language === 'zh' ? '?lang=zh' : '';
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'zh' ? '首页' : 'Home', item: `${siteUrl}/${suffix}` },
      { '@type': 'ListItem', position: 2, name, item: `${siteUrl}${path}${suffix}` },
    ],
  };
}
