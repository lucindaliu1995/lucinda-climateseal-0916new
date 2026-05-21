import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { buildLanguageAlternates, isChineseLanguage, resolveLanguage } from '@/lib/language';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://climate-seal.com';

const content = {
  en: {
    title: 'Pricing',
    description:
      'View Climate Seal pricing for Free Start, Professional, and Enterprise carbon accounting workflows across Product Carbon Footprint, Scope 3, and LCA use cases.',
    eyebrow: 'Pricing',
    heroTitle: 'Choose the right way to start your carbon reporting workflow.',
    heroBody:
      'Every plan starts with a conversation so we can understand your report scope, data readiness, and whether Climate Seal is the right fit.',
    plans: [
      {
        name: 'Free Start',
        price: 'Limited report credits',
        description: 'For teams that want to try Climate Seal with a simple product carbon footprint before committing.',
        features: [
          'Includes a limited amount of credits to complete one simple PCF workflow.',
          'Best for testing data readiness, report structure, and how Climate Seal fits into your current carbon reporting process.',
          'All trials start after speaking with our team.',
        ],
        accent: 'border-[#b9d9d8]',
        cta: 'Talk to the team',
      },
      {
        name: 'Professional',
        price: 'From $299 / month',
        description: 'For consultants, experts, and small teams delivering recurring carbon accounting work with AI.',
        features: [
          'Access the full Climate Seal accounting workflow, with support for multiple regulations, standards, and methodologies.',
          'Pricing is based on token / credit usage, so teams can scale report delivery according to actual project volume.',
          'Best for professionals who want to increase delivery capacity without adding more manual workload.',
        ],
        accent: 'border-[#8ece8f]',
        cta: 'Talk to the team',
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For corporates managing carbon data across products, suppliers, business units, or compliance programs.',
        features: [
          'Built for supplier management, internal data governance, multi-product reporting, and cross-team review.',
          'Includes enterprise-ready workflows such as supplier data collection, custom factor databases, approval controls, traceability packages, and reusable product data models.',
          'Best for companies that need a long-term carbon compliance operating system, not only individual reports.',
        ],
        accent: 'border-[#123F3D]',
        cta: 'Talk to the team',
      },
    ],
    fitEyebrow: 'How to choose',
    fitTitle: 'If you are unsure where to start, this is usually the simplest decision logic.',
    fitNotes: [
      {
        title: 'Start free when you need a first report trial',
        description: 'If your first priority is seeing how Climate Seal handles your files and report scope, Free Start is the lightest path.',
      },
      {
        title: 'Move to Professional when the work becomes recurring',
        description: 'If you expect ongoing report preparation, Professional gives you a more regular monthly workflow starting from $299/month.',
      },
      {
        title: 'Move enterprise when the challenge becomes coordination',
        description: 'Once multiple products, suppliers, sites, or teams are involved, the challenge becomes governance and collaboration, not only reporting.',
      },
    ],
    leversTitle: 'What usually changes price, speed, and implementation shape',
    levers: [
      {
        title: 'Data readiness',
        description: 'The clearer the BOM, energy, logistics, and supplier inputs are, the easier it is to move quickly into higher-quality delivery.',
      },
      {
        title: 'Delivery goal',
        description: 'Customer response, export compliance, procurement collaboration, and internal decarbonization planning require different levels of depth.',
      },
      {
        title: 'Collaboration complexity',
        description: 'Once multiple teams or suppliers are involved, the work starts to need a shared operating workflow, not just a one-off output.',
      },
    ],
    ctaTitle: 'Want help choosing the right entry point?',
    ctaBody:
      'Send us your carbon accounting scope, target market, and current data readiness. We can help you decide whether to start with a free report trial, a professional monthly workflow, or a broader enterprise setup.',
    ctaPrimary: 'Contact the team',
    ctaSecondary: 'Read resources first',
    partnerPricingCta: 'Explore Early Access Preferential Pricing',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Pricing',
    faq1q: 'How do I choose the right plan?',
    faq1a:
      'If you need to validate a first report workflow, start with Free Start. If you expect recurring report work, Professional starts from $299/month. If you need supplier coordination, multiple products, or integration, Enterprise is usually the better fit.',
    faq2q: 'Do you support pilots or demos?',
    faq2a:
      'Yes. We can help evaluate your product complexity, target market, and data readiness to recommend a lighter pilot path before scaling up.',
  },
  zh: {
    title: '价格方案',
    description:
      '查看 Climate Seal 面向免费开始、专业版和企业版碳核算工作流的价格方案，覆盖产品碳足迹、Scope 3 与 LCA 场景。',
    eyebrow: 'Pricing',
    heroTitle: '选择最适合你启动碳报告工作流的方式。',
    heroBody:
      '每一种方案都先从沟通开始，我们会了解你的报告范围、数据准备度和适配场景，再建议合适的入口。',
    plans: [
      {
        name: '免费开始',
        price: '有限报告点数',
        description: '适合先用一个简单产品碳足迹工作流试用 Climate Seal，再决定是否继续的团队。',
        features: [
          '包含有限点数，可完成一个简单 PCF 工作流。',
          '适合测试数据准备度、报告结构和现有碳报告流程适配方式。',
          '所有试用都需要先与团队沟通。',
        ],
        accent: 'border-[#b9d9d8]',
        cta: '联系团队',
      },
      {
        name: '专业版',
        price: '$299 / 月起',
        description: '适合顾问、专家和小团队用 AI 持续交付碳核算工作。',
        features: [
          '访问完整 Climate Seal 核算工作流，支持多种法规、标准和方法学。',
          '价格基于 token / credit 使用量，可按实际项目量扩展报告交付。',
          '适合希望提升交付能力、减少人工负担的专业团队。',
        ],
        accent: 'border-[#8ece8f]',
        cta: '联系团队',
      },
      {
        name: '企业版',
        price: '定制',
        description: '适合管理产品、供应商、业务单元或合规项目碳数据的企业。',
        features: [
          '面向供应商管理、内部数据治理、多产品报告和跨团队复核。',
          '包含供应商数据收集、自定义因子库、审批控制、追溯包和可复用产品数据模型。',
          '适合需要长期碳合规操作系统，而不只是单份报告的企业。',
        ],
        accent: 'border-[#123F3D]',
        cta: '联系团队',
      },
    ],
    fitEyebrow: 'How to choose',
    fitTitle: '如果你不确定从哪一个开始，通常可以这样判断。',
    fitNotes: [
      {
        title: '如果要先验证一份报告，从免费开始',
        description: '如果你的第一目标是看 Climate Seal 如何处理你的文件和报告范围，免费开始是最轻的入口。',
      },
      {
        title: '如果工作会持续发生，进入专业版',
        description: '如果你预计会持续准备报告，专业版提供更稳定的月度工作流，价格从 $299/月起。',
      },
      {
        title: '当问题变成协同治理时，就进入企业级模式',
        description: '一旦涉及多产品、多供应商、多工厂或多团队，问题就不只是交报告，而是建立协同治理机制。',
      },
    ],
    leversTitle: '通常真正影响价格、速度和实施方式的是这几件事',
    levers: [
      {
        title: '数据准备度',
        description: 'BOM、能耗、物流与供应商数据越清晰，越容易更快进入高质量交付。',
      },
      {
        title: '交付目标',
        description: '客户响应、出口合规、采购协同和内部减排规划，对输出深度和节奏的要求并不相同。',
      },
      {
        title: '协同复杂度',
        description: '一旦涉及多团队或多供应商，项目就更需要共享工作流，而不只是一次性交付结果。',
      },
    ],
    ctaTitle: '想一起判断最合适的起点？',
    ctaBody:
      '把你的核算范围、目标市场和当前数据准备情况告诉我们，我们可以帮你判断更适合从免费试用、专业版月度工作流，还是企业级协同开始。',
    ctaPrimary: '联系团队',
    ctaSecondary: '先看资料库',
    partnerPricingCta: '探索早期合作优惠价格',
    breadcrumbHome: '首页',
    breadcrumbCurrent: '价格方案',
    faq1q: '如何选择合适的方案？',
    faq1a:
      '如果你要验证首个报告工作流，可以从免费开始；如果预计持续使用，专业版从 $299/月起；如果涉及供应商协同、多产品线或系统集成，企业版通常更合适。',
    faq2q: '是否支持试点或演示？',
    faq2a:
      '支持。我们可以根据你的产品复杂度、目标市场和数据准备情况，建议更轻的试点路径，再决定是否扩展。',
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const locale = isChineseLanguage(resolveLanguage(headerList.get('x-language'))) ? 'zh' : 'en';
  const copy = content[locale];

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: '/pricing',
      languages: buildLanguageAlternates('/pricing'),
    },
    openGraph: {
      title: `${copy.title} | Climate Seal`,
      description: copy.description,
      images: [{ url: '/goal-manager.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${copy.title} | Climate Seal`,
      description: copy.description,
      images: ['/goal-manager.png'],
    },
  };
}

export default async function PricingPage() {
  const headerList = await headers();
  const locale = isChineseLanguage(resolveLanguage(headerList.get('x-language'))) ? 'zh' : 'en';
  const copy = content[locale];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: copy.breadcrumbHome, item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: copy.breadcrumbCurrent, item: `${siteUrl}/pricing` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: copy.faq1q,
        acceptedAnswer: { '@type': 'Answer', text: copy.faq1a },
      },
      {
        '@type': 'Question',
        name: copy.faq2q,
        acceptedAnswer: { '@type': 'Answer', text: copy.faq2a },
      },
    ],
  };

  return (
    <main className="bg-[#FAF8F3] text-[#123F3D]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="border-b border-[#d7ddd6] bg-[#fcfbf8]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="cs-section-eyebrow">
              {copy.eyebrow}
            </p>
            <h1 className="mt-6 font-lora text-4xl font-bold tracking-[-0.02em] sm:text-5xl lg:text-[3.5rem]">{copy.heroTitle}</h1>
            <p className="mt-6 text-lg leading-8 text-[#5f7672]">{copy.heroBody}</p>
            <Link
              href="/consultant-partner-program"
              className="mt-6 inline-flex items-center justify-center rounded-[0.55rem] border border-[#b8c9c3] bg-white px-5 py-2.5 text-sm font-semibold text-[#215b57] transition hover:border-[#215b57] hover:bg-[#f3f7f3]"
            >
              {copy.partnerPricingCta}
              <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {copy.plans.map((plan) => (
              <article key={plan.name} className={`flex h-full flex-col rounded-[0.55rem] border ${plan.accent} bg-[#FBF9F4] p-7`}>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.02em]">{plan.name}</h2>
                  <p className="mt-3 text-[15px] leading-7 text-[#5f7672] sm:text-[16px]">{plan.description}</p>
                  <div className="mt-6 text-4xl font-semibold tracking-[-0.03em]">{plan.price}</div>
                  <ul className="mt-6 space-y-3 text-[15px] leading-7 text-[#5f7672] sm:text-[16px]">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-1 text-[#1d7c72]">+</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="mt-8 rounded-[0.5rem] border border-[#123F3D] bg-[#123F3D] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#0f4a47]">
                  {plan.cta}
                </Link>
                {plan.name === (locale === 'zh' ? '专业版' : 'Professional') ? (
                  <Link
                    href="/consultant-partner-program"
                    className="mt-3 rounded-[0.5rem] border border-[#b8c9c3] px-5 py-3 text-center text-sm font-semibold text-[#215b57] transition hover:border-[#215b57] hover:bg-white"
                  >
                    {copy.partnerPricingCta}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7ddd6] bg-[#f7f4ec]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="cs-section-eyebrow">{copy.fitEyebrow}</p>
            <h2 className="mt-4 font-lora text-3xl font-bold tracking-[-0.02em] sm:text-4xl">{copy.fitTitle}</h2>
          </div>
          <div className="grid gap-4">
            {copy.fitNotes.map((note) => (
              <article key={note.title} className="cs-glass-panel p-6">
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{note.title}</h3>
                <p className="mt-3 text-[16px] leading-7 text-[#5f7672] sm:text-[17px]">{note.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7ddd6] bg-[#fcfbf8]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="cs-section-eyebrow">{locale === 'zh' ? '价格变量' : 'Pricing levers'}</p>
            <h2 className="mt-4 font-lora text-3xl font-bold tracking-[-0.02em] sm:text-4xl">{copy.leversTitle}</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {copy.levers.map((item) => (
              <article key={item.title} className="rounded-[0.55rem] border border-[#d7ddd6] bg-[#FBF9F4] p-6">
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#5f7672] sm:text-[16px]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f3]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="cs-glass-panel p-8 sm:p-10">
            <p className="cs-section-eyebrow">{locale === 'zh' ? '下一步' : 'Next step'}</p>
            <h2 className="mt-4 font-lora text-3xl font-bold tracking-[-0.02em] sm:text-4xl">{copy.ctaTitle}</h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-7 text-[#5f7672] sm:text-[17px]">{copy.ctaBody}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="rounded-[0.5rem] border border-[#123F3D] bg-[#123F3D] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#0f4a47]">
                {copy.ctaPrimary}
              </Link>
              <Link href="/resources" className="rounded-[0.5rem] border border-[#123F3D] px-6 py-3 text-center font-semibold text-[#123F3D] transition hover:bg-[#123F3D] hover:text-white">
                {copy.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
