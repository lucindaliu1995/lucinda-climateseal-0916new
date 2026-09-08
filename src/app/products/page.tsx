import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { buildLanguageAlternates, buildLocalizedCanonical, isChineseLanguage, resolveLanguage } from '@/lib/language';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://climate-seal.com';

const content = {
  en: {
    title: 'End-to-End AI Workflow for Product-Level Carbon Accounting',
    description: 'AI-powered carbon accounting and footprinting: organize source data, model PCFs and LCAs, calculate emissions, review risks, and prepare traceable reports.',
    eyebrow: 'Carbon accounting & footprinting',
    heroTitle: 'End-to-End AI Workflow for Product-Level Carbon Accounting',
    heroBody: 'Climate Seal turns fragmented product, supplier, factory, and operational data into structured carbon accounting models, traceable calculations, and audit-ready outputs. AI executes repetitive work from file intake to report drafting, while experts control methodology, assumptions, review, and final decisions.',
    heroHighlights: [
      'AI execution from source files to report drafts',
      'Risk checks and traceable evidence throughout the workflow',
      'Expert control over methods, assumptions, and sign-off',
    ],
    coverageTitle: 'One workflow structure. Different carbon data needs.',
    coverageBody: 'The same foundation for data, calculations, evidence, and review adapts to the boundary and methodology of each project.',
    coverageItems: [
      { title: 'Complex LCA projects', description: 'Structure multi-stage product systems, material and process relationships, allocation choices, and scenarios for expert assessment.' },
      { title: 'Product Carbon Footprints', description: 'Connect BOMs, factory activity data, supplier inputs, and emission factors to a defined product unit and life-cycle boundary.' },
      { title: 'Corporate & Scope 3 accounting', description: 'Organize facility and value-chain activity data, map emission sources, and document estimates and calculation methods.' },
      { title: 'CBAM data preparation', description: 'Prepare production, energy, precursor, and emissions records for CBAM-specific requirements. Reused PCF inputs need separate boundary mapping and review.' },
      { title: 'Supplier carbon data workflows', description: 'Collect supplier files, clarify missing information, review data quality, and carry confirmed inputs into product and supply-chain calculations.' },
    ],
    modulesEyebrow: 'The end-to-end workflow',
    modulesTitle: 'From raw files to carbon results you can review',
    modulesBody: 'AI prepares and checks the work at each stage. Experts resolve material questions, approve key choices, and decide when the result is ready to deliver.',
    modules: [
      { title: 'Data intake', description: 'Bring BOMs, specifications, energy records, procurement data, transport files, and supplier evidence into the project.' },
      { title: 'File parsing & clarification', description: 'Extract materials, quantities, units, and activity data. Flag missing or inconsistent inputs and prepare targeted clarification requests.' },
      { title: 'Accounting & LCA modeling', description: 'Build a structured model of boundaries, emission sources, processes, allocation rules, and assumptions for expert review.' },
      { title: 'Emission factor matching', description: 'Suggest factors with their source, selection rationale, geographical and technological fit, match quality, and uncertainty.' },
      { title: 'Traceable calculations', description: 'Apply quantities, conversions, allocations, and factors in a documented calculation chain that experts can inspect and adjust.' },
      { title: 'Risk & quality review', description: 'Check data gaps, weak assumptions, factor mismatches, and calculation logic. Show which items need evidence or confirmation.' },
      { title: 'Report preparation', description: 'Draft the methodology, boundaries, data sources, results, limitations, and findings for expert editing and final sign-off.' },
      { title: 'Audit evidence & handoff', description: 'Preserve original inputs, factor records, formulas, assumptions, supporting evidence, and confirmation status in an audit ledger.' },
    ],
    reviewNote: 'Audit-ready outputs support expert and third-party review. Climate Seal does not issue independent assurance or certification; final verification is performed by an appropriately qualified independent body.',
    useCasesEyebrow: 'For your team',
    useCasesTitle: 'Put structured carbon data to work',
    useCasesBody: 'Use the workflow to deliver client projects, coordinate suppliers, or prepare a response to a buyer’s carbon-data request.',
    useCases: [
      { title: 'Consultants & carbon teams', summary: 'Manage complex PCF and LCA projects with AI preparation and execution, while retaining responsibility for methodology, assumptions, and final review.', href: '/solutions/carbon-expert', cta: 'Explore consultant workflows' },
      { title: 'Brands & procurement teams', summary: 'Collect and review supplier carbon data, identify quality gaps, and use traceable inputs in product and Scope 3 accounting.', href: '/solutions/brand-owner', cta: 'Explore supplier collaboration' },
      { title: 'Manufacturers & exporters', summary: 'Turn factory and product records into reviewable carbon data for buyer requests and applicable export reporting requirements.', href: '/solutions/supply-chain', cta: 'Explore manufacturer workflows' },
    ],
    ctaEyebrow: 'Discuss your project',
    ctaTitle: 'Start with your carbon data and delivery goal',
    ctaBody: 'Tell us the product or accounting scope, available files, applicable methodology, and deadline. We will help you identify the workflow and review steps your project needs.',
    ctaPrimary: 'See pricing',
    ctaSecondary: 'Request a workflow demo',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Carbon Accounting Workflows',
    softwareDescription: 'An end-to-end AI workflow for carbon accounting and footprinting, supporting complex LCA projects, PCFs, corporate and Scope 3 accounting, CBAM data preparation, and supplier carbon data with expert control and traceable evidence.',
  },
  zh: {
    title: '面向产品级碳核算的端到端 AI 工作流',
    description: '用 AI 串联碳核算与碳足迹评估：整理源数据、建立 PCF 与 LCA 模型、计算排放、审查风险，并准备可追溯的报告和证据。',
    eyebrow: '碳核算与碳足迹评估',
    heroTitle: '面向产品级碳核算的端到端 AI 工作流',
    heroBody: 'Climate Seal 将零散的产品、供应商、工厂和运营数据转化为结构化碳核算模型、可追溯计算与审计就绪成果。从文件接收到报告草拟，AI 执行重复工作，专家始终掌握方法学、假设、审查和最终决策。',
    heroHighlights: [
      '从源文件到报告草稿，由 AI 执行重复工作',
      '风险检查与可追溯证据贯穿整个流程',
      '方法、假设与最终确认由专家掌控',
    ],
    coverageTitle: '同一工作流结构，支持不同碳数据需求',
    coverageBody: '以数据、计算、证据和审查为共同基础，适配每个项目的核算边界与方法学。',
    coverageItems: [
      { title: '复杂 LCA 项目', description: '组织多阶段产品系统、材料与工艺关系、分配选择及情景，为专家评估提供结构化基础。' },
      { title: '产品碳足迹（PCF）', description: '将 BOM、工厂活动数据、供应商输入和排放因子连接到明确的产品单位与生命周期边界。' },
      { title: '企业与范围 3 核算', description: '整理设施和价值链活动数据，梳理排放源，并记录估算依据与计算方法。' },
      { title: 'CBAM 数据准备', description: '按照 CBAM 的具体要求整理生产、能源、前体材料与排放记录。复用 PCF 输入时，需单独进行边界映射和审查。' },
      { title: '供应商碳数据工作流', description: '收集供应商文件、澄清缺失信息、审查数据质量，并将已确认输入用于产品及供应链核算。' },
    ],
    modulesEyebrow: '端到端工作流',
    modulesTitle: '从原始文件到可审查的碳核算结果',
    modulesBody: 'AI 在各阶段准备并检查工作；专家解决关键问题、批准重要选择，并决定结果何时可以交付。',
    modules: [
      { title: '数据接收', description: '将 BOM、产品规格、能耗记录、采购数据、运输文件和供应商证据汇入项目。' },
      { title: '文件解析与澄清', description: '提取材料、数量、单位和活动数据，标记缺失或不一致的输入，并准备有针对性的补充信息请求。' },
      { title: '碳核算与 LCA 建模', description: '建立包含边界、排放源、工艺、分配规则和假设的结构化模型，供专家审查。' },
      { title: '排放因子匹配', description: '建议适用因子，并展示来源、选择理由、地理与技术适配性、匹配质量及不确定性。' },
      { title: '可追溯计算', description: '将数量、单位换算、分配和因子连接成有记录的计算链，便于专家检查与调整。' },
      { title: '风险与质量审查', description: '检查数据缺口、薄弱假设、因子不匹配和计算逻辑，明确哪些事项需要证据或确认。' },
      { title: '报告准备', description: '草拟方法学、边界、数据来源、结果、限制和分析结论，由专家编辑并最终确认。' },
      { title: '审计证据与交付', description: '在审计台账中保留原始输入、因子记录、公式、假设、支持证据及确认状态。' },
    ],
    reviewNote: '审计就绪成果用于支持专家及第三方审查。Climate Seal 不提供独立鉴证或认证；最终核验由具备相应资质的独立机构完成。',
    useCasesEyebrow: '面向你的团队',
    useCasesTitle: '让结构化碳数据服务实际工作',
    useCasesBody: '通过同一工作流交付客户项目、协调供应商，或准备对采购方碳数据请求的回复。',
    useCases: [
      { title: '顾问与碳核算团队', summary: '利用 AI 准备和执行工作，管理复杂 PCF 与 LCA 项目，同时保留对方法学、假设和最终审查的专业责任。', href: '/solutions/carbon-expert', cta: '了解顾问工作流' },
      { title: '品牌与采购团队', summary: '收集和审查供应商碳数据，识别质量缺口，并将可追溯输入用于产品及范围 3 核算。', href: '/solutions/brand-owner', cta: '了解供应商协作' },
      { title: '制造商与出口团队', summary: '将工厂和产品记录转化为可审查的碳数据，响应采购方请求和适用的出口披露要求。', href: '/solutions/supply-chain', cta: '了解制造商工作流' },
    ],
    ctaEyebrow: '讨论你的项目',
    ctaTitle: '从你的碳数据和交付目标开始',
    ctaBody: '告诉我们产品或核算范围、已有文件、适用方法学及截止时间。我们会帮助你明确项目需要的工作流与审查步骤。',
    ctaPrimary: '查看价格',
    ctaSecondary: '预约工作流演示',
    breadcrumbHome: '首页',
    breadcrumbCurrent: '碳核算工作流',
    softwareDescription: '面向碳核算与碳足迹评估的端到端 AI 工作流，支持复杂 LCA、PCF、企业与范围 3 核算、CBAM 数据准备及供应商碳数据工作，在专家掌控下保留可追溯证据。',
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
      canonical: buildLocalizedCanonical('/products', language),
      languages: buildLanguageAlternates('/products'),
    },
    openGraph: {
      title: `${copy.title} | Climate Seal`,
      description: copy.description,
      images: [{ url: '/pcf-modeler.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${copy.title} | Climate Seal`,
      description: copy.description,
      images: ['/pcf-modeler.png'],
    },
  };
}

export default async function ProductsPage() {
  const headerList = await headers();
  const locale = isChineseLanguage(resolveLanguage(headerList.get('x-language'))) ? 'zh' : 'en';
  const copy = content[locale];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: copy.breadcrumbHome, item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: copy.breadcrumbCurrent, item: `${siteUrl}/products` },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Climate Seal Platform',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: `${siteUrl}/products`,
    description: copy.softwareDescription,
  };

  return (
    <div className="bg-[#FAF8F3] text-[#123F3D]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <section className="border-b border-[#d7ddd6] bg-[#fcfbf8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:pb-20 lg:pt-36">
          <div className="space-y-7">
            <p className="cs-section-eyebrow">
              {copy.eyebrow}
            </p>
            <div className="space-y-5">
              <h1 className="font-lora text-4xl font-bold leading-[1.05] tracking-normal sm:text-5xl lg:!text-[3.1rem]">
                {copy.heroTitle}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#5f7672]">{copy.heroBody}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {copy.heroHighlights.map((item) => (
                <div key={item} className="rounded-[0.55rem] border border-[#d7ddd6] bg-[#FBF9F4] px-5 py-4 text-sm leading-6 text-[#486662]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className="self-start border-l-2 border-[#b9d7ce] pl-6 sm:pl-8">
            <h2 className="text-xl font-semibold leading-snug">{copy.coverageTitle}</h2>
            <p className="mt-3 text-base leading-7 text-[#5f7672]">{copy.coverageBody}</p>
            <dl className="mt-6 divide-y divide-[#d7ddd6]">
              {copy.coverageItems.map((item) => (
                <div key={item.title} className="py-4 first:pt-0">
                  <dt className="text-base font-semibold">{item.title}</dt>
                  <dd className="mt-2 text-sm leading-6 text-[#486662]">{item.description}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-b border-[#d7ddd6] bg-[#f7f4ec]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="cs-section-eyebrow">{copy.modulesEyebrow}</p>
            <h2 className="mt-4 font-lora text-3xl font-bold tracking-normal sm:text-4xl">{copy.modulesTitle}</h2>
            <p className="mt-4 text-base leading-7 text-[#5f7672]">{copy.modulesBody}</p>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-6 md:grid-cols-2">
            {copy.modules.map((module, index) => (
              <article key={module.title} className="border-t border-[#c8d7cf] py-6">
                <p className="mb-3 text-sm font-semibold text-[#5f7672]">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="text-xl font-semibold leading-snug text-[#123F3D]">{module.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-[#5f7672] sm:text-[16px]">{module.description}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-sm leading-7 text-[#5f7672]">{copy.reviewNote}</p>
        </div>
      </section>

      <section className="border-b border-[#d7ddd6] bg-[#fcfbf8]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="cs-section-eyebrow">{copy.useCasesEyebrow}</p>
            <h2 className="mt-4 font-lora text-3xl font-bold tracking-normal sm:text-4xl">{copy.useCasesTitle}</h2>
            <p className="mt-4 text-base leading-7 text-[#5f7672]">{copy.useCasesBody}</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {copy.useCases.map((item) => (
              <article key={item.title} className="rounded-[0.55rem] border border-[#d7ddd6] bg-[#FBF9F4] p-7">
                <h3 className="text-2xl font-semibold tracking-normal text-[#123F3D]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#5f7672]">{item.summary}</p>
                <Link href={item.href} className="mt-6 inline-flex rounded-[0.5rem] border border-[#123F3D] px-5 py-3 font-semibold text-[#123F3D] transition hover:bg-[#123F3D] hover:text-white">
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f3]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="py-2">
            <p className="cs-section-eyebrow">{copy.ctaEyebrow}</p>
            <h2 className="mt-4 font-lora text-3xl font-bold tracking-normal sm:text-4xl">{copy.ctaTitle}</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#5f7672]">{copy.ctaBody}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/pricing" className="rounded-[0.5rem] border border-[#123F3D] bg-[#123F3D] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#0f4a47]">
                {copy.ctaPrimary}
              </Link>
              <Link href="/contact" className="rounded-[0.5rem] border border-[#123F3D] px-6 py-3 text-center font-semibold text-[#123F3D] transition hover:bg-[#123F3D] hover:text-white">
                {copy.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
