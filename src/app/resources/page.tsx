import ResourcesPageClient from '@/components/ResourcesPageClient';
import { getAllCategories, getAllWhitepapers, getArticleSummaries } from '@/lib/content';
import { headers } from 'next/headers';
import { resolveLanguage } from '@/lib/language';
import { breadcrumbSchema, organizationId, siteUrl } from '@/lib/structured-data';

export default async function ResourcesPage() {
  const articles = getArticleSummaries();
  const language = resolveLanguage((await headers()).get('x-language'));
  const isZh = language === 'zh';
  const name = isZh ? '资源中心' : 'Resource Center';
  const collection = {
    '@context': 'https://schema.org', '@type': 'CollectionPage', name,
    url: `${siteUrl}/resources${isZh ? '?lang=zh' : ''}`,
    publisher: { '@id': organizationId },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem', position: index + 1,
        url: `${siteUrl}/resources/${article.id}`,
        name: isZh ? article.titleZh : article.title,
      })),
    },
  };
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema('/resources', name, language)) }} />
    <ResourcesPageClient
      categories={getAllCategories()}
      articles={articles}
      whitepapers={getAllWhitepapers()}
    />
    </>
  );
}
