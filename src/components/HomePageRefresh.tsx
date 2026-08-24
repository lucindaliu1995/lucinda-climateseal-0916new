'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Building2,
  Check,
  ClipboardCheck,
  Factory,
  FileText,
  FolderKanban,
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
        sectionEyebrow: 'AI 驱动可持续合规工作流程',
        sectionTitle: '从零散文件到可复核的合规数据',
        sectionSubtitle:
          'Climate Seal 帮助团队围绕不同法规、标准和业务要求，收集、结构化、计算和复核环境、产品、供应商与运营数据，并用 AI 执行、专家控制和完整证据链支撑交付。',
        cta: '预约工作流程演示',
        capabilities: [
          {
            number: '01',
            title: '混乱文件接收与 AI 澄清',
            description:
              '上传规格书、Excel、PDF、能源记录、运输数据、供应商文件、发票和支持证据。Climate Seal 会提取与要求相关的信息，识别缺失或不清楚的内容，并转化为面向供应商、业务团队或顾问的结构化澄清问题。',
          },
          {
            number: '02',
            title: '专家可控的结构化评估模型',
            description:
              'Climate Seal 会把范围、要求、数据点、方法学、假设和缺失证据检查组织成结构化评估模型。AI 准备技术底稿，专家保留关键方法学和复核决策控制权。',
          },
          {
            number: '03',
            title: '带依据、质量与风险的要求映射',
            description:
              'AI 会根据业务背景、地区、标准、法规和数据库上下文，建议适用的方法、要求和因子来源。每个匹配都包含来源、选择依据、匹配质量、风险等级和复核状态，帮助团队快速识别哪些项目需要进一步确认。',
          },
          {
            number: '04',
            title: '可复核报告与完整证据台账',
            description:
              '生成可交付给客户或内部使用的报告草稿，同时形成完整证据台账。台账记录原始数据、转换过程、计算、参考来源、假设、证据、风险等级、判断和确认状态，让最终输出更容易复核、解释和验证。',
          },
        ],
      }
    : {
        sectionEyebrow: 'AI-LED SUSTAINABILITY COMPLIANCE WORKFLOW',
        sectionTitle: 'From Fragmented Files to Review-Ready Compliance Data',
        sectionSubtitle:
          'Climate Seal helps teams collect, structure, calculate, and review environmental, product, supplier, and operational data against the requirements that matter to them, with AI execution, expert control, and a complete evidence trail.',
        cta: 'Book a workflow demo',
        capabilities: [
          {
            number: '01',
            title: 'Messy file intake and AI clarification',
            description:
              'Upload specifications, Excel sheets, PDFs, energy records, transport data, supplier files, invoices, and supporting evidence. Climate Seal extracts requirement-relevant information, identifies missing or unclear items, and turns them into structured clarification questions for suppliers, business teams, or consultants.',
          },
          {
            number: '02',
            title: 'Structured assessment model for expert control',
            description:
              'Climate Seal organizes scope, requirements, data points, methodologies, assumptions, and missing-evidence checks into a structured assessment model. AI prepares the technical groundwork, while experts stay in control of key methodology and review decisions.',
          },
          {
            number: '03',
            title: 'Requirement mapping with rationale, quality, and risk',
            description:
              'AI maps data to relevant methods, standards, regulations, and factor sources based on business context, geography, and methodology. Each match includes the source, selection rationale, match quality, risk level, and review status, so teams can quickly identify which items require further confirmation.',
          },
          {
            number: '04',
            title: 'Review-ready reports and evidence ledger',
            description:
              'Generate a client-ready or internal report draft together with a complete evidence ledger. The ledger records source inputs, transformations, calculations, references, assumptions, evidence, risk levels, decisions, and confirmation status, making the final output easier to review, explain, and verify.',
          },
        ],
      };

  const coverageItems = isZh
    ? [
        { icon: FolderKanban, label: '项目与上下文', title: '让每项工作都有清晰的上下文', body: '为客户交付、研究或长期任务建立项目，集中管理文件、结论和进展；临时任务保持独立，需要时再定向调用相关信息。' },
        { icon: Bot, label: 'AI 执行', title: '把繁琐步骤交给 Agent 推进', body: '从文件解析、数据检查和资料检索，到建模、匹配、分析与报告草拟，Agent 按任务持续推进，并在遇到缺口时停下来提问。' },
        { icon: ClipboardCheck, label: '审查与交付', title: '交付前看清需要关注的事项', body: '每个输入、判断和修改都有记录。团队可以评论、补充、确认和复核，再生成客户或内部真正需要的交付材料。' },
      ]
    : [
        { icon: FolderKanban, label: 'Projects & context', title: 'Keep every task grounded in context', body: 'Create a project for client delivery, research, or ongoing work. Keep files, conclusions, and progress together, while temporary tasks stay separate until you choose to connect them.' },
        { icon: Bot, label: 'AI execution', title: 'Let agents take the next step', body: 'From file parsing, data checks, and research to modeling, matching, analysis, and report drafting, agents keep work moving and pause when a gap needs your input.' },
        { icon: ClipboardCheck, label: 'Review & delivery', title: 'See what needs attention before delivery', body: 'See missing inputs, decisions, comments, and review status in one place. Confirm the work, request changes, and produce the material your team or client needs.' },
      ];

  const trustedLogos = [
    { name: 'Enerstay Sustainability', src: '/images/trusted/enerstay.png' },
    { name: 'Circl8', src: '/images/trusted/circl8.png' },
    { name: 'Columbia Global ESG Leadership Association', src: '/images/trusted/columbia-global-esg.png' },
    { name: 'Ricoh', src: '/images/trusted/ricoh.png' },
    { name: 'Jeret', src: '/images/trusted/jeret.png' },
    { name: 'Stibo Systems', src: '/images/trusted/stibo-systems.png' },
    { name: 'Zhejiang University', src: '/images/trusted/zhejiang-university.png' },
    { name: 'NVIDIA', src: '/images/trusted/nvidia.png' },
    { name: 'Google', src: '/images/trusted/google.png' },
    { name: 'GoDrop', src: '/images/trusted/godrop.png' },
    { name: 'New Energy Nexus', src: '/images/trusted/new-energy-nexus.png' },
    { name: 'Bureau Veritas', src: '/images/trusted/bureau-veritas.png' },
  ];

  const solutionCards = isZh
    ? [
        {
          href: '/solutions/brand-owner',
          icon: Building2,
          label: '品牌与采购团队',
          title: '管理企业、供应商与采购相关环境数据',
          summary: '用更简单的问题收集业务数据，并在后台形成可复核的环境、供应商和产品合规工作流程。',
          cta: '查看品牌方案',
          color: 'border-[#b8cec2] bg-[#edf5f0]',
        },
        {
          href: '/solutions/supply-chain',
          icon: Factory,
          label: '供应商与出口企业',
          title: '向客户交付透明、可解释的合规数据',
          summary: '准备客户、法规和市场准入要求的数据包，并保留买方或复核方可直接检查的证据台账。',
          cta: '查看供应商方案',
          color: 'border-[#dbcda9] bg-[#faf3df]',
        },
        {
          href: '/solutions/carbon-expert',
          icon: BadgeCheck,
          label: '可持续发展与 ESG 团队',
          title: '提升专业交付能力，不降低复核质量',
          summary: '减少数据整理、要求映射和证据归档工作，同时保留方法学判断、人工确认和最终交付控制权。',
          cta: '查看专家方案',
          color: 'border-[#b9cbd4] bg-[#edf3f6]',
        },
      ]
    : [
        {
          href: '/solutions/brand-owner',
          icon: Building2,
          label: 'Brands & procurement',
          title: 'Coordinate corporate, supplier, and procurement environmental data',
          summary: 'Collect business data through simpler questions while Climate Seal builds review-ready environmental, supplier, and product compliance workflows in the background.',
          cta: 'See brand solution',
          color: 'border-[#b8cec2] bg-[#edf5f0]',
        },
        {
          href: '/solutions/supply-chain',
          icon: Factory,
          label: 'Suppliers & exporters',
          title: 'Respond to buyers with transparent compliance outputs',
          summary: 'Prepare buyer-requested and market-access data packages with an evidence ledger that customers or reviewers can inspect directly.',
          cta: 'See supplier solution',
          color: 'border-[#dbcda9] bg-[#faf3df]',
        },
        {
          href: '/solutions/carbon-expert',
          icon: BadgeCheck,
          label: 'Sustainability & ESG teams',
          title: 'Deliver more compliance work without lowering review quality',
          summary: 'Reduce data cleanup, requirement mapping, and evidence organization while keeping control of methodology, human confirmation, and final delivery.',
          cta: 'See expert solution',
          color: 'border-[#b9cbd4] bg-[#edf3f6]',
        },
      ];

  const trustItems = isZh
    ? [
        { label: '可配置', title: '灵活知识库与工作流程', body: '使用 Climate Seal 的专业知识、上传自有资料，或在客户已指定方法和来源时调整选择。' },
        { label: '可控制', title: 'AI 不会擅自修改原始数据', body: 'AI 可以整理、匹配、检查和生成计算逻辑，但不会在没有人工确认时覆盖原始数据。' },
        { label: '可追溯', title: '完整证据与决策记录', body: '每个输入、来源、假设、证据和修改都被记录，便于第三方复核方或买方检查。' },
      ]
    : [
        { label: 'Configurable', title: 'Flexible knowledge bases and workflows', body: 'Use Climate Seal expertise, upload your own materials, or adjust methods and sources when buyers or internal teams already have approved options.' },
        { label: 'Controlled', title: 'AI never changes source data alone', body: 'AI can organize, match, check, and build calculation logic, but it never overwrites original data without human confirmation.' },
        { label: 'Traceable', title: 'A complete evidence and decision record', body: 'Every input, source, assumption, evidence file, and edit is logged so third-party reviewers or buyers can inspect the workflow directly.' },
      ];

  const resourceCards = isZh
    ? [
        {
          href: '/resources',
          label: '方法与合规',
          title: '围绕环境、产品与供应链合规持续学习',
          description: '查看法规解读、标准方法、供应链协同、证据管理与合规交付相关的文章和白皮书。',
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
          title: 'Keep learning across sustainability and compliance workflows',
          description: 'Explore practical articles on regulations, standards, supplier engagement, evidence management, and compliance-ready delivery.',
          cta: 'Visit the resource center',
          image: '/images/articles/Product-Carbon-Footprint.jpg',
        },
        {
          href: '/resources/whitepapers/supply-chain-carbon-management-white-paper',
          label: 'Featured whitepaper',
          title: 'Read the Supply Chain Carbon Management White Paper',
          description: 'Build supplier data packages, evidence chains, KPI governance, and review-ready workflows for scalable sustainability management.',
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
          description: '适合需要持续使用 AI 工作流程，定期生成环境、产品、供应商或企业合规交付材料的专业人员与小团队。',
          price: '$299 起 / 月 / 账户',
          features: ['完整 Climate Seal 评估与合规工作流程', '支持多种法规、标准和方法学', '根据 token / credit 实际使用量扩展'],
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
          description: 'For professionals and small teams delivering recurring environmental, product, supplier, or corporate compliance work with AI.',
          price: 'from $299 / month / account',
          features: ['Full Climate Seal assessment and compliance workflow', 'Support for multiple regulations, standards, and methodologies', 'Scale according to actual token and credit usage'],
          dark: true,
        },
        {
          title: 'Enterprise',
          description: 'For organizations coordinating environmental data across products, suppliers, business units, projects, or compliance programs.',
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
            <p className="cs-section-eyebrow">{isZh ? '面向可持续发展、环境与供应链专业人士' : 'For sustainability, environmental & supply-chain professionals'}</p>
            <h1 className="mx-auto mt-5 max-w-[27ch] font-lora text-[2.45rem] font-semibold leading-[1.02] text-[#123f3d] sm:text-[3.35rem] lg:text-[3.9rem]">
              {isZh ? (
                <>
                  <span className="block">AI 驱动的可持续发展</span>
                  <span className="block">合规工作台</span>
                </>
              ) : (
                <>
                  <span className="block">AI-Powered Sustainability</span>
                  <span className="block">Compliance Workspace</span>
                </>
              )}
            </h1>
            <p className="mx-auto mt-6 max-w-4xl text-[17px] leading-8 text-[#506a66] sm:text-[18px]">
              {isZh
                ? 'Climate Seal 将零散的产品、供应商、环境和运营数据转化为结构化评估、可追溯计算、合规交付成果和可审计证据，由 AI 执行并由专家控制。'
                : 'Climate Seal turns fragmented product, supplier, environmental and operational data into structured assessments, traceable calculations, compliance-ready outputs and auditable evidence — with AI execution and expert control.'}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#215b57] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#123f3d] sm:text-base">
                {t.hero.getStarted}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#workspace-flow" className="inline-flex min-h-12 items-center justify-center gap-2 border-b border-[#9db4aa] px-2 py-3 text-sm font-semibold text-[#215b57] transition hover:border-[#215b57] hover:text-[#123f3d] sm:text-base">
                {t.hero.workflowCta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <div className="mt-9 sm:mt-10">
            <HeroWorkflowPreview language={language} />
          </div>
        </div>
      </section>

      <section className="bg-[#0d292b] py-16 text-white sm:py-20">
        <div className={sectionClass}>
          <div className="grid gap-8 pt-2 md:grid-cols-3 md:gap-0">
            {coverageItems.map((item, index) => {
              const CoverageIcon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.06} className="md:border-r md:border-white/12 md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                  <div className="flex items-center gap-3 text-[#9fd5c1]">
                    <CoverageIcon className="h-5 w-5" strokeWidth={1.7} />
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em]">{item.label}</p>
                  </div>
                  <h2 className="mt-4 min-h-0 text-[1.25rem] font-semibold leading-tight text-white md:min-h-[3.5rem]">{item.title}</h2>
                  <p className="mt-3 text-[14px] leading-7 text-white/62">{item.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className={sectionClass}>
          <Reveal className="flex flex-col gap-5 border-b border-[#dbe3de] pb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-4xl">
              <p className="cs-section-eyebrow">{isZh ? '全球信任网络' : 'GLOBAL TRUST NETWORK'}</p>
              <h2 className="mt-4 max-w-[24ch] font-lora text-[2.3rem] font-bold leading-[1.05] text-[#123f3d] sm:text-[2.8rem] lg:text-[3.15rem]">
                {isZh ? '来自世界各地不同行业的合作伙伴与客户信赖' : 'Trusted by Partners and Clients Across Industries Around the World'}
              </h2>
            </div>
            <p className="max-w-md text-[14px] leading-6 text-[#5e706d]">
              {isZh ? '来自 Carnet.earth 的合作伙伴与客户网络，覆盖能源、制造、科技、教育与可持续发展等行业。' : 'A partner and client network spanning energy, manufacturing, technology, education, and sustainability.'}
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-7 gap-y-8 pt-8 sm:grid-cols-4 md:grid-cols-6">
            {trustedLogos.map((logo) => (
              <div key={logo.name} className="flex h-16 items-center justify-center grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100">
                <Image src={logo.src} alt={logo.name} width={170} height={72} className="max-h-12 max-w-full object-contain" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3ea] py-16 sm:py-20 lg:py-24">
        <div className={sectionClass}>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-12">
            <Reveal className="max-w-3xl">
              <p className="cs-section-eyebrow">{t.standardsCoverage.eyebrow}</p>
              <h2 className="mt-4 max-w-[18ch] font-lora text-[2.25rem] font-bold leading-[1.06] text-[#123f3d] sm:text-[2.9rem]">
                {t.standardsCoverage.title}
              </h2>
              <div className="mt-10 border-l-2 border-[#9db4aa] pl-5">
                <p className="text-[15px] leading-7 text-[#5e706d]">{t.standardsCoverage.description}</p>
              </div>
            </Reveal>

            <div className="border-y border-[#d7ddd6] bg-white px-5 sm:px-7 lg:mt-2">
              {t.standardsCoverage.groups.map((group, groupIndex) => (
                <Reveal key={group.label} delay={groupIndex * 0.06} className="border-b border-[#e4e9e5] py-5 last:border-b-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#718681]">{group.label}</p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span key={item.name} className="inline-flex items-center gap-2 border border-[#cbdad2] bg-[#f5f8f5] px-3.5 py-2 text-[13px] font-semibold text-[#215b57]">
                        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#7b9b8d]">{item.mark}</span>
                        <span>{item.name}</span>
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
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
                {isZh ? '把 Climate Seal 作为可持续发展顾问、ESG 顾问和 LCA 专业团队的 AI 交付层。' : 'Use Climate Seal as the AI delivery layer for sustainability consultants, ESG advisors, and LCA specialists.'}
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
              {isZh ? '从适合你合规需求的工作流程开始' : 'Start with the right workflow for your compliance needs'}
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

      <section id="faq" className="bg-[#f7f3ea] py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal className="text-center">
            <p className="cs-section-eyebrow">FAQ</p>
            <h2 className="mt-4 font-lora text-[2.25rem] font-bold text-[#123f3d] sm:text-[2.7rem]">
              {isZh ? '关于 Climate Seal 的常见问题' : 'Frequently Asked Questions about Climate Seal'}
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
