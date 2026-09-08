import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { resolveLanguage } from '@/lib/language';
import { solutionCopy } from '@/lib/solution-copy';
import { breadcrumbSchema } from '@/lib/structured-data';
import { createLocalizedPageMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return createLocalizedPageMetadata({
    canonical: '/solutions/brand-owner',
    title: { en: solutionCopy['brand-owner'].en.title, zh: solutionCopy['brand-owner'].zh.title },
    description: { en: solutionCopy['brand-owner'].en.description, zh: solutionCopy['brand-owner'].zh.description },
    image: '/brand-analyzer.png',
    imageAlt: 'Climate Seal brand owner solution',
  });
}

export default async function BrandOwnerLayout({ children }: { children: React.ReactNode }) {
  const language = resolveLanguage((await headers()).get('x-language'));
  const copy = solutionCopy['brand-owner'][language === 'zh' ? 'zh' : 'en'];
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema('/solutions/brand-owner', copy.title, language)) }} />
    {children}
  </>;
}
