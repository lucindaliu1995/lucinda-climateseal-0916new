import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { resolveLanguage } from '@/lib/language';
import { solutionCopy } from '@/lib/solution-copy';
import { breadcrumbSchema } from '@/lib/structured-data';
import { createLocalizedPageMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return createLocalizedPageMetadata({
    canonical: '/solutions/supply-chain',
    title: { en: solutionCopy['supply-chain'].en.title, zh: solutionCopy['supply-chain'].zh.title },
    description: { en: solutionCopy['supply-chain'].en.description, zh: solutionCopy['supply-chain'].zh.description },
    image: '/supply-chain-assessment.png',
    imageAlt: 'Climate Seal supply chain solution',
  });
}

export default async function SupplyChainLayout({ children }: { children: React.ReactNode }) {
  const language = resolveLanguage((await headers()).get('x-language'));
  const copy = solutionCopy['supply-chain'][language === 'zh' ? 'zh' : 'en'];
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema('/solutions/supply-chain', copy.title, language)) }} />
    {children}
  </>;
}
