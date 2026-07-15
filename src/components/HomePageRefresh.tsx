'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Factory,
  FileText,
  Network,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import HomeContactSection from '@/components/HomeContactSection';
import { HeroWorkflowPreview, HomeWorkflowStory } from '@/components/HomeWorkflowExperience';
import KnowHowNumbersSection from '@/components/KnowHowNumbersSection';
import { PricingIcon } from '@/components/ProgramIcons';

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePageRefresh() {
  const { t, language } = useLanguage();
  const isZh = language === 'zh';
  const sectionClass = 'mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8';

  const workflowContent = isZh
    ? {
        sectionEyebrow: 'AI 驱动碳核算工作流程',
        sectionTitle: '从混乱供应商文件到可复核碳数据',
        sectionSubtitle:
          'Climate Seal 帮助可持续团队和企业在产品、供应商和业务单元之间收集、结构化、计算和复核碳数据，并用 AI 执行、专家控制和完整审计轨迹支撑交付。',
        cta: '预约工作流程演示',
        capabilities: [
          {
            number: '01',
            title: '混乱文件接收与 AI 澄清',
            description:
              '上传 BOM、规格书、Excel、PDF、能源记录、运输数据、供应商文件、发票和支持证据。Climate Seal 会提取碳相关数据，识别缺失或不清楚的内容，并转化为面向供应商、业务团队或顾问的结构化澄清问题。',
          },
          {
            number: '02',
            title: '专家可控的结构化核算模型',
            description:
              'Climate Seal 会把产品边界、排放源、单位、分配逻辑、假设和缺失源检查组织成结构化核算模型。AI 准备技术底稿，专家保留关键方法学和复核决策控制权。',
          },
          {
            number: '03',
            title: '带依据、质量与风险的因子匹配',
            description:
              'AI 会根据材料、工艺、地区、标准和数据库上下文建议排放因子。每个匹配都包含因子来源、选择依据、匹配质量、风险等级和复核状态，帮助团队快速识别哪些项目需要进一步确认。',
          },
          {
            number: '04',
            title: '可复核报告与完整审计底稿',
            description:
              '生成可交付给客户或内部使用的报告草稿，同时形成完整审计底稿。底稿记录原始数据、单位换算、公式、因子选择、假设、证据、风险等级、结果和确认状态，让最终输出更容易复核、解释和验证。',
          },
        ],
      }
    : {
        sectionEyebrow: 'AI-LED CARBON WORKFLOW',
        sectionTitle: 'From Messy Supplier Files to Review-Ready Carbon Data',
        sectionSubtitle:
          'Climate Seal helps sustainability teams and enterprises collect, structure, calculate, and review carbon data across products, suppliers, and business units, with AI execution, expert control, and a complete audit trail.',
        cta: 'Book a workflow demo',
        capabilities: [
          {
            number: '01',
            title: 'Messy file intake and AI clarification',
            description:
              'Upload BOMs, specifications, Excel sheets, PDFs, energy records, transport data, supplier files, invoices, and supporting evidence. Climate Seal extracts carbon-relevant data, identifies missing or unclear items, and turns them into structured clarification questions for suppliers, business teams, or consultants.',
          },
          {
            number: '02',
            title: 'Structured accounting model for expert control',
            description:
              'Climate Seal organizes product boundaries, emission sources, units, allocation logic, assumptions, and missing-source checks into a structured accounting model. AI prepares the technical groundwork, while experts stay in control of key methodology and review decisions.',
          },
          {
            number: '03',
            title: 'Factor matching with rationale, quality, and risk',
            description:
              'AI suggests emission factors based on material, process, geography, standard, and database context. Each match includes the factor source, selection rationale, match quality, risk level, and review status, so teams can quickly identify which items require further confirmation.',
          },
          {
            number: '04',
            title: 'Review-ready report and audit ledger',
            description:
              'Generate a client-ready or internal report draft together with a complete audit ledger. The ledger records original data, conversions, formulas, factor choices, assumptions, evidence, risk levels, results, and confirmation status, making the final output easier to review, explain, and verify.',
          },
        ],
      };

  const coverageItems = isZh
    ? [
        { icon: FileText, label: '产品碳', title: '产品碳足迹与 LCA', body: '围绕产品边界、BOM、因子、证据和报告建立可复核工作流程。' },
        { icon: Building2, label: '企业碳', title: 'Scope 1、2 与 3', body: '在组织层面整理活动数据、方法、因子、假设与计算记录。' },
        { icon: Network, label: '项目碳', title: '可配置项目核算', body: '根据项目要求定义边界、数据需求、核算节点与复核逻辑。' },
      ]
    : [
        { icon: FileText, label: 'Product carbon', title: 'Product footprints and LCA', body: 'Build reviewable workflows around product boundaries, BOMs, factors, evidence, calculations, and reports.' },
        { icon: Building2, label: 'Corporate carbon', title: 'Scope 1, 2, and 3', body: 'Organize activity data, methodologies, factors, assumptions, and calculation records at the organizational level.' },
        { icon: Network, label: 'Project carbon', title: 'Configurable project accounting', body: 'Define boundaries, data requirements, accounting stages, and review logic around each project requirement.' },
      ];

  const solutionCards = isZh
    ? [
        {
          href: '/solutions/brand-owner',
          icon: Building2,
          label: '品牌与采购团队',
          title: '管理企业、供应商与采购相关碳数据',
          summary: '用更简单的问题收集业务数据，并在后台形成可复核的 Scope 3、供应商和产品碳工作流程。',
          cta: '查看品牌方案',
          color: 'border-[#b8cec2] bg-[#edf5f0]',
        },
        {
          href: '/solutions/supply-chain',
          icon: Factory,
          label: '供应商与出口企业',
          title: '向客户交付透明、可解释的碳数据',
          summary: '准备 PCF、CBAM、EPD 和客户要求的数据包，并保留买方或核验方可直接复核的审计底稿。',
          cta: '查看供应商方案',
          color: 'border-[#dbcda9] bg-[#faf3df]',
        },
        {
          href: '/solutions/carbon-expert',
          icon: BadgeCheck,
          label: '碳与 ESG 专业团队',
          title: '提升专业交付能力，不降低复核质量',
          summary: '减少数据整理、因子匹配和证据归档工作，同时保留方法学判断、人工确认和最终交付控制权。',
          cta: '查看专家方案',
          color: 'border-[#b9cbd4] bg-[#edf3f6]',
        },
      ]
    : [
        {
          href: '/solutions/brand-owner',
          icon: Building2,
          label: 'Brands & procurement',
          title: 'Coordinate corporate, supplier, and procurement carbon data',
          summary: 'Collect business data through simpler questions while Climate Seal builds review-ready Scope 3, supplier, and product carbon workflows in the background.',
          cta: 'See brand solution',
          color: 'border-[#b8cec2] bg-[#edf5f0]',
        },
        {
          href: '/solutions/supply-chain',
          icon: Factory,
          label: 'Suppliers & exporters',
          title: 'Respond to buyers with transparent carbon outputs',
          summary: 'Prepare PCF, CBAM, EPD, and buyer-requested data packages with an audit ledger that buyers or verifiers can review directly.',
          cta: 'See supplier solution',
          color: 'border-[#dbcda9] bg-[#faf3df]',
        },
        {
          href: '/solutions/carbon-expert',
          icon: BadgeCheck,
          label: 'Carbon & ESG teams',
          title: 'Deliver more carbon work without lowering review quality',
          summary: 'Reduce data cleanup, factor matching, and evidence organization while keeping control of methodology, human confirmation, and final delivery.',
          cta: 'See expert solution',
          color: 'border-[#b9cbd4] bg-[#edf3f6]',
        },
      ];

  const trustItems = isZh
    ? [
        { label: '可配置', title: '灵活因子库与工作流程', body: '使用 Climate Seal 数据库、上传自有因子库，或在客户已指定因子时替换选择。' },
        { label: '可控制', title: 'AI 不会擅自修改原始数据', body: 'AI 可以整理、匹配、检查和生成计算逻辑，但不会在没有人工确认时覆盖原始数据。' },
        { label: '可追溯', title: '完整审计底稿', body: '每个输入、因子、假设、证据和修改都被记录，便于第三方核验方或买方复核。' },
      ]
    : [
        { label: 'Configurable', title: 'Flexible factor databases and workflows', body: 'Use the Climate Seal database, upload your own factor database, or change factor choices when buyers or internal teams already have approved options.' },
        { label: 'Controlled', title: 'AI never changes source data alone', body: 'AI can organize, match, check, and build calculation logic, but it never overwrites original data without human confirmation.' },
        { label: 'Traceable', title: 'A complete audit ledger', body: 'Every input, factor, assumption, evidence file, and edit is logged so third-party verifiers or buyers can review the workflow directly.' },
      ];

  const resourceCards = isZh
    ? [
        {
          href: '/resources',
          label: '方法与合规',
          title: '围绕产品、企业与项目碳核算持续学习',
          description: '查看边界定义、因子使用、供应链协同、审计底稿与合规交付相关的文章和白皮书。',
          cta: '进入资源中心',
          image: '/images/articles/Product-Carbon-Footprint.jpg',
        },
        {
          href: '/resources/whitepapers/supply-chain-carbon-management-white-paper',
          label: '精选白皮书',
          title: '获取供应链碳管理白皮书',
          description: '了解如何建立供应商 PCF 数据包、证据链、KPI 治理与可审核的供应链碳管理流程。',
          cta: '查看白皮书',
          image: '/images/whitepapers/supply-chain-carbon-management-white-paper-cover.jpg',
        },
      ]
    : [
        {
          href: '/resources',
          label: 'Methods and compliance',
          title: 'Keep learning across product, corporate, and project carbon accounting',
          description: 'Explore practical articles on boundaries, factor use, supplier engagement, audit ledgers, and compliance-ready delivery.',
          cta: 'Visit the resource center',
          image: '/images/articles/Product-Carbon-Footprint.jpg',
        },
        {
          href: '/resources/whitepapers/supply-chain-carbon-management-white-paper',
          label: 'Featured whitepaper',
          title: 'Read the Supply Chain Carbon Management White Paper',
          description: 'Build supplier PCF data packages, evidence chains, KPI governance, and audit-ready workflows for scalable supply-chain carbon management.',
          cta: 'View whitepaper',
          image: '/images/whitepapers/supply-chain-carbon-management-white-paper-cover.jpg',
        },
      ];

  const pricingCards = isZh
    ? [
        {
          title: '免费开始',
          description: '适合先用 1 份报告试用 Climate Seal，判断数据准备度、交付路径和适用场景。',
          price: '一份试用报告',
          features: ['测试数据准备度与报告结构', '了解现有工作流程如何迁移', '试用前先与团队确认适用场景'],
          dark: false,
        },
        {
          title: '专业版',
          description: '适合需要持续使用 AI 工作流程，定期生成产品、企业或项目碳交付材料的专业人员与小团队。',
          price: '$299 起 / 月 / 账户',
          features: ['完整 Climate Seal 核算工作流程', '支持多种法规、标准和方法学', '根据 token / credit 实际使用量扩展'],
          dark: true,
        },
        {
          title: '企业版',
          description: '适合多团队、多产品线、供应商或项目规模协同，需要长期运营机制的企业。',
          price: '定制',
          features: ['供应商数据收集与内部数据治理', '自定义因子库、审批控制和审计底稿', '跨产品、项目与业务团队的可复用模型'],
          dark: false,
        },
      ]
    : [
        {
          title: 'Free Start',
          description: 'Try Climate Seal with one report to understand your data readiness, delivery pathway, and best-fit workflow.',
          price: 'One trial report',
          features: ['Test data readiness and report structure', 'See how your current workflow can be migrated', 'Confirm the right use case with our team before starting'],
          dark: false,
        },
        {
          title: 'Professional',
          description: 'For professionals and small teams delivering recurring product, corporate, or project carbon work with AI.',
          price: 'from $299 / month / account',
          features: ['Full Climate Seal accounting workflow', 'Support for multiple regulations, standards, and methodologies', 'Scale according to actual token and credit usage'],
          dark: true,
        },
        {
          title: 'Enterprise',
          description: 'For organizations coordinating carbon data across products, suppliers, business units, projects, or compliance programs.',
          price: 'Custom',
          features: ['Supplier data collection and internal governance', 'Custom factor databases, approvals, and audit ledgers', 'Reusable models across products, projects, and teams'],
          dark: false,
        },
      ];

  const homeFaqs = t.faq?.groups?.flatMap((group) => group.items).slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-white text-[#123f3d]">
      <section id="home" className="overflow-hidden bg-[#f8faf8] pt-24 sm:pt-28 lg:pt-28">
        <div className={`${sectionClass} pb-10 sm:pb-12`}>
          <Reveal className="mx-auto max-w-5xl text-center">
            <p className="cs-section-eyebrow">{isZh ? '面向可持续专业人员' : 'For sustainability professionals'}</p>
            <h1 className="mx-auto mt-5 max-w-[27ch] font-lora text-[2.45rem] font-semibold leading-[1.02] text-[#123f3d] sm:text-[3.35rem] lg:text-[3.9rem]">
              {isZh ? (
                <>
                  <span className="block">面向可持续专业人员的</span>
                  <span className="block">AI 碳管理工作台</span>
                </>
              ) : (
                <>
                  <span className="block">AI-Powered Carbon</span>
                  <span className="block">Management Workspace</span>
                  <span className="block text-[#456864]">for Sustainability Professionals</span>
                </>
              )}
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-[17px] leading-8 text-[#506a66] sm:text-[18px]">
              {isZh
                ? 'Climate Seal 把零散的产品、企业与项目碳数据转化为可信、透明、可复核的核算工作流程。AI 在后台处理专业建模、因子匹配、证据追踪与审阅逻辑。'
                : 'Transform fragmented product and supplier data into credible, verification-ready carbon reports, powered by AI agents for data organization, carbon modeling, factor matching, risk assessment, and transparent reporting.'}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#215b57] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#123f3d] sm:text-base">
                {t.hero.getStarted}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#workspace-flow" className="inline-flex min-h-12 items-center justify-center gap-2 border-b border-[#9db4aa] px-2 py-3 text-sm font-semibold text-[#215b57] transition hover:border-[#215b57] hover:text-[#123f3d] sm:text-base">
                {isZh ? '查看工作流程' : 'See how the workflow works'}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <div className="mt-9 sm:mt-10">
            <HeroWorkflowPreview language={language} />
          </div>
        </div>
      </section>

      <section className="bg-[#123f3d] py-14 text-white sm:py-16">
        <div className={sectionClass}>
          <div className="grid gap-10 md:grid-cols-3 md:gap-0">
            {coverageItems.map((item, index) => {
              const CoverageIcon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.06} className="md:border-r md:border-white/12 md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                  <div className="flex items-center gap-3 text-[#9fd5c1]">
                    <CoverageIcon className="h-5 w-5" strokeWidth={1.7} />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">{item.label}</p>
                  </div>
                  <h2 className="mt-4 text-[1.35rem] font-semibold leading-tight text-white">{item.title}</h2>
                  <p className="mt-3 text-[15px] leading-7 text-white/68">{item.body}</p>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/12 pt-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/58">
            <span>ISO 14067</span>
            <span>ISO 14064</span>
            <span>GHG Protocol</span>
            <span>CBAM</span>
            <span>EPD · PEF · DPP</span>
          </div>
        </div>
      </section>

      <HomeWorkflowStory language={language} content={workflowContent} />

      <section id="solutions" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className={sectionClass}>
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="cs-section-eyebrow">{isZh ? '解决方案' : 'Solution paths'}</p>
              <h2 className="mt-4 max-w-[19ch] font-lora text-[2.3rem] font-bold leading-[1.06] text-[#123f3d] sm:text-[2.8rem]">
                {isZh ? '同一个平台，不同的专业工作方式' : 'One platform, adapted to different professional workflows'}
              </h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#215b57]">
              {isZh ? '预约演示' : 'Book a demo'}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {solutionCards.map((card, index) => {
              const SolutionIcon = card.icon;
              return (
                <Reveal key={card.href} delay={index * 0.06}>
                  <Link href={card.href} className={`group flex min-h-[350px] h-full flex-col border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(18,63,61,0.1)] sm:p-7 ${card.color}`}>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center bg-white text-[#215b57] shadow-[inset_0_0_0_1px_rgba(18,63,61,0.1)]">
                        <SolutionIcon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#58716d]">{card.label}</span>
                    </div>
                    <h3 className="mt-8 text-[1.45rem] font-semibold leading-tight text-[#123f3d]">{card.title}</h3>
                    <p className="mt-4 text-[15px] leading-7 text-[#5e706d]">{card.summary}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-[#215b57]">
                      {card.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Link href="/consultant-partner-program" className="group mt-10 flex flex-col gap-4 border-y border-[#dbe3de] py-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#58716d]">{isZh ? '顾问合作计划' : 'Consultant Partner Program'}</p>
              <p className="mt-2 max-w-3xl text-[1.15rem] font-semibold text-[#123f3d]">
                {isZh ? '把 Climate Seal 作为碳顾问、ESG 顾问和 LCA 专业团队的 AI 交付层。' : 'Use Climate Seal as the AI delivery layer for carbon consultants, ESG advisors, and LCA specialists.'}
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#215b57]">
              {isZh ? '了解计划' : 'Explore the program'}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      <section className="bg-[#0f3433] py-20 text-white sm:py-24">
        <div className={sectionClass}>
          <Reveal className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9fd5c1]">{isZh ? '专业控制' : 'Professional control'}</p>
              <h2 className="mt-4 max-w-[13ch] font-lora text-[2.35rem] font-bold leading-[1.05] text-white sm:text-[2.9rem]">
                {isZh ? '更快地执行，不牺牲透明度' : 'Move faster without sacrificing transparency'}
              </h2>
            </div>
            <div className="grid gap-9 sm:grid-cols-3 sm:gap-0">
              {trustItems.map((item) => (
                <div key={item.title} className="sm:border-l sm:border-white/12 sm:px-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9fd5c1]">{item.label}</p>
                  <h3 className="mt-4 text-[1.18rem] font-semibold leading-tight text-white">{item.title}</h3>
                  <p className="mt-3 text-[14px] leading-7 text-white/66">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className={sectionClass}>
          <KnowHowNumbersSection locale={isZh ? 'zh' : 'en'} context="home" />
        </div>
      </section>

      <section className="bg-[#f7f3ea] py-20 sm:py-24 lg:py-28">
        <div className={sectionClass}>
          <Reveal className="max-w-3xl">
            <p className="cs-section-eyebrow">{isZh ? '资源中心' : 'Resource center'}</p>
            <h2 className="mt-4 font-lora text-[2.3rem] font-bold leading-[1.06] text-[#123f3d] sm:text-[2.8rem]">
              {isZh ? '将标准、法规与方法学转化为可用的工作知识' : 'Turn standards, regulations, and methodologies into usable working knowledge'}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {resourceCards.map((card, index) => (
              <Reveal key={card.href} delay={index * 0.06}>
                <Link href={card.href} className="group grid min-h-[300px] overflow-hidden border border-[#d7ddd6] bg-white sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-[220px] overflow-hidden sm:min-h-full">
                    <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" unoptimized />
                  </div>
                  <div className="flex flex-col p-6 sm:p-7">
                    <div className="flex h-10 w-10 items-center justify-center bg-[#edf4f0] text-[#215b57]">
                      <FileText className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#58716d]">{card.label}</p>
                    <h3 className="mt-3 text-[1.25rem] font-semibold leading-tight text-[#123f3d]">{card.title}</h3>
                    <p className="mt-3 text-[14px] leading-7 text-[#5e706d]">{card.description}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#215b57]">
                      {card.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#eef4f0] py-20 sm:py-24 lg:py-28">
        <div className={sectionClass}>
          <Reveal className="max-w-3xl">
            <p className="cs-section-eyebrow">{isZh ? '价格' : 'Pricing'}</p>
            <h2 className="mt-4 font-lora text-[2.3rem] font-bold leading-[1.06] text-[#123f3d] sm:text-[2.8rem]">
              {isZh ? '从适合你碳核算需求的工作流程开始' : 'Start with the right workflow for your carbon accounting needs'}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pricingCards.map((plan, index) => (
              <Reveal key={plan.title} delay={index * 0.06}>
                <article className={`flex min-h-[440px] h-full flex-col border p-7 ${plan.dark ? 'border-[#123f3d] bg-[#123f3d] text-white' : 'border-[#c8d7cf] bg-white text-[#123f3d]'}`}>
                  <div className={`flex h-11 w-11 items-center justify-center ${plan.dark ? 'bg-white/10 text-[#b9e2d2]' : 'bg-[#edf4f0] text-[#215b57]'}`}>
                    <PricingIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-7 text-[1.55rem] font-semibold">{plan.title}</h3>
                  <p className={`mt-4 text-[15px] leading-7 ${plan.dark ? 'text-white/72' : 'text-[#5e706d]'}`}>{plan.description}</p>
                  <p className={`mt-7 text-[1.25rem] font-semibold ${plan.dark ? 'text-[#b9e2d2]' : 'text-[#123f3d]'}`}>{plan.price}</p>
                  <ul className={`mt-6 space-y-3 border-t pt-6 text-[14px] leading-6 ${plan.dark ? 'border-white/12 text-white/75' : 'border-[#dbe3de] text-[#5e706d]'}`}>
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <Check className={`mt-1 h-4 w-4 shrink-0 ${plan.dark ? 'text-[#9fd5c1]' : 'text-[#2f7770]'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`mt-auto inline-flex items-center justify-center gap-2 border px-5 py-3 text-sm font-semibold transition ${plan.dark ? 'border-white bg-white text-[#123f3d] hover:bg-[#d6e8df]' : 'border-[#215b57] text-[#215b57] hover:bg-[#215b57] hover:text-white'}`}>
                    {isZh ? '联系团队' : 'Talk to the team'}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20 sm:py-24">
        <div className={sectionClass}>
          <div className="grid overflow-hidden border border-[#c8d7cf] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[300px] bg-[#123f3d] lg:min-h-[430px]">
              <Image src="/polar-bears.png" alt="Climate Seal climate credibility" fill className="object-cover object-[32%_center]" quality={100} unoptimized />
              <div className="absolute inset-0 bg-[#123f3d]/20" />
            </div>
            <div className="flex items-center bg-[#f8faf8] px-7 py-12 sm:px-12 lg:px-16">
              <Reveal>
                <p className="cs-section-eyebrow">{t.sections.aboutUs.title}</p>
                <h2 className="mt-5 max-w-[16ch] font-lora text-[2.2rem] font-semibold leading-[1.08] text-[#123f3d] sm:text-[2.8rem]">
                  {isZh ? '用更低成本建立可信碳数据，把更多预算留给减碳。' : 'Build credible carbon data at lower cost. Leave more budget for decarbonization.'}
                </h2>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#f7f3ea] py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal className="text-center">
            <p className="cs-section-eyebrow">FAQ</p>
            <h2 className="mt-4 font-lora text-[2.25rem] font-bold text-[#123f3d] sm:text-[2.7rem]">
              {isZh ? 'AI 碳管理工作台常见问题' : 'AI Carbon Management Workspace FAQs'}
            </h2>
          </Reveal>
          <div className="mt-10 divide-y divide-[#d7ddd6] border-y border-[#d7ddd6]">
            {homeFaqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-[1.05rem] font-semibold text-[#123f3d]">
                  {item.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#c8d7cf] text-[#215b57] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pt-4 text-[15px] leading-7 text-[#5e706d]">{Array.isArray(item.a) ? item.a[0] : item.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-[#215b57]">
              {isZh ? '查看全部常见问题' : 'View all frequently asked questions'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-5">
        <div className={sectionClass}>
          <Link href="/referral-program" className="group flex flex-col gap-4 border-y border-[#dbe3de] py-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#58716d]">{isZh ? '推荐计划' : 'Referral program'}</p>
              <h2 className="mt-2 text-[1.3rem] font-semibold text-[#123f3d]">{isZh ? '认识适合试用 Climate Seal 的人？' : 'Know someone who should try Climate Seal?'}</h2>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#215b57]">
              {isZh ? '了解推荐计划' : 'Explore the referral program'}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      <HomeContactSection />
    </div>
  );
}
