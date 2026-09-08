import type { Metadata, ResolvingMetadata } from 'next';
import { headers } from 'next/headers';
import { buildLanguageAlternates, buildLocalizedCanonical, resolveLanguage } from '@/lib/language';
import HomePageRefresh from '@/components/HomePageRefresh';
import { organizationId, siteUrl } from '@/lib/structured-data';

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const language = resolveLanguage((await headers()).get('x-language'));
  const homeUrl = new URL('/', process.env.NEXT_PUBLIC_APP_URL || 'https://climate-seal.com').href;
  const canonical = buildLocalizedCanonical(homeUrl, language);
  const inherited = await parent;

  return {
    // Next.js 15.4 drops root-path query strings when metadataBase is set.
    // Scope the workaround to home; inherited asset URLs are already resolved.
    metadataBase: null,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(homeUrl),
    },
    openGraph: {
      ...inherited.openGraph,
      url: canonical,
    },
  };
}

export default function HomePage() {
  const website = {
    '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${siteUrl}/#website`,
    name: 'Climate Seal', url: `${siteUrl}/`, publisher: { '@id': organizationId },
    inLanguage: ['en', 'zh'],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    <HomePageRefresh />
  </>;
}
