'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { BadgeCheck, Building2, Factory, FileText } from 'lucide-react';
import KnowHowNumbersSection from '@/components/KnowHowNumbersSection';
import { PricingIcon } from '@/components/ProgramIcons';
import HomeContactSection from '@/components/HomeContactSection';

export default function Home() {
  const { t, language } = useLanguage();
  const wideSectionClass = 'mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8';
  const solutionCards = [
    {
      href: '/solutions/brand-owner',
      icon: Building2,
      label: language === 'zh' ? '品牌与采购团队' : 'Brands & Procurement',
      title: language === 'zh' ? '管理供应商碳数据与减排计划' : 'Manage supplier carbon data and abatement planning',
      panelClass:
        'border-[#c8d8cf] bg-[linear-gradient(165deg,rgba(231,241,235,0.95),rgba(251,248,242,0.98))] hover:border-[#8eaea1] hover:shadow-[0_18px_30px_rgba(86,130,113,0.12)]',
      badgeClass: 'bg-[#dcebe3] text-[#2b615b]',
      ctaClass: 'text-[#2b615b]',
      summary:
        language === 'zh'
          ? '帮助品牌、采购与可持续团队更快收集供应商数据、识别质量风险，并推进可执行的减排计划。'
          : 'Help brand, procurement, and sustainability teams collect supplier data faster, identify quality risks, and move credible abatement plans forward.',
      cta: language === 'zh' ? '查看品牌方案' : 'See brand solution',
    },
    {
      href: '/solutions/supply-chain',
      icon: Factory,
      label: language === 'zh' ? '供应商与出口企业' : 'Suppliers & Exporters',
      title: language === 'zh' ? '更快交付可信的产品碳足迹结果' : 'Deliver credible product carbon footprints faster',
      panelClass:
        'border-[#ddd0bb] bg-[linear-gradient(165deg,rgba(248,241,228,0.96),rgba(251,248,242,0.98))] hover:border-[#c7b28e] hover:shadow-[0_18px_30px_rgba(170,132,76,0.12)]',
      badgeClass: 'bg-[#efe3ce] text-[#7a5a27]',
      ctaClass: 'text-[#7a5a27]',
      summary:
        language === 'zh'
          ? '帮助工厂、供应商与出口企业用更低的执行成本准备审计就绪的 PCF、证据包与客户交付材料。'
          : 'Help factories, suppliers, and exporters produce audit-ready PCFs, evidence packs, and buyer submissions with less manual work.',
      cta: language === 'zh' ? '查看供应商方案' : 'See supplier solution',
    },
    {
      href: '/solutions/carbon-expert',
      icon: BadgeCheck,
      label: language === 'zh' ? '碳与 ESG 专业团队' : 'Carbon & ESG Teams',
      title: language === 'zh' ? '提升建模、因子匹配与质量审查效率' : 'Speed up modeling, factor matching, and quality review',
      panelClass:
        'border-[#cfd8df] bg-[linear-gradient(165deg,rgba(234,240,243,0.96),rgba(251,248,242,0.98))] hover:border-[#9fb1bf] hover:shadow-[0_18px_30px_rgba(92,123,139,0.12)]',
      badgeClass: 'bg-[#dce7ec] text-[#345a6b]',
      ctaClass: 'text-[#345a6b]',
      summary:
        language === 'zh'
          ? '帮助碳顾问、LCA 与 ESG 专业团队减少重复计算工作，把时间投入到高价值判断、审核与交付质量。'
          : 'Help consultants and in-house carbon teams reduce repetitive calculation work and focus expert time on judgment, review, and delivery quality.',
      cta: language === 'zh' ? '查看专家方案' : 'See expert solution',
    },
  ];
  const consultantProgramEntry = language === 'zh'
    ? {
        label: '顾问合作计划',
        title: '面向碳顾问、ESG 顾问、LCA 顾问与精品咨询机构的交付加速计划',
        description:
          '用 Climate Seal 作为你的 AI 交付层，更快生成 PCF、CCF、Scope 3 与 EPD Draft 项目的计算底稿、证据链和核验准备材料，在不增加分析人手的情况下提升交付能力与项目利润。',
        cta: '查看顾问合作计划',
      }
    : {
        label: 'Consultant Partner Program',
        title: 'A delivery acceleration program for carbon consultants, ESG advisors, LCA specialists, and boutique firms',
        description:
          'Use Climate Seal as your AI delivery layer to produce calculation drafts, evidence chains, and verification-ready materials for PCF, CCF, Scope 3, and EPD Draft work faster, without adding analyst headcount.',
        cta: 'Explore the partner program',
      };
  const platformCoverage = language === 'zh'
    ? {
        eyebrow: 'Platform coverage',
        title: '一套 AI 平台，覆盖产品与企业碳核算工作流',
        description: 'Climate Seal 不只服务 Product Carbon Footprint。它也支持 Scope 3 企业碳核算与 Project Carbon 场景，并把标准支持和生命周期边界能力放进同一套 AI 工作流里。',
        cards: [
          {
            label: 'Accounting coverage',
            title: '覆盖多类碳核算场景',
            description: '支持 Product Carbon Footprint、Scope 3 企业碳核算与 Project Carbon，不需要为不同交付场景切换不同工具。',
            items: ['Product Carbon Footprint', 'Scope 3 企业碳核算', 'Project Carbon'],
          },
          {
            label: 'Standards supported',
            title: '围绕主流方法学和合规框架交付',
            description: '当前支持 ISO 14067 与 GHG Protocol，并为后续标准扩展预留统一的建模与复核逻辑。',
            items: ['ISO 14067', 'GHG Protocol'],
          },
          {
            label: 'Lifecycle boundaries',
            title: '支持不同生命周期边界',
            description: '无论是 cradle-to-grave 还是 cradle-to-cradle，团队都可以在同一系统里推进边界设定、建模和交付。',
            items: ['Cradle-to-grave', 'Cradle-to-cradle'],
          },
        ],
      }
    : {
        eyebrow: 'Platform coverage',
        title: 'One AI Platform for Product and Corporate Carbon Workflows',
        description: 'Climate Seal does not only support Product Carbon Footprints. It also covers Scope 3 corporate carbon accounting and Project Carbon workflows, while keeping standards support and lifecycle boundaries inside the same AI-led system.',
        cards: [
          {
            label: 'Accounting coverage',
            title: 'Cover multiple carbon accounting scenarios',
            description: 'Support Product Carbon Footprint, Scope 3 corporate carbon accounting, and Project Carbon work without switching between disconnected tools.',
            items: ['Product Carbon Footprint', 'Scope 3 Carbon Accounting', 'Project Carbon'],
          },
          {
            label: 'Standards supported',
            title: 'Deliver around mainstream methods and compliance frameworks',
            description: 'Today the platform supports ISO 14067 and GHG Protocol-aligned workflows, with a shared system for modeling and review as coverage expands.',
            items: ['ISO 14067', 'GHG Protocol'],
          },
          {
            label: 'Lifecycle boundaries',
            title: 'Handle different lifecycle boundaries in one place',
            description: 'Whether the work is cradle-to-grave or cradle-to-cradle, teams can move through boundary setup, modeling, and delivery inside the same system.',
            items: ['Cradle-to-grave', 'Cradle-to-cradle'],
          },
        ],
      };
  const impactCards = language === 'zh'
    ? [
        {
          title: '更快的流程与结果交付',
          description: '把从原始数据到可审阅结果的流程推进得更快，同时减少返工和反复确认。',
        },
        {
          title: '更少人工核算',
          description: '减少手工查因子、整理文件、来回确认和重复建模的工作量。',
        },
        {
          title: '更可信的输出',
          description: '通过结构化建模、风险提示和审计留痕提高交付一致性与可复核性。',
        },
        {
          title: '更好的供应链协同',
          description: '让品牌方、制造商与供应商围绕同一套更清晰的碳数据流程协作。',
        },
      ]
    : [
        {
          title: 'Faster workflow and result delivery',
          description: 'Move from raw data to review-ready outputs faster while reducing rework and repeated back-and-forth.',
        },
        {
          title: 'Less manual carbon work',
          description: 'Reduce manual factor lookup, document cleanup, repetitive coordination, and spreadsheet-heavy modeling work.',
        },
        {
          title: 'More credible outputs',
          description: 'Deliver traceable reports and complete supporting data packages that are ready to send for third-party verification.',
        },
        {
          title: 'Better supplier collaboration',
          description: 'Help brands, manufacturers, and suppliers work from a clearer shared carbon workflow.',
        },
      ];
  const referralProgram = language === 'zh'
    ? {
        title: '认识适合试用 Climate Seal 的人？',
        description: '如果你已经看过 ClimateSeal 演示，并且知道谁可能真正受益，只需通过邮件做一个可信的介绍。对方成为付费客户后，你将获得一次性 100 美元感谢奖励。',
        cta: '查看推荐计划',
      }
    : {
        title: 'Know someone who should try Climate Seal?',
        description: 'If you have seen the ClimateSeal demo and know someone who could genuinely benefit, make a trusted email introduction. When they become a paying customer, you receive a one-time $100 thank-you reward.',
        cta: 'Explore the referral program',
      };
  const homepagePricingSection = language === 'zh'
    ? {
        title: '从适合你碳报告需求的工作流开始',
        subtitle: '从一次试用报告开始，或按月使用个人方案；更复杂的供应链与企业项目可与团队定制。',
      }
    : {
        title: 'Start with the right workflow for your carbon reporting needs',
        subtitle: 'Start with a simple PCF trial, move into a professional monthly workflow, or talk with us about a larger enterprise program.',
      };
  const homepagePricingCards = [
    {
      title: language === 'zh' ? '免费开始' : 'Free Start',
      description: language === 'zh'
        ? '适合先用 1 份报告试用 Climate Seal，判断数据准备度、交付路径和适用场景。'
        : 'For teams that want to try Climate Seal with a simple product carbon footprint before committing.',
      price: language === 'zh' ? '有限报告点数' : 'Limited report credits',
      cadence: '',
      features: language === 'zh'
        ? [
            '包含有限点数，可完成一个简单 PCF 工作流',
            '适合测试数据准备度、报告结构和现有碳报告流程适配方式',
            '所有试用都需要先与团队沟通',
          ]
        : [
            'Includes a limited amount of credits to complete one simple PCF workflow.',
            'Best for testing data readiness, report structure, and how Climate Seal fits into your current carbon reporting process.',
            'All trials start after speaking with our team',
          ],
      button: language === 'zh' ? '联系团队' : 'Talk to the team',
      cardClass: 'cs-card-secondary',
      iconClass: 'bg-white/68 text-[#215b57] shadow-[inset_0_0_0_1px_rgba(18,63,61,0.08)]',
      titleClass: 'text-[var(--brand-ink)]',
      priceClass: 'text-[var(--brand-ink)]',
      bodyClass: 'text-[var(--brand-muted)]',
      buttonClass:
        'border border-[var(--brand-border)] bg-[var(--brand-surface)] text-[var(--brand-ink)] hover:bg-[var(--brand-bg-soft)]',
    },
    {
      title: language === 'zh' ? '专业版' : 'Professional',
      description: language === 'zh'
        ? '适合需要持续使用 AI 工作流，定期生成 PCF、CCF 或相关碳报告材料的个人或小团队。'
        : 'For consultants, experts, and small teams delivering recurring carbon accounting work with AI.',
      price: language === 'zh' ? '$299 起' : 'from $299',
      cadence: language === 'zh' ? '/月 /账户' : '/Month /Account',
      features: language === 'zh'
        ? [
            '访问完整 Climate Seal 核算工作流，支持多种法规、标准和方法学',
            '价格基于 token / credit 使用量，可按实际项目量扩展报告交付',
            '适合希望提升交付能力、减少人工负担的专业团队',
          ]
        : [
            'Access the full Climate Seal accounting workflow, with support for multiple regulations, standards, and methodologies.',
            'Pricing is based on token / credit usage, so teams can scale report delivery according to actual project volume.',
            'Best for professionals who want to increase delivery capacity without adding more manual workload.',
          ],
      button: language === 'zh' ? '联系团队' : 'Talk to the team',
      cardClass: 'cs-card-dark',
      iconClass: 'bg-white/10 text-[#d8efe7]',
      titleClass: 'text-white',
      priceClass: 'text-[#d8efe7]',
      bodyClass: 'text-white/90',
      buttonClass:
        'border border-white/14 bg-white text-[var(--brand-deep)] hover:bg-[#dff0e6]',
    },
    {
      title: language === 'zh' ? '企业版' : 'Enterprise',
      description: language === 'zh'
        ? '适合多团队、多产品线或供应商规模协同，需要长期运营机制的企业。'
        : 'For corporates managing carbon data across products, suppliers, business units, or compliance programs.',
      price: language === 'zh' ? '定制' : 'Custom',
      cadence: '',
      features: language === 'zh'
        ? [
            '面向供应商管理、内部数据治理、多产品报告和跨团队复核',
            '包含供应商数据收集、自定义因子库、审批控制、追溯包和可复用产品数据模型',
            '适合需要长期碳合规操作系统，而不只是单份报告的企业',
          ]
        : [
            'Built for supplier management, internal data governance, multi-product reporting, and cross-team review.',
            'Includes enterprise-ready workflows such as supplier data collection, custom factor databases, approval controls, traceability packages, and reusable product data models.',
            'Best for companies that need a long-term carbon compliance operating system, not only individual reports.',
          ],
      button: language === 'zh' ? '联系团队' : 'Talk to the team',
      cardClass: 'cs-card-primary',
      iconClass: 'bg-white/68 text-[#215b57] shadow-[inset_0_0_0_1px_rgba(18,63,61,0.08)]',
      titleClass: 'text-[var(--brand-ink)]',
      priceClass: 'text-[var(--brand-ink)]',
      bodyClass: 'text-[var(--brand-muted)]',
      buttonClass:
        'border border-[var(--brand-border)] bg-[var(--brand-surface)] text-[var(--brand-ink)] hover:bg-[var(--brand-bg-soft)]',
    },
  ];
  const resourceCards = language === 'zh'
    ? [
        {
          href: '/resources',
          label: '法规与方法',
          title: '围绕 PCF、Scope 3 与碳合规持续学习',
          description: '查看产品碳足迹、边界定义、因子使用、供应链协同与合规交付相关的文章和白皮书。',
          cta: '进入资源中心',
          image: '/images/articles/Product-Carbon-Footprint.jpg',
        },
        {
          href: '/resources/whitepapers/ai-carbon-operations-playbook',
          label: '精选白皮书',
          title: '获取 AI Carbon Operations Playbook',
          description: '了解团队如何用 AI 改善数据收集、建模复核与碳交付节奏。',
          cta: '查看白皮书',
          image: '/images/whitepapers/ai-carbon-operations-playbook-cover.jpg',
        },
      ]
    : [
        {
          href: '/resources',
          label: 'Methods and compliance',
          title: 'Keep learning across PCF, Scope 3, and carbon compliance',
          description: 'Explore articles and whitepapers on product carbon footprints, boundaries, factor usage, supplier engagement, and audit-ready delivery.',
          cta: 'Visit the resource center',
          image: '/images/articles/Product-Carbon-Footprint.jpg',
        },
        {
          href: '/resources/whitepapers/ai-carbon-operations-playbook',
          label: 'Featured whitepaper',
          title: 'Read the AI Carbon Operations Playbook',
          description: 'See how teams can use AI to improve data collection, modeling review, and carbon delivery workflows.',
          cta: 'View whitepaper',
          image: '/images/whitepapers/ai-carbon-operations-playbook-cover.jpg',
        },
      ];
  const heroStages = language === 'zh'
    ? ['Targets & Scope', 'Raw Data', 'Accounting Model', 'Data Risk', 'Results & Output']
    : ['Targets & Scope', 'Raw Data', 'Accounting Model', 'Data Risk', 'Results & Output'];
  const heroTaskFeed = language === 'zh'
    ? [
        '补全核算范围',
        '解析 BOM 与原始文件',
        '标记高风险数据点',
        '整理审计就绪输出',
      ]
    : [
        'Complete accounting scope',
        'Parse BOM and source files',
        'Flag higher-risk data points',
        'Prepare audit-ready output',
      ];
  const heroCopilotMeta = language === 'zh'
    ? [
        { label: 'Active tasks', value: '04' },
        { label: 'Missing fields', value: '03' },
        { label: 'Risk flags', value: '07' },
      ]
    : [
        { label: 'Active tasks', value: '04' },
        { label: 'Missing fields', value: '03' },
        { label: 'Risk flags', value: '07' },
      ];
  const heroRightPanel = language === 'zh'
    ? {
        title: 'Accounting Requirements & Standards',
        cardTitle: 'Project Dataset',
        object: 'Client files',
        formTitle: 'Regulation & Accounting Scope',
        fields: [
          { label: 'ISO 14067 (2018)', value: 'Selected' },
          { label: 'Accounting Boundary', value: 'Cradle-to-grave' },
          { label: 'Functional Unit', value: 'Defined' },
          { label: 'Benchmark Value', value: 'Calculated' },
        ],
        tabs: ['Requirement', 'Raw Data', 'BOM Structure', 'Data Risk'],
      }
    : {
        title: 'Accounting Requirements & Standards',
        cardTitle: 'Project Dataset',
        object: 'Client files',
        formTitle: 'Regulation & Accounting Scope',
        fields: [
          { label: 'ISO 14067 (2018)', value: 'Selected' },
          { label: 'Accounting Boundary', value: 'Cradle-to-grave' },
          { label: 'Functional Unit', value: 'Defined' },
          { label: 'Benchmark Value', value: 'Calculated' },
        ],
        tabs: ['Requirement', 'Raw Data', 'BOM Structure', 'Data Risk'],
      };
  const heroWorkspaceRows = language === 'zh'
    ? [
        { label: 'BOM rows imported', value: '19', status: 'Parsed' },
        { label: 'Scope stages selected', value: '5', status: 'Ready' },
        { label: 'High-risk points', value: '7', status: 'Review' },
      ]
    : [
        { label: 'BOM rows imported', value: '19', status: 'Parsed' },
        { label: 'Scope stages selected', value: '5', status: 'Ready' },
        { label: 'High-risk points', value: '7', status: 'Review' },
      ];

  const productSection = language === 'zh'
    ? {
        title: '上传文件，让 AI 完成碳核算重活',
        subtitle:
          '上传产品、供应商或项目相关文件后，AI 会自动解析数据、辅助 LCA 建模、完成因子匹配，并标记缺失信息与风险点。团队需要做的更多是回答问题、补充缺口、确认关键判断，而不是手工推进整套碳核算流程。',
        summaryTitle: '为什么企业选择 Climate Seal',
        summaryItems: [
          '从上传文件开始，而不是从空白模型和人工整理开始',
          'AI 负责解析、建模支持、因子匹配和缺口识别',
          '团队只在 AI 要求补充、确认或复核时介入',
        ],
        cta: '立即免费开始',
        capabilitiesTitle: '核心能力',
      capabilities: [
          {
            number: '01',
            title: '自动文件解析与数据整理',
            description:
              '支持多种文档与数据来源，自动整理成更适合碳核算与复核的结构化输入。',
          },
          {
            number: '02',
            title: 'AI 辅助 LCA 建模与边界设置',
            description:
              '围绕产品类型、交付场景、生命周期边界和方法学要求，帮助团队更快推进建模。',
          },
          {
            number: '03',
            title: '自动化因子匹配与风险评分',
            description:
              '结合产品、工艺、材料和地区语境支持更可信的因子筛选，并对关键数据点给出风险与复核信号。',
          },
          {
            number: '04',
            title: '缺口识别与审计就绪交付',
            description:
              '当信息缺失时引导团队补充或确认，并沉淀更适合客户、采购方和第三方复核的交付结果。',
          },
        ],
      }
    : {
        title: 'Upload files. Let AI do the carbon accounting work.',
        subtitle:
          'Upload product, supplier, or project files, and the AI agent parses the data, supports LCA modeling, automates factor matching, and flags missing pieces. Teams spend more time answering questions, filling gaps, and confirming key assumptions instead of pushing the whole carbon accounting process manually.',
        summaryTitle: 'Why teams choose Climate Seal',
        summaryItems: [
          'Start from uploaded files instead of blank models and manual cleanup',
          'Let AI handle parsing, modeling support, factor matching, and gap detection',
          'Bring people in only when confirmation, supplementation, or review is needed',
        ],
        cta: 'Start Free Today',
        capabilitiesTitle: 'Core capabilities',
        capabilities: [
          {
            number: '01',
            title: 'Automated document parsing',
            description:
              'Organize different document types into more structured accounting inputs without manual reformatting.',
          },
          {
            number: '02',
            title: 'AI-assisted LCA modeling and boundaries',
            description:
              'Move faster through lifecycle boundaries, methodology choices, and model setup across different carbon accounting scenarios.',
          },
          {
            number: '03',
            title: 'Find defensible emission factors faster',
            description:
              'Climate Seal suggests factors based on material, process, geography, and data quality — with rationale saved for review.',
          },
          {
            number: '04',
            title: 'Gap detection and verification-ready outputs',
            description:
              'When information is missing, the platform asks for confirmation or extra inputs and helps teams package review-ready outputs faster.',
          },
      ],
      sectionTitle:
        language === 'zh'
          ? '把零散数据与文件变成可核验的碳报告'
          : 'Turn Messy Data and Files Into Verification-Ready Carbon Reports',
      };
  return (
    <>
    <div className="min-h-screen bg-[#FAF8F3]">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-[#faf8f3]" data-theme="home" data-section="home-hero" data-category="landing">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(250,248,243,0.94)_0%,rgba(244,240,233,0.88)_100%)]" />
        
        <div className="relative z-10 mx-auto grid min-h-[58vh] w-full max-w-[1320px] items-start gap-8 px-4 pb-10 pt-32 sm:px-6 sm:pb-12 sm:pt-36 md:grid-cols-[minmax(0,0.82fr)_minmax(480px,1.18fr)] md:gap-6 md:pt-40 lg:min-h-[62vh] lg:grid-cols-[minmax(0,0.72fr)_minmax(560px,1.08fr)] lg:gap-9 lg:pb-12 lg:pt-40">
          <div className="order-1 px-1 text-center text-[var(--brand-ink)] sm:px-2 lg:pr-4 lg:text-left">
            <div className="mx-auto max-w-[42rem] lg:mx-0 lg:pt-1">
            <h1 className="font-lora relative z-20 mb-4 block max-w-[17ch] !text-[clamp(2.9rem,4.25vw,3.5rem)] font-semibold leading-[0.98] text-[#123F3D] sm:mb-5">
              {language === 'zh' ? (
                'AI驱动的产品碳足迹平台'
              ) : (
                <>
                  <span className="block">AI-Powered</span>
                  <span className="block">Product Carbon</span>
                  <span className="block">Footprint Platform</span>
                </>
              )}
            </h1>
            <p className="mb-5 max-w-[35rem] whitespace-pre-line text-[17px] font-medium leading-[1.65] text-[var(--brand-ink)]/88 sm:text-[18px] lg:mb-8 lg:mx-0">
              {language === 'zh'
                ? '把零散的 BOM 与供应商数据转化为可核验的碳报告，并用内置 AI agent 支持建模、因子匹配、证据追踪与审阅流程。'
                : 'Turn fragmented BOM and supplier data into verification-ready carbon reports with built-in AI agents for modeling, factor matching, evidence tracking, and review workflows.'}
            </p>
            {/* Mobile: show only short headings */}
            <div className="mb-6 space-y-1.5 text-center text-sm font-light opacity-90 sm:text-base md:hidden">
              {t.hero.description.split('\n').map((line, idx) => (
                <div key={idx} className="inline-flex items-center justify-center gap-2 w-full">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-accent-strong)]"></span>
                  <span className="block">{line.split(' - ')[0]}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a 
                href="#contact"
                className="inline-flex min-w-0 items-center gap-2 whitespace-nowrap rounded-[0.55rem] bg-[var(--brand-accent-strong)] px-4 py-3 text-center text-[13px] font-semibold leading-none text-white shadow-[0_18px_32px_rgba(18,63,61,0.16)] transition duration-300 hover:bg-[color:rgba(18,63,61,0.88)] min-[420px]:px-5 min-[420px]:text-sm sm:px-7 sm:text-[15px] lg:px-8 lg:text-base"
                data-cta="hero-get-started"
                data-section="home-hero"
              >
                {t.hero.getStarted}
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-ink)] transition hover:text-[var(--brand-accent-strong)] sm:text-base"
              >
                {language === 'zh' ? '查看方案' : 'See Pricing'}
                <span aria-hidden>+</span>
              </a>
            </div>
            <Link
              href="/consultant-partner-program"
              className="group cs-pattern-paper mt-5 block max-w-[34rem] rounded-[0.55rem] border border-[rgba(18,63,61,0.14)] px-4 py-3 text-left shadow-[0_8px_18px_rgba(18,63,61,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_24px_rgba(18,63,61,0.08)]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-accent-strong)]">
                {consultantProgramEntry.label}
              </p>
              <h3 className="mt-1.5 text-[1rem] font-semibold leading-tight text-[var(--brand-ink)] sm:text-[1.08rem]">
                {consultantProgramEntry.title}
              </h3>
              <div className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--brand-accent-strong)] transition group-hover:text-[var(--brand-ink)]">
                <span>{consultantProgramEntry.cta}</span>
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </Link>
            </div>
          </div>
          <motion.div
            className="order-2 relative mx-auto w-full max-w-[860px]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="cs-glass-panel relative flex min-h-[620px] flex-col overflow-hidden sm:aspect-[16/11.6] sm:min-h-[560px] lg:min-h-[600px]">
              <div className="shrink-0 border-b border-[rgba(18,63,61,0.1)] bg-[#fcfbf8] px-3 py-2">
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-[var(--brand-muted)]">
                  <span className="text-[var(--brand-ink)]">{language === 'zh' ? '核算任务' : 'Accounting Task'}</span>
                  <span className="rounded-[0.4rem] bg-[#0f6a63] px-2.5 py-1 text-white">{language === 'zh' ? 'Data Processing' : 'Data Processing'}</span>
                  <span>{language === 'zh' ? 'Progress 62%' : 'Progress 62%'}</span>
                  <span className="rounded-[0.4rem] border border-[rgba(18,63,61,0.12)] px-2.5 py-1 text-[var(--brand-accent-strong)]">ISO 14067</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {heroStages.map((stage, index) => (
                    <span
                      key={stage}
                      className={`rounded-[0.4rem] border px-2 py-0.5 text-[10px] font-semibold ${
                        index === 2
                          ? 'border-[rgba(18,63,61,0.18)] bg-[var(--brand-bg-soft)] text-[var(--brand-ink)]'
                          : 'border-[rgba(18,63,61,0.08)] bg-white text-[var(--brand-muted)]'
                      }`}
                    >
                      {stage}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid min-h-0 flex-1 gap-0 grid-cols-[0.9fr_1.1fr] items-stretch">
                <div className="flex h-full flex-col border-r border-[rgba(18,63,61,0.1)] bg-white px-3 py-3">
                  <div className="mb-2 flex min-h-[42px] items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-accent-strong)]">
                        {language === 'zh' ? 'AI Copilot' : 'AI Copilot'}
                      </p>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-muted)]">
                        {language === 'zh' ? 'Task queue' : 'Task queue'}
                      </p>
                    </div>
                    <motion.div
                      className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-[rgba(15,106,99,0.16)] bg-[rgba(214,232,223,0.55)] px-2 py-1 text-[9px] font-semibold text-[#0f6a63]"
                      animate={{ opacity: [0.72, 1, 0.72] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0f6a63]" />
                      {language === 'zh' ? 'AI active' : 'AI active'}
                    </motion.div>
                  </div>
                  <div className="mb-2 grid grid-cols-3 gap-2">
                    {heroCopilotMeta.map((item) => (
                      <div key={item.label} className="rounded-[0.4rem] border border-[rgba(18,63,61,0.08)] bg-[#fbfaf7] px-2 py-1.5">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-muted)]">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-[13px] font-semibold text-[var(--brand-ink)]">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {heroTaskFeed.slice(0, 4).map((item, index) => (
                      <motion.div
                        key={item}
                        className="rounded-[0.4rem] border border-[rgba(18,63,61,0.08)] bg-[#fcfbf8] px-2.5 py-2"
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.38, delay: index * 0.08 }}
                      >
                        <div className="flex items-center justify-between gap-4 text-[11px] font-semibold text-[var(--brand-muted)]">
                          <span>{language === 'zh' ? `Task ${index + 1}` : `Task ${index + 1}`}</span>
                          <motion.span
                            className="text-[#0f6a63]"
                            animate={{ opacity: [0.55, 1, 0.55] }}
                            transition={{ duration: 1.8, delay: index * 0.18, repeat: Infinity, ease: 'easeInOut' }}
                          >
                            {language === 'zh' ? 'AI processing' : 'AI processing'}
                          </motion.span>
                        </div>
                        <p className="mt-1.5 text-[11px] font-semibold leading-4 text-[var(--brand-ink)]">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-auto rounded-[0.5rem] border border-[rgba(18,63,61,0.1)] bg-[#fbfaf7] px-3 py-2 text-[11px] text-[var(--brand-muted)]">
                    <div className="flex items-center justify-between gap-3">
                      <span>{language === 'zh' ? '仅在需要人工确认时介入。' : 'Only brings people in when confirmation is needed.'}</span>
                      <span className="rounded-[0.4rem] bg-[#0f6a63] px-2 py-1 text-[10px] font-semibold text-white">
                        {language === 'zh' ? 'AI active' : 'AI active'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex h-full flex-col bg-[#f7f4ee] px-3 py-3">
                  <div className="cs-pattern-grid flex h-full flex-col rounded-[0.5rem] border border-[rgba(18,63,61,0.12)] p-3 shadow-[0_10px_22px_rgba(18,63,61,0.05)]">
                    <div className="flex min-h-[42px] items-start justify-between gap-4">
                      <div className="pt-[2px]">
                        <h3 className="text-[12px] font-semibold uppercase tracking-[0.04em] text-[var(--brand-ink)]">
                          {heroRightPanel.title}
                        </h3>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5 border-b border-[rgba(18,63,61,0.08)] pb-2">
                      {heroRightPanel.tabs.map((tab, index) => (
                        <span
                          key={tab}
                          className={`rounded-[0.35rem] border px-2 py-0.5 text-[9px] font-semibold ${
                            index === 0
                              ? 'border-[rgba(18,63,61,0.14)] bg-[#f3f0e8] text-[var(--brand-ink)]'
                              : 'border-[rgba(18,63,61,0.08)] bg-white text-[var(--brand-muted)]'
                          }`}
                        >
                          {tab}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 rounded-[0.45rem] bg-[linear-gradient(90deg,rgba(214,232,223,0.75),rgba(255,255,255,0.95))] px-3 py-2.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2f8f8a]">
                        {heroRightPanel.cardTitle}
                      </p>
                      <p className="mt-1.5 text-[14px] font-semibold text-[var(--brand-ink)]">
                        {heroRightPanel.object}
                      </p>
                    </div>
                    <div className="mt-2 overflow-hidden rounded-[0.45rem] border border-[rgba(18,63,61,0.08)]">
                      <div className="grid grid-cols-[1.5fr_0.7fr_0.8fr] border-b border-[rgba(18,63,61,0.08)] bg-[#fcfbf8] px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-[var(--brand-muted)]">
                        <span>{language === 'zh' ? 'Process signal' : 'Process signal'}</span>
                        <span>{language === 'zh' ? 'Value' : 'Value'}</span>
                        <span>{language === 'zh' ? 'Status' : 'Status'}</span>
                      </div>
                      {heroWorkspaceRows.slice(0, 3).map((row, index) => (
                        <motion.div
                          key={row.label}
                          className="grid grid-cols-[1.5fr_0.7fr_0.8fr] items-center border-b border-[rgba(18,63,61,0.06)] px-2.5 py-1.5 text-[10px] text-[var(--brand-ink)] last:border-b-0"
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.36, delay: 0.22 + index * 0.08 }}
                        >
                          <span className="font-medium">{row.label}</span>
                          <span className="font-semibold">{row.value}</span>
                          <span className={`inline-flex w-fit rounded-[0.35rem] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] ${
                            row.status === 'Review'
                              ? 'bg-[rgba(255,233,190,0.8)] text-[#8b5b00]'
                              : 'bg-[rgba(214,232,223,0.8)] text-[#0f6a63]'
                          }`}>
                            {row.status}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {heroRightPanel.fields.map((field) => (
                        <div key={field.label} className="rounded-[0.45rem] border border-[rgba(18,63,61,0.1)] bg-[#fcfbf8] px-2.5 py-2">
                          <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-muted)]">
                            {field.label}
                          </p>
                          <div className="mt-1.5 rounded-[0.4rem] border border-[rgba(18,63,61,0.08)] bg-white px-2 py-1.5 text-[10px] font-medium text-[var(--brand-ink)]">
                            {field.value}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto rounded-[0.45rem] border border-[rgba(18,63,61,0.08)] bg-[#fcfbf8] p-2.5">
                      <div className="mb-1.5 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.1em] text-[var(--brand-muted)]">
                        <span>{language === 'zh' ? 'Process status' : 'Process status'}</span>
                        <span>{language === 'zh' ? '4/5 passed' : '4/5 passed'}</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-[rgba(18,63,61,0.08)]">
                        <motion.div
                          className="h-full bg-[#0f6a63]"
                          initial={{ width: 0 }}
                          whileInView={{ width: '80%' }}
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{ duration: 0.9, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f4ec] py-12 sm:py-14 lg:py-16">
        <div className={`relative ${wideSectionClass}`}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="cs-section-eyebrow">
              {platformCoverage.eyebrow}
            </p>
            <h2 className="mt-3 font-lora text-balance text-[2.2rem] font-bold text-[var(--brand-ink)] sm:text-[2.45rem]">
              {platformCoverage.title}
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {platformCoverage.cards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.42, delay: index * 0.06 }}
                className="cs-glass-panel p-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-accent-strong)]">
                  {card.label}
                </p>
                <h3 className="mt-3 text-[1.2rem] font-semibold leading-tight text-[var(--brand-ink)]">
                  {card.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-[0.4rem] border border-[var(--brand-border)] bg-[var(--brand-bg)] px-2.5 py-1 text-[11px] font-semibold text-[var(--brand-accent-strong)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Product Value Section */}
      <section id="products" className="relative overflow-hidden bg-[#faf8f3] py-12 lg:py-16" data-theme="products" data-section="product-accounting-workflow" data-category="product">
        <div className={`relative ${wideSectionClass}`}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="cs-section-eyebrow">
              {language === 'zh' ? 'AI-led workflow' : 'AI-led workflow'}
            </p>
            <h2 className="mt-3 font-lora text-balance text-[2.2rem] font-bold text-[var(--brand-ink)] sm:text-[2.45rem]">
              {productSection.sectionTitle}
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {productSection.capabilities.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.42, delay: index * 0.06 }}
                className="cs-glass-panel p-5"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.55rem] text-[12px] font-semibold ${
                    index % 2 === 0
                      ? 'bg-[rgba(15,75,73,0.08)] text-[var(--brand-accent-strong)]'
                      : 'bg-[rgba(125,167,138,0.12)] text-[#3f6c56]'
                  }`}>
                    {item.number}
                  </div>
                  <div>
                    <h4 className="text-[1.2rem] font-semibold leading-[1.35] text-[var(--brand-ink)]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-[15px] leading-7 text-[var(--brand-muted)] sm:text-[16px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-[0.55rem] bg-[var(--brand-accent-strong)] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[color:rgba(18,63,61,0.88)] sm:text-base"
            >
              {productSection.cta}
            </a>
          </div>
        </div>
      </section>

      {/* AI Assistants Section */}
      <section id="solutions" className="relative overflow-hidden bg-[#fcfbf8] py-12 sm:py-14 lg:py-16">
        <div className={wideSectionClass}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="cs-section-eyebrow">
              {language === 'zh' ? '解决方案导航' : 'Solution Paths'}
            </p>
            <h2 className="mt-3 font-lora text-balance text-[2.2rem] font-bold text-[var(--brand-ink)] sm:text-[2.45rem]">
              {language === 'zh' ? '面向每个团队的产品碳足迹解决方案' : 'Product Carbon Footprint Solutions for Every Team'}
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3 lg:mt-10 lg:gap-5">
            {solutionCards.map((card) => {
              const SolutionIcon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className={`group flex h-full flex-col rounded-[0.55rem] border p-5 shadow-[0_12px_26px_rgba(18,63,61,0.06)] transition duration-300 sm:p-6 ${card.panelClass}`}
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-[0.55rem] ${card.badgeClass}`}>
                      <SolutionIcon className="h-6 w-6" strokeWidth={1.7} />
                    </div>
                    <span className={`rounded-[0.5rem] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${card.badgeClass}`}>
                      {card.label}
                    </span>
                  </div>
                  <h3 className="text-[1.35rem] font-semibold leading-tight text-[var(--brand-ink)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[var(--brand-muted)] sm:text-[16px]">
                    {card.summary}
                  </p>
                  <div className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold sm:text-[15px] ${card.ctaClass}`}>
                    <span>{card.cta}</span>
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-[0.55rem] bg-[var(--brand-accent-strong)] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[color:rgba(18,63,61,0.88)] sm:text-base"
            >
              {language === 'zh' ? '预约演示' : 'Book a demo'}
            </a>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded-[0.55rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] px-7 py-3 text-sm font-semibold text-[var(--brand-ink)] transition hover:bg-[var(--brand-bg-soft)] sm:text-base"
            >
              {language === 'zh' ? '查看资源中心' : 'Visit resource center'}
            </Link>
          </div>
        </div>
      </section>
      {/* Difference Section */}
      <section className="relative overflow-hidden bg-[#f7f4ec] py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1360px] px-4 pb-6 pt-8 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="cs-section-eyebrow">
              {language === 'zh' ? '平台差异' : 'Platform Difference'}
            </p>
            <h2 className="mt-3 font-lora text-balance text-[2.2rem] font-bold text-[var(--brand-ink)] sm:text-[2.45rem]">
              {language === 'zh' ? '为什么 Climate Seal 不同于传统碳核算工具' : 'Why Climate Seal Is Different From Traditional Carbon Accounting Tools'}
            </h2>
          </motion.div>
        </div>
        
        <div className={wideSectionClass}>
          <div className="cs-glass-panel overflow-hidden md:grid md:grid-cols-3">
            {[
              t.sections.difference.cards.flexible,
              t.sections.difference.cards.products,
              t.sections.difference.cards.fastValue,
            ].map((card, index) => (
              <motion.article
                key={card.title}
                className="p-5 md:min-h-[230px] md:border-r md:border-[var(--brand-border)] last:border-r-0"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="inline-flex rounded-[0.45rem] bg-[var(--brand-highlight)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-accent-strong)]">
                  {index === 0 ? (language === 'zh' ? 'Automated' : 'Automated') : index === 1 ? (language === 'zh' ? 'Review' : 'Review') : (language === 'zh' ? 'Delivery' : 'Delivery')}
                </div>
                <h3 className="mt-4 text-[1.35rem] font-semibold leading-tight text-[var(--brand-ink)]">{card.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[var(--brand-muted)]">{card.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f3] py-12 sm:py-14 lg:py-16">
        <div className={wideSectionClass}>
          <KnowHowNumbersSection locale={language === 'zh' ? 'zh' : 'en'} context="home" />
        </div>
      </section>

      {/* Products Section - Stacked Cards */}
      <section id="products" className="relative bg-[var(--brand-bg)] -mt-px" data-theme="products" data-section="what-we-do" data-category="product">
        {/* Scrolling Text removed here to avoid duplication; kept under pricing */}
      </section>




      {/* Impact Section */}
      <section id="value-for-user" className="bg-[#f7f4ec] py-12 sm:py-14 lg:py-16" data-theme="value-for-user" data-section="value-overview" data-category="value">
        <div className={wideSectionClass}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="cs-section-eyebrow">
              {language === 'zh' ? 'Business impact' : 'Business impact'}
            </p>
            <h2 className="mt-3 font-lora text-balance text-[2.2rem] font-bold text-[var(--brand-ink)] sm:text-[2.45rem]">
              {language === 'zh' ? '减少人工碳核算工作并提高报告质量' : 'Reduce Manual Carbon Accounting Work and Improve Report Quality'}
            </h2>
          </motion.div>
          <div className="cs-glass-panel mt-8 overflow-hidden md:grid md:grid-cols-2 xl:grid-cols-4">
            {impactCards.map((card) => (
              <article
                key={card.title}
                className="p-5 md:min-h-[220px] md:border-r md:border-b md:border-[var(--brand-border)] xl:border-b-0 [&:nth-child(2)]:md:border-r-0 [&:nth-child(3)]:md:border-b-0 [&:nth-child(4)]:md:border-b-0 xl:[&:nth-child(2)]:border-r xl:[&:nth-child(3)]:border-r xl:[&:nth-child(4)]:border-r-0"
              >
                <h3 className="text-[1.22rem] font-semibold text-[var(--brand-ink)]">{card.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[var(--brand-muted)]">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f3] py-7 sm:py-8 lg:py-10">
        <div className={wideSectionClass}>
          <div className="mx-auto mb-5 max-w-3xl text-center">
            <div>
              <p className="cs-section-eyebrow">
                {language === 'zh' ? 'Resources' : 'Resources'}
              </p>
              <h2 className="mt-2 font-lora text-balance text-[1.85rem] font-bold text-[var(--brand-ink)] sm:text-[2.1rem]">
                {language === 'zh' ? '围绕产品碳足迹、Scope 3 与合规的资源' : 'Resources on Product Carbon Footprints, Scope 3, and Compliance'}
              </h2>
            </div>
            <Link
              href="/resources"
              className="mt-3 inline-flex w-fit items-center justify-center rounded-[0.5rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] px-4 py-2 text-sm font-semibold text-[var(--brand-ink)] transition hover:bg-[var(--brand-bg-soft)]"
            >
              {language === 'zh' ? '进入资源中心' : 'Visit resource center'}
            </Link>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            {resourceCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group cs-glass-panel grid overflow-hidden transition duration-300 hover:border-[#9eb0a9] hover:shadow-[0_14px_26px_rgba(18,63,61,0.07)] sm:grid-cols-[150px_minmax(0,1fr)] lg:grid-cols-[180px_minmax(0,1fr)]"
              >
                <div className="relative min-h-[128px] overflow-hidden border-b border-[var(--brand-border)] bg-[var(--brand-surface-strong)] sm:min-h-full sm:border-r sm:border-b-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,63,61,0.03),rgba(18,63,61,0.18))]" />
                </div>
                <div className="flex min-h-[168px] flex-col p-4 sm:p-4 lg:min-h-[178px] lg:p-5">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-[0.5rem] bg-[rgba(15,75,73,0.08)] text-[var(--brand-accent-strong)]">
                    <FileText className="h-4 w-4" strokeWidth={1.7} />
                  </div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent-strong)]">
                    {card.label}
                  </p>
                  <h3 className="mt-2 text-[1.05rem] font-semibold leading-tight text-[var(--brand-ink)] sm:text-[1.12rem]">
                    {card.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14px] leading-6 text-[var(--brand-muted)]">
                    {card.description}
                  </p>
                  <div className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-semibold text-[var(--brand-accent-strong)]">
                    <span>{card.cta}</span>
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#f7f4ec] py-12 lg:py-16" data-theme="pricing" data-section="pricing-overview" data-category="conversion">
        <div className={wideSectionClass}>
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
            <p className="cs-section-eyebrow">
              {language === 'zh' ? 'Pricing' : 'Pricing'}
            </p>
            <h2 className="mt-3 font-lora text-balance text-[2.2rem] font-bold text-[var(--brand-ink)] sm:text-[2.45rem]">{homepagePricingSection.title}</h2>
            <Link
              href="/consultant-partner-program"
              className="mt-5 inline-flex items-center justify-center rounded-[0.55rem] border border-[rgba(18,63,61,0.16)] bg-white/62 px-5 py-2.5 text-sm font-semibold text-[var(--brand-accent-strong)] transition hover:border-[var(--brand-accent-strong)] hover:bg-white hover:text-[var(--brand-ink)]"
            >
              {language === 'zh' ? '探索早期合作优惠价格' : 'Explore Early Access Preferential Pricing'}
              <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid w-full gap-5 lg:grid-cols-3">
            {homepagePricingCards.map((plan) => {
              const isDarkPlan = plan.cardClass.includes('cs-card-dark');

              return (
                <article key={plan.title} className={`${plan.cardClass} flex min-h-[410px] flex-col overflow-hidden p-0`}>
                  <div className={`p-6 sm:p-7 ${isDarkPlan ? 'bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]' : 'bg-white/38'}`}>
                    <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-[0.55rem] ${plan.iconClass}`}>
                      <PricingIcon className="h-5 w-5" />
                    </div>
                    <h3 className={`text-[1.55rem] font-semibold leading-tight tracking-[-0.02em] ${plan.titleClass}`}>
                      {plan.title}
                    </h3>
                    <p className={`mt-3 text-[15px] leading-7 sm:text-[16px] ${plan.bodyClass}`}>
                      {plan.description}
                    </p>
                    {plan.price ? (
                      <div className="mt-6">
                        <span className={`text-[2rem] font-semibold tracking-[-0.03em] ${plan.priceClass}`}>{plan.price}</span>
                        {plan.cadence ? <span className={`ml-1 text-sm ${plan.bodyClass}`}>{plan.cadence}</span> : null}
                      </div>
                    ) : (
                      <div className={`mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] ${plan.bodyClass}`}>
                        {language === 'zh' ? 'Pilot pathway' : 'Pilot pathway'}
                      </div>
                    )}
                  </div>
                  <div className={`flex flex-1 flex-col border-t p-5 sm:p-6 ${
                    isDarkPlan
                      ? 'border-white/10 bg-[rgba(255,255,255,0.055)]'
                      : 'border-[rgba(18,63,61,0.08)] bg-[rgba(255,255,255,0.34)]'
                  }`}>
                    <ul className={`flex-1 text-[15px] leading-7 ${isDarkPlan ? 'text-[rgba(255,255,255,0.88)]' : 'text-[var(--brand-muted)]'}`}>
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className={`py-3 first:pt-0 last:pb-0 ${
                            isDarkPlan
                            ? 'border-b border-white/10 text-[rgba(255,255,255,0.88)] last:border-b-0'
                              : 'border-b border-[rgba(18,63,61,0.055)] last:border-b-0'
                          }`}
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className={`mt-6 inline-flex items-center justify-center rounded-[0.55rem] px-5 py-3 text-sm font-semibold transition ${plan.buttonClass}`}
                    >
                      {plan.button}
                    </a>
                    {plan.title === (language === 'zh' ? '专业版' : 'Professional') ? (
                      <Link
                        href="/consultant-partner-program"
                        className={`mt-3 inline-flex items-center justify-center rounded-[0.55rem] px-4 py-2.5 text-center text-sm font-semibold transition ${
                          isDarkPlan
                            ? 'border border-white/14 text-[#d8efe7] hover:bg-white/10'
                            : 'border border-[var(--brand-border)] text-[var(--brand-accent-strong)] hover:bg-white/58'
                        }`}
                      >
                        {language === 'zh' ? '探索早期合作优惠价格' : 'Explore Early Access Preferential Pricing'}
                      </Link>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[var(--brand-bg)] py-10 lg:py-12" data-theme="about" data-section="about-main" data-category="info">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[0.9rem] border border-[rgba(18,63,61,0.16)] bg-[#fbf9f4] shadow-[0_20px_52px_rgba(18,63,61,0.11)] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[240px] overflow-hidden bg-[#053f3e] sm:min-h-[300px] lg:min-h-[360px]">
              <Image
                src="/polar-bears.png"
                alt="Polar bears in water - Climate Seal climate credibility visual"
                fill
                className="object-cover object-[32%_center]"
                quality={100}
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,63,61,0.1),rgba(0,42,41,0.58))]" />
            </div>
            <div className="flex min-h-[280px] items-center px-6 py-8 sm:px-9 lg:min-h-[360px] lg:px-12">
              <div className="max-w-[680px]">
                <div className="mb-5 h-[2px] w-16 bg-[#67c0b3]" />
                <p className="cs-section-eyebrow">
                  {t.sections.aboutUs.title}
                </p>
                <h2 className="mt-4 font-lora text-balance text-[1.95rem] font-semibold leading-[1.08] text-[var(--brand-ink)] sm:text-[2.45rem] lg:text-[2.85rem]">
                  {language === 'zh' ? (
                    <>
                      <span className="block">用更低成本建立可信碳数据，</span>
                      <span className="block">把更多预算留给减碳。</span>
                    </>
                  ) : (
                    <>
                      <span className="block">Build credible carbon data at lower cost.</span>
                      <span className="block">Leave more budget for decarbonization.</span>
                    </>
                  )}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (compact) */}
      <section id="faq" className="bg-[var(--brand-bg-soft)] py-10 sm:py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-5 text-center sm:mb-6">
            <p className="cs-section-eyebrow">
              {language === 'zh' ? '常见问题' : 'FAQs'}
            </p>
            <h2 className="mt-3 font-lora text-balance text-[2.2rem] font-bold text-[var(--brand-ink)] sm:text-[2.45rem]">{language === 'zh' ? '产品碳足迹平台常见问题' : 'Product Carbon Footprint Platform FAQs'}</h2>
          </div>
          <div className="space-y-3">
            {t.faq?.groups
              ?.flatMap((g) => g.items)
              .slice(7, 10)
              .map((item, idx) => (
                <details key={idx} className="group rounded-[0.55rem] border border-[var(--brand-border)] bg-[var(--brand-surface)] p-4 shadow-[0_8px_18px_rgba(18,63,61,0.05)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[var(--brand-ink)]">
                    {item.q}
                    <span className="transition-transform group-open:rotate-180 text-[var(--brand-muted)]">⌄</span>
                  </summary>
                  <div className="mt-2 text-[15px] leading-7 text-[var(--brand-muted)] whitespace-pre-line">
                    {Array.isArray(item.a) ? item.a[0] : item.a}
                  </div>
                </details>
              ))}
          </div>
          <div className="text-center mt-6">
            <a href="/faq" className="inline-block rounded-[0.55rem] bg-[var(--brand-accent-strong)] px-5 py-2.5 font-medium text-white">{language === 'zh' ? '查看更多问题' : 'View all FAQs'}</a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-bg)] py-3 sm:py-5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/referral-program"
            className="group flex flex-col gap-4 border-b border-[var(--brand-border)] py-5 transition hover:border-[var(--brand-accent-strong)] sm:flex-row sm:items-center sm:justify-between sm:gap-8"
          >
            <div className="max-w-3xl">
              <p className="cs-section-eyebrow">
                {language === 'zh' ? 'Referral program' : 'Referral program'}
              </p>
              <h2 className="mt-2 font-lora text-balance text-[1.35rem] font-bold leading-tight text-[var(--brand-ink)] sm:text-[1.65rem]">
                {referralProgram.title}
              </h2>
            </div>
            <span className="inline-flex shrink-0 items-center text-sm font-semibold text-[var(--brand-accent-strong)] transition group-hover:translate-x-1">
              {referralProgram.cta}
              <span className="ml-2" aria-hidden="true">→</span>
            </span>
          </Link>
        </div>
      </section>

      <HomeContactSection />

      {/* Page-level footer removed: using global Footer component instead */}
    </div>
    </>
  );
}
