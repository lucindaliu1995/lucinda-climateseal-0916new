import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { resolveLanguage } from '@/lib/language';
import { solutionCopy } from '@/lib/solution-copy';
import { breadcrumbSchema } from '@/lib/structured-data';
import { createLocalizedPageMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return createLocalizedPageMetadata({
    canonical: '/solutions/carbon-expert',
    title: { en: solutionCopy['carbon-expert'].en.title, zh: solutionCopy['carbon-expert'].zh.title },
    description: { en: solutionCopy['carbon-expert'].en.description, zh: solutionCopy['carbon-expert'].zh.description },
    image: '/pcf-modeler.png',
    imageAlt: 'Climate Seal carbon expert solution',
  });
}

export default async function CarbonExpertLayout({ children }: { children: React.ReactNode }) {
  const language = resolveLanguage((await headers()).get('x-language'));
  const copy = solutionCopy['carbon-expert'][language === 'zh' ? 'zh' : 'en'];
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema('/solutions/carbon-expert', copy.title, language)) }} />
    {children}
  </>;
}
