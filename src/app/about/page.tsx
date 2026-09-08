import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { buildLanguageAlternates, buildLocalizedCanonical, isChineseLanguage, resolveLanguage } from '@/lib/language';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://climate-seal.com';

const content = {
  en: {
    title: 'About Climate Seal',
    description: 'Our mission is to lower the cost of establishing and using credible sustainability data through AI execution, structured workflows, and expert review.',
    eyebrow: 'About Climate Seal',
    heroTitle: 'Credibility Drives Better Climate.',
    heroBody: 'We started Climate Seal because proving credible sustainability performance should not be harder or more expensive than improving it. Too much time is spent gathering scattered information, repeating calculations, and rebuilding evidence for each new requirement. We use AI execution, structured workflows, and expert review to reduce that burden, making credible results more accessible without compromising transparency or professional judgment. Our vision is a future where trustworthy environmental data can be put to work across reporting, procurement, compliance, and everyday business decisions, with its sources, assumptions, and limitations intact. By lowering the cost of both establishing credibility and using it, we aim to help more organizations turn evidence into meaningful climate action.',
    breadcrumbHome: 'Home',
  },
  zh: {
    title: '关于 Climate Seal',
    description: '通过 AI 执行、结构化工作流和专家审查，Climate Seal 致力于降低建立与应用可持续发展数据可信度的成本。',
    eyebrow: '关于 Climate Seal',
    heroTitle: '以可信，推动更好的气候未来。',
    heroBody: '我们创立 Climate Seal，是因为证明可持续发展表现可信，不应比改善表现本身更困难、更昂贵。太多时间被用于收集零散信息、重复计算，以及为每一项新要求重新整理证据。我们通过 AI 执行、结构化工作流和专家审查减轻这些负担，在不牺牲透明度与专业判断的前提下，让更多组织能够获得可信的结果。我们期待的未来，是可信的环境数据能够广泛应用于报告、采购、合规和日常商业决策，同时始终保留其来源、假设和适用限制。通过降低建立可信度与应用可信信息的成本，我们希望帮助更多组织把证据转化为有意义的气候行动。',
    breadcrumbHome: '首页',
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const language = resolveLanguage(headerList.get('x-language'));
  const locale = isChineseLanguage(language) ? 'zh' : 'en';
  const copy = content[locale];

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: buildLocalizedCanonical('/about', language),
      languages: buildLanguageAlternates('/about'),
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      images: [{ url: '/climate-seal-logo-green.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: ['/climate-seal-logo-green.png'],
    },
  };
}

export default async function AboutPage() {
  const headerList = await headers();
  const locale = isChineseLanguage(resolveLanguage(headerList.get('x-language'))) ? 'zh' : 'en';
  const copy = content[locale];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: copy.breadcrumbHome, item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: copy.title, item: `${siteUrl}/about` },
    ],
  };


  return (
    <div className="bg-white text-[#123F3D]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section aria-labelledby="about-title" className="px-6 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="cs-section-eyebrow">{copy.eyebrow}</p>
          <h1 id="about-title" className="mt-6 font-lora !text-[2.25rem] font-semibold leading-[1.15] text-[#123F3D] sm:!text-[3rem]">
            {copy.heroTitle}
          </h1>
          <p className="mt-8 max-w-3xl text-[18px] leading-[1.9] text-[#486662] sm:mt-10 sm:text-[20px]">
            {copy.heroBody}
          </p>
        </div>
      </section>
    </div>
  );
}
