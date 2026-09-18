import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { ArrowRight, Check, FileText, FolderKanban, ShieldCheck } from 'lucide-react';
import ConsultantPartnerApplicationForm from '@/components/ConsultantPartnerApplicationForm';
import { HeroWorkflowPreview } from '@/components/HomeWorkflowExperience';
import { buildLanguageAlternates, buildLocalizedCanonical, isChineseLanguage, resolveLanguage } from '@/lib/language';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://climate-seal.com';

const content = {
  en: {
    metaTitle: 'Carbon Consultant Partner Program | Climate Seal',
    description:
      'Climate Seal gives carbon consultants a structured AI workspace for PCF, LCA, supplier data, Scope 3, and CBAM work while experts retain review and final decisions.',
    eyebrow: 'Climate Seal for consultants',
    heroTitle: 'A more scalable way to deliver carbon projects.',
    heroBody:
      'Climate Seal turns fragmented client data into structured workspaces, traceable calculations, review-ready outputs, and evidence records. Your team keeps methodology, professional judgment, client communication, and final delivery.',
    heroPrimary: 'Request partner access',
    heroSecondary: 'Explore the product workflow',
    heroLabels: ['PCF & LCA', 'Supplier data & Scope 3', 'CBAM preparation'],
    outcomesEyebrow: 'The delivery advantage',
    outcomesTitle: 'Spend less time preparing carbon work. More time advising clients.',
    outcomes: [
      {
        title: 'Bring order to fragmented client data',
        body: 'Bring BOMs, supplier files, energy records, transport data, and supporting evidence into one structured project workspace.',
      },
      {
        title: 'Make repeatable work easier to run',
        body: 'Use a consistent workflow for the data preparation, checks, calculations, review points, and outputs that recur across engagements.',
      },
      {
        title: 'Keep every decision reviewable',
        body: 'Keep inputs, assumptions, matching logic, calculations, comments, and evidence visible for expert review and client questions.',
      },
    ],
    projectsEyebrow: 'Built around your work',
    projectsTitle: 'Support the carbon projects your clients are already asking for.',
    projects: [
      {
        title: 'Product Carbon Footprints & LCA',
        body: 'Structure product, BOM, supplier, factory, logistics, and factor data for transparent PCF and LCA work.',
      },
      {
        title: 'Supplier Carbon Data & Scope 3',
        body: 'Organize supplier requests, source records, data-quality checks, and the working materials behind value-chain assessments.',
      },
      {
        title: 'CBAM & Carbon Data Preparation',
        body: 'Bring product, production, energy, supplier, and evidence records into a clear workflow for carbon-data preparation and review.',
      },
    ],
    controlEyebrow: 'How the work stays credible',
    controlTitle: 'One structured workspace. Expert control throughout.',
    controlBody:
      'Climate Seal provides the carbon-accounting structure: data checks, matching logic, calculation traceability, risk flags, and output preparation. You adapt the work to the client and remain accountable for the professional decisions.',
    workspaceLabel: 'Climate Seal organizes',
    workspaceItems: [
      'File intake and structured source data',
      'Requirement and factor matching',
      'Calculation trail and evidence ledger',
      'Draft outputs and review flags',
    ],
    consultantLabel: 'Your consultancy controls',
    consultantItems: [
      'Client scoping and engagement design',
      'Methodology and assumption decisions',
      'Professional interpretation and review',
      'Client communication and final delivery',
    ],
    accessEyebrow: 'Partner access',
    accessTitle: 'Built around real consulting work.',
    accessBody:
      'Partner access is a working relationship for consultants who want to use Climate Seal across active client engagements, not a badge or a generic affiliate scheme.',
    accessItems: [
      {
        title: 'Workspace access',
        body: 'Use the Climate Seal carbon-data workspace on projects that need structured intake, traceable calculations, review, and reporting support.',
      },
      {
        title: 'Guided first-project onboarding',
        body: 'Set up the first workflow around your delivery context, target standard, available files, and review approach.',
      },
      {
        title: 'Partner pricing for recurring work',
        body: 'Discuss a pricing structure that fits recurring client delivery rather than isolated software use.',
      },
      {
        title: 'Direct workflow feedback',
        body: 'Share the recurring constraints in your projects so the product can improve around practical consultant delivery.',
      },
    ],
    stepsEyebrow: 'Getting started',
    stepsTitle: 'A straightforward path to your first project.',
    steps: [
      { title: 'Apply', body: 'Tell us about your consultancy, project mix, and the work you want to streamline.' },
      { title: 'Fit conversation', body: 'Discuss your delivery context, target projects, and whether the workflow is a practical fit.' },
      { title: 'Set up the workflow', body: 'Start with an active client project and organize the data, review points, and expected outputs.' },
      { title: 'Deliver with control', body: 'Use AI execution for the repeatable work while your team leads review, advice, and final delivery.' },
    ],
    applyEyebrow: 'Request partner access',
    applyTitle: 'See whether partner access is a fit for your consulting work.',
    applyBody:
      'Share a little about your work. We will review the project mix and discuss the most practical way to start.',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Consultant Partner Program',
  },
  zh: {
    metaTitle: '碳顾问合作计划 | Climate Seal',
    description:
      'Climate Seal 为碳顾问提供结构化 AI 工作空间，支持 PCF、LCA、供应商数据、Scope 3 与 CBAM 工作，同时由专家保留复核与最终决策权。',
    eyebrow: 'Climate Seal 顾问合作',
    heroTitle: '用更可扩展的方式交付碳项目。',
    heroBody:
      'Climate Seal 把零散的客户数据转为结构化工作空间、可追溯计算、可复核输出和证据记录。方法学、专业判断、客户沟通和最终交付始终由你的团队掌握。',
    heroPrimary: '申请顾问合作资格',
    heroSecondary: '查看产品工作流程',
    heroLabels: ['PCF 与 LCA', '供应商数据与 Scope 3', 'CBAM 数据准备'],
    outcomesEyebrow: '交付优势',
    outcomesTitle: '少花时间准备碳数据，把更多时间留给客户建议。',
    outcomes: [
      {
        title: '把零散客户数据整理成可用基础',
        body: '将 BOM、供应商文件、能源记录、运输数据和支持证据汇集到一个结构化项目工作空间。',
      },
      {
        title: '让重复工作更容易稳定交付',
        body: '在每个项目中复用一致的数据准备、检查、计算、复核节点和输出流程。',
      },
      {
        title: '让每个判断都可复核',
        body: '将输入、假设、匹配逻辑、计算、评论与证据保留在同一处，便于专家复核和回答客户问题。',
      },
    ],
    projectsEyebrow: '围绕你的项目',
    projectsTitle: '支持客户现在就会提出的碳项目。',
    projects: [
      {
        title: '产品碳足迹与 LCA',
        body: '围绕产品、BOM、供应商、工厂、物流和因子数据，组织透明的 PCF 与 LCA 工作。',
      },
      {
        title: '供应商碳数据与 Scope 3',
        body: '整理供应商请求、源文件、数据质量检查，以及价值链评估所需的工作底稿。',
      },
      {
        title: 'CBAM 与碳数据准备',
        body: '把产品、生产、能源、供应商和证据记录放入清晰的工作流，用于碳数据准备和复核。',
      },
    ],
    controlEyebrow: '让交付保持可信',
    controlTitle: '一个结构化工作空间，全程保留专家控制。',
    controlBody:
      'Climate Seal 提供碳核算所需的结构：数据检查、匹配逻辑、计算可追溯性、风险提示与输出准备。你根据客户情况调整工作，并对专业判断负责。',
    workspaceLabel: 'Climate Seal 负责组织',
    workspaceItems: [
      '文件接入与结构化源数据',
      '要求与因子匹配',
      '计算轨迹与证据台账',
      '报告草稿与复核提示',
    ],
    consultantLabel: '你的咨询团队掌控',
    consultantItems: [
      '客户范围界定与项目设计',
      '方法学与假设决策',
      '专业解释与复核',
      '客户沟通与最终交付',
    ],
    accessEyebrow: '顾问合作资格',
    accessTitle: '围绕真实的咨询交付建立合作。',
    accessBody:
      '这是一种面向实际客户项目的工作合作关系，而不是一个称号或普通的推广返佣计划。',
    accessItems: [
      {
        title: '工作空间使用权限',
        body: '在需要结构化数据接收、可追溯计算、复核和报告支持的项目中使用 Climate Seal。',
      },
      {
        title: '首个项目引导上线',
        body: '围绕你的交付场景、目标标准、现有文件和复核方式，搭建第一个工作流。',
      },
      {
        title: '适合持续交付的合作定价',
        body: '讨论适合持续客户交付的定价方式，而不是只按单次软件使用来设计。',
      },
      {
        title: '直接反馈工作流',
        body: '分享项目中反复出现的限制与需求，让产品围绕真实的顾问交付不断改进。',
      },
    ],
    stepsEyebrow: '开始方式',
    stepsTitle: '清晰地开启第一个合作项目。',
    steps: [
      { title: '提交申请', body: '介绍你的咨询机构、项目类型，以及希望优化的工作。' },
      { title: '适配沟通', body: '讨论你的交付背景、目标项目，以及工作流是否真正适用。' },
      { title: '搭建工作流', body: '从一个正在进行的客户项目开始，整理数据、复核节点和预期输出。' },
      { title: '保持控制地交付', body: '让 AI 推进重复工作，同时由你的团队负责复核、建议与最终交付。' },
    ],
    applyEyebrow: '申请顾问合作资格',
    applyTitle: '看看顾问合作是否适合你的咨询交付。',
    applyBody:
      '简单介绍你的工作。我们会先了解项目类型，再讨论最实际的开始方式。',
    breadcrumbHome: '首页',
    breadcrumbCurrent: '顾问合作计划',
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const language = resolveLanguage(headerList.get('x-language'));
  const locale = isChineseLanguage(language) ? 'zh' : 'en';
  const copy = content[locale];

  return {
    title: { absolute: copy.metaTitle },
    description: copy.description,
    alternates: {
      canonical: buildLocalizedCanonical('/consultant-partner-program', language),
      languages: buildLanguageAlternates('/consultant-partner-program'),
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.description,
      images: [{ url: '/goal-manager.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.metaTitle,
      description: copy.description,
      images: ['/goal-manager.png'],
    },
  };
}

export default async function ConsultantPartnerProgramPage() {
  const headerList = await headers();
  const locale = isChineseLanguage(resolveLanguage(headerList.get('x-language'))) ? 'zh' : 'en';
  const copy = content[locale];
  const projectIcons = [FileText, FolderKanban, ShieldCheck];
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: copy.breadcrumbHome, item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: copy.breadcrumbCurrent, item: `${siteUrl}/consultant-partner-program` },
    ],
  };

  return (
    <main className="bg-white text-[#123f3d]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="overflow-hidden border-b border-[#315d58] bg-[#0c2527] text-white">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[0.74fr_1.26fr] lg:items-center lg:px-8 lg:pb-24 lg:pt-36">
          <div className="relative z-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9fe1c5]">{copy.eyebrow}</p>
            <h1 className="mt-5 max-w-[12ch] font-lora text-[2.9rem] font-bold leading-[1.02] text-white sm:text-[3.8rem]">
              {copy.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-8 text-white/72">{copy.heroBody}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#apply" className="inline-flex items-center justify-center bg-[#9fe1c5] px-5 py-3 text-sm font-semibold text-[#0c2527] transition hover:bg-[#c5f0d9]">
                {copy.heroPrimary}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/products" className="inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#9fe1c5] hover:text-[#9fe1c5]">
                {copy.heroSecondary}
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/15 pt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/58">
              {copy.heroLabels.map((label) => <span key={label}>{label}</span>)}
            </div>
          </div>

          <div className="min-w-0 lg:-mr-16">
            <HeroWorkflowPreview language={locale} />
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7ddd6] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="cs-section-eyebrow">{copy.outcomesEyebrow}</p>
            <h2 className="mt-4 font-lora text-[2.15rem] font-bold leading-[1.06] text-[#123f3d] sm:text-[2.8rem]">{copy.outcomesTitle}</h2>
          </div>
          <div className="mt-14 grid border-t border-[#c8d7cf] lg:grid-cols-3">
            {copy.outcomes.map((outcome, index) => (
              <article key={outcome.title} className="border-b border-[#c8d7cf] px-0 py-8 lg:border-b-0 lg:px-8 lg:py-2 lg:first:pl-0 lg:last:pr-0 lg:not(:first-child):border-l">
                <p className="text-[11px] font-semibold text-[#6a817d]">0{index + 1}</p>
                <h3 className="mt-5 max-w-sm text-[1.35rem] font-semibold leading-7 text-[#123f3d]">{outcome.title}</h3>
                <p className="mt-4 max-w-sm text-[16px] leading-7 text-[#5e706d]">{outcome.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7ddd6] bg-[#eef4f0]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex flex-col gap-5 border-b border-[#c8d7cf] pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="cs-section-eyebrow">{copy.projectsEyebrow}</p>
              <h2 className="mt-4 font-lora text-[2.15rem] font-bold leading-[1.06] text-[#123f3d] sm:text-[2.8rem]">{copy.projectsTitle}</h2>
            </div>
            <Link href="/solutions/carbon-expert" className="inline-flex items-center gap-2 text-sm font-semibold text-[#215b57] transition hover:text-[#123f3d]">
              {locale === 'zh' ? '查看顾问与专家方案' : 'Explore the consultant solution'}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid lg:grid-cols-3">
            {copy.projects.map((project, index) => {
              const Icon = projectIcons[index];
              return (
                <article key={project.title} className="border-b border-[#c8d7cf] py-8 lg:border-b-0 lg:px-8 lg:first:pl-0 lg:last:pr-0 lg:not(:first-child):border-l">
                  <Icon className="h-5 w-5 text-[#215b57]" strokeWidth={1.7} aria-hidden="true" />
                  <h3 className="mt-6 text-[1.35rem] font-semibold leading-7 text-[#123f3d]">{project.title}</h3>
                  <p className="mt-4 max-w-sm text-[16px] leading-7 text-[#5e706d]">{project.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-[#315d58] bg-[#123f3d] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9fe1c5]">{copy.controlEyebrow}</p>
              <h2 className="mt-4 max-w-xl font-lora text-[2.15rem] font-bold leading-[1.06] text-white sm:text-[2.8rem]">{copy.controlTitle}</h2>
            </div>
            <p className="max-w-2xl text-[17px] leading-8 text-white/70 lg:justify-self-end">{copy.controlBody}</p>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="border-t border-white/20 pt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9fe1c5]">{copy.workspaceLabel}</p>
              <ul className="mt-5 divide-y divide-white/12 border-y border-white/12">
                {copy.workspaceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-4 text-[16px] leading-6 text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#9fe1c5]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-white/20 pt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9fe1c5]">{copy.consultantLabel}</p>
              <ul className="mt-5 divide-y divide-white/12 border-y border-white/12">
                {copy.consultantItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 py-4 text-[16px] leading-6 text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#9fe1c5]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7ddd6] bg-[#faf8f3]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div>
            <p className="cs-section-eyebrow">{copy.accessEyebrow}</p>
            <h2 className="mt-4 max-w-lg font-lora text-[2.15rem] font-bold leading-[1.06] text-[#123f3d] sm:text-[2.8rem]">{copy.accessTitle}</h2>
            <p className="mt-6 max-w-xl text-[17px] leading-8 text-[#5e706d]">{copy.accessBody}</p>
          </div>
          <div className="border-t border-[#c8d7cf]">
            {copy.accessItems.map((item, index) => (
              <article key={item.title} className="grid gap-3 border-b border-[#c8d7cf] py-6 sm:grid-cols-[40px_1fr] sm:gap-6">
                <span className="text-sm font-semibold text-[#215b57]">0{index + 1}</span>
                <div>
                  <h3 className="text-[1.15rem] font-semibold leading-7 text-[#123f3d]">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-[16px] leading-7 text-[#5e706d]">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7ddd6] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="cs-section-eyebrow">{copy.stepsEyebrow}</p>
            <h2 className="mt-4 font-lora text-[2.15rem] font-bold leading-[1.06] text-[#123f3d] sm:text-[2.8rem]">{copy.stepsTitle}</h2>
          </div>
          <ol className="mt-14 grid border-t border-[#c8d7cf] lg:grid-cols-4">
            {copy.steps.map((step, index) => (
              <li key={step.title} className="border-b border-[#c8d7cf] py-7 lg:border-b-0 lg:px-7 lg:first:pl-0 lg:last:pr-0 lg:not(:first-child):border-l">
                <p className="text-[11px] font-semibold text-[#6a817d]">0{index + 1}</p>
                <h3 className="mt-5 text-[1.2rem] font-semibold leading-7 text-[#123f3d]">{step.title}</h3>
                <p className="mt-3 max-w-sm text-[15px] leading-7 text-[#5e706d]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="apply" className="scroll-mt-24 bg-[#eef4f0]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.74fr_1.26fr] lg:px-8">
          <div>
            <p className="cs-section-eyebrow">{copy.applyEyebrow}</p>
            <h2 className="mt-4 max-w-xl font-lora text-[2.15rem] font-bold leading-[1.06] text-[#123f3d] sm:text-[2.8rem]">{copy.applyTitle}</h2>
            <p className="mt-6 max-w-lg text-[17px] leading-8 text-[#5e706d]">{copy.applyBody}</p>
          </div>
          <ConsultantPartnerApplicationForm language={locale} />
        </div>
      </section>
    </main>
  );
}
