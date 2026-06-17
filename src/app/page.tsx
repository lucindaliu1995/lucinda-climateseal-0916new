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
      title: language === 'zh' ? '管理企业、供应商与采购相关碳数据' : 'Coordinate corporate sustainability and procurement carbon data',
      panelClass:
        'border-[#c8d8cf] bg-[linear-gradient(165deg,rgba(231,241,235,0.95),rgba(251,248,242,0.98))] hover:border-[#8eaea1] hover:shadow-[0_18px_30px_rgba(86,130,113,0.12)]',
      badgeClass: 'bg-[#dcebe3] text-[#2b615b]',
      ctaClass: 'text-[#2b615b]',
      summary:
        language === 'zh'
          ? '帮助品牌、采购与可持续团队用更简单的问题收集业务数据，并在后台形成可复核的 Scope 3、供应商和产品碳工作流。'
          : 'Help brand, procurement, and sustainability teams collect business data through simple questions while Climate Seal builds review-ready Scope 3, supplier, and product carbon workflows in the background.',
      cta: language === 'zh' ? '查看品牌方案' : 'See brand solution',
    },
    {
      href: '/solutions/supply-chain',
      icon: Factory,
      label: language === 'zh' ? '供应商与出口企业' : 'Suppliers & Exporters',
      title: language === 'zh' ? '向客户交付透明、可信的碳数据' : 'Respond to buyers with transparent carbon outputs',
      panelClass:
        'border-[#ddd0bb] bg-[linear-gradient(165deg,rgba(248,241,228,0.96),rgba(251,248,242,0.98))] hover:border-[#c7b28e] hover:shadow-[0_18px_30px_rgba(170,132,76,0.12)]',
      badgeClass: 'bg-[#efe3ce] text-[#7a5a27]',
      ctaClass: 'text-[#7a5a27]',
      summary:
        language === 'zh'
          ? '帮助工厂、供应商与出口企业准备 PCF、CBAM、EPD 和客户要求的数据包，并保留可直接给买方或核验方查看的审计账本。'
          : 'Help factories, suppliers, and exporters prepare PCF, CBAM, EPD, and buyer-requested data packages with an audit ledger that buyers or verifiers can review directly.',
      cta: language === 'zh' ? '查看供应商方案' : 'See supplier solution',
    },
    {
      href: '/solutions/carbon-expert',
      icon: BadgeCheck,
      label: language === 'zh' ? '碳与 ESG 专业团队' : 'Carbon & ESG Teams',
      title: language === 'zh' ? '提升专业交付能力，不降低复核质量' : 'Deliver more carbon work without lowering review quality',
      panelClass:
        'border-[#cfd8df] bg-[linear-gradient(165deg,rgba(234,240,243,0.96),rgba(251,248,242,0.98))] hover:border-[#9fb1bf] hover:shadow-[0_18px_30px_rgba(92,123,139,0.12)]',
      badgeClass: 'bg-[#dce7ec] text-[#345a6b]',
      ctaClass: 'text-[#345a6b]',
      summary:
        language === 'zh'
          ? '帮助碳顾问、LCA 与 ESG 专业团队减少数据整理、因子匹配和证据归档工作，同时保留方法学判断、人工确认和最终交付控制权。'
          : 'Help consultants and in-house carbon teams reduce data cleanup, factor matching, and evidence organization while keeping control of methodology, human confirmation, and final delivery.',
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
        title: '一套工作台，覆盖产品、企业与项目碳核算',
        description: 'Climate Seal 用专业级 AI 在后台处理建模、因子匹配、证据追踪和复核逻辑，前台只向业务团队提出可以回答的业务问题。',
        cards: [
          {
            label: 'Accounting coverage',
            title: '覆盖多类碳核算场景',
            description: '支持产品碳、企业碳和项目碳，不需要为不同交付场景切换不同工具。',
            items: ['Product Carbon', 'Corporate Carbon', 'Project Carbon'],
          },
          {
            label: 'Standards and regulations',
            title: '对齐标准、方法学与法规要求',
            description: '围绕 ISO 14067、GHG Protocol、PAS 2050、EPD、CBAM 等框架组织核算逻辑、边界、证据与报告输出。',
            items: ['ISO 14067', 'GHG Protocol', 'PAS 2050', 'EPD', 'CBAM'],
          },
          {
            label: 'Review and control',
            title: '保留原始数据、因子选择与审计账本',
            description: 'AI 不会在未经人工确认时修改任何原始数据。因子库可上传，因子可替换，每一步都进入审计账本。',
            items: ['Original data kept', 'Factor control', 'Audit ledger'],
          },
        ],
      }
    : {
        eyebrow: 'Platform coverage',
        title: 'One Workspace for Product, Corporate, and Project Carbon Accounting',
        description: 'Turn fragmented BOM and supplier data into verification-ready carbon reports with built-in AI agents for automated modeling, factor matching, evidence tracking, and review workflows.',
        cards: [
          {
            label: 'Accounting coverage',
            title: 'Cover multiple carbon accounting scenarios',
            description: 'Support product carbon, corporate carbon, and project carbon work without switching between disconnected tools.',
            items: ['Product Carbon', 'Corporate Carbon', 'Project Carbon'],
          },
          {
            label: 'Standards and regulations',
            title: 'Deliver around mainstream methods and compliance frameworks',
            description: 'Structure boundaries, evidence, calculations, and outputs around ISO 14067, GHG Protocol, PAS 2050, EPD, CBAM, and more.',
            items: ['ISO 14067', 'GHG Protocol', 'PAS 2050', 'EPD', 'CBAM'],
          },
          {
            label: 'Review and control',
            title: 'Keep source data, factor choices, and audit trails under control',
            description: 'AI never modifies original data without human confirmation. Upload your own database, change factors when needed, and keep every step in the audit ledger.',
            items: ['Original data kept', 'Factor control', 'Audit ledger'],
          },
        ],
      };
  const impactCards = language === 'zh'
    ? [
        {
          title: '让业务团队也能参与',
          description: '界面提出业务问题，而不是把用户推入复杂建模参数；专业核算逻辑由 AI 在后台推进。',
        },
        {
          title: '减少重复人工工作',
          description: '减少手工整理数据、查找因子、归档证据、追踪版本和反复确认的工作量。',
        },
        {
          title: '保留专业判断与控制',
          description: '用户可以上传自己的因子库，也可以在已有选择时更换因子；AI 不会未经确认修改原始数据。',
        },
        {
          title: '完整审计账本',
          description: '每个输入、因子、假设、修改和证据链接都会被记录，便于第三方核验方或买方直接复核。',
        },
      ]
    : [
        {
          title: 'Business teams can participate',
          description: 'The interface asks business questions instead of pushing users into complex modeling settings, while professional accounting logic runs in the background.',
        },
        {
          title: 'Less repetitive manual work',
          description: 'Reduce manual data cleanup, factor lookup, evidence filing, version tracking, and repeated follow-up.',
        },
        {
          title: 'Professional judgment stays in control',
          description: 'Upload your own factor database or change factors when your team already has approved choices. AI never modifies source data without confirmation.',
        },
        {
          title: 'Complete audit ledger',
          description: 'Every input, factor, assumption, edit, and evidence link is logged so third-party verifiers or buyers can review the workflow directly.',
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
        title: '从适合你碳核算需求的工作流开始',
        subtitle: '从一次试用报告开始，或按月使用专业工作流；更复杂的产品、企业、供应链与项目碳工作可与团队定制。',
      }
    : {
        title: 'Start with the right workflow for your carbon accounting needs',
        subtitle: 'Start with a simple report trial, move into a professional monthly workflow, or talk with us about larger product, corporate, supply chain, and project carbon programs.',
      };
  const homepagePricingCards = [
    {
      title: language === 'zh' ? '免费开始' : 'Free Start',
      description: language === 'zh'
        ? '适合先用 1 份报告试用 Climate Seal，判断数据准备度、交付路径和适用场景。'
        : 'For teams that want to try Climate Seal with one simple carbon accounting workflow before committing.',
      price: language === 'zh' ? '有限报告点数' : 'Limited report credits',
      cadence: '',
      features: language === 'zh'
        ? [
            '包含有限点数，可完成一个简单碳核算工作流',
            '适合测试数据准备度、报告结构和现有碳核算流程适配方式',
            '所有试用都需要先与团队沟通',
          ]
        : [
            'Includes a limited amount of credits to complete one simple carbon accounting workflow.',
            'Best for testing data readiness, report structure, and how Climate Seal fits into your current carbon accounting process.',
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
        ? '适合需要持续使用 AI 工作流，定期生成产品碳、企业碳或项目碳交付材料的个人或小团队。'
        : 'For consultants, experts, and small teams delivering recurring product, corporate, or project carbon work with AI.',
      price: language === 'zh' ? '$299 起' : 'from $299',
      cadence: language === 'zh' ? '/月 /账户' : '/Month /Account',
      features: language === 'zh'
        ? [
            '访问完整 Climate Seal 核算工作流，支持多种法规、标准和方法学',
            '价格基于 token / credit 使用量，可按实际项目量扩展报告交付',
            '适合希望提升交付能力、减少人工负担，同时保留专业判断的团队',
          ]
        : [
            'Access the full Climate Seal accounting workflow, with support for multiple regulations, standards, and methodologies.',
            'Pricing is based on token / credit usage, so teams can scale report delivery according to actual project volume.',
            'Best for professionals who want to increase delivery capacity without losing control of expert judgment.',
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
        ? '适合多团队、多产品线、供应商或项目规模协同，需要长期运营机制的企业。'
        : 'For organizations managing carbon data across products, suppliers, business units, projects, or compliance programs.',
      price: language === 'zh' ? '定制' : 'Custom',
      cadence: '',
      features: language === 'zh'
        ? [
            '面向供应商管理、内部数据治理、多产品和多项目报告，以及跨团队复核',
            '包含供应商数据收集、自定义因子库、审批控制、审计账本和可复用数据模型',
            '适合需要长期碳合规操作系统，而不只是单份报告的企业',
          ]
        : [
            'Built for supplier management, internal data governance, multi-product and multi-project reporting, and cross-team review.',
            'Includes supplier data collection, custom factor databases, approval controls, audit ledgers, and reusable data models.',
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
          title: '围绕产品、企业与项目碳核算持续学习',
          description: '查看边界定义、因子使用、供应链协同、审计账本与合规交付相关的文章和白皮书。',
          cta: '进入资源中心',
          image: '/images/articles/Product-Carbon-Footprint.jpg',
        },
        {
          href: '/resources/whitepapers/ai-carbon-operations-playbook',
          label: '精选白皮书',
          title: '获取 AI Carbon Operations Playbook',
          description: '了解团队如何用 AI 改善数据收集、因子匹配、审计追踪与碳交付节奏。',
          cta: '查看白皮书',
          image: '/images/whitepapers/ai-carbon-operations-playbook-cover.jpg',
        },
      ]
    : [
        {
          href: '/resources',
          label: 'Methods and compliance',
          title: 'Keep learning across product, corporate, and project carbon accounting',
          description: 'Explore articles and whitepapers on boundaries, factor usage, supplier engagement, audit ledgers, and compliance-ready delivery.',
          cta: 'Visit the resource center',
          image: '/images/articles/Product-Carbon-Footprint.jpg',
        },
        {
          href: '/resources/whitepapers/ai-carbon-operations-playbook',
          label: 'Featured whitepaper',
          title: 'Read the AI Carbon Operations Playbook',
          description: 'See how teams can use AI to improve data collection, factor matching, audit trails, and carbon delivery workflows.',
          cta: 'View whitepaper',
          image: '/images/whitepapers/ai-carbon-operations-playbook-cover.jpg',
        },
      ];
  const heroStages = language === 'zh'
    ? ['目标与边界', '原始数据', 'AI 建模', '透明追溯', '报告输出']
    : ['Targets & Scope', 'Raw Data', 'AI Modeling', 'Traceability', 'Report Output'];
  const heroTaskFeed = language === 'zh'
    ? [
        '识别产品、企业与项目核算边界',
        '解析 BOM、供应商与运营数据',
        '保留因子选择与假设依据',
        '整理透明、可复核的交付包',
      ]
    : [
        'Identify product, corporate, and project boundaries',
        'Parse BOM, supplier, and operating data',
        'Preserve factor choices and assumptions',
        'Package transparent, review-ready outputs',
      ];
  const heroCopilotMeta = language === 'zh'
    ? [
        { label: 'Workflows', value: '03' },
        { label: 'Standards', value: '02+' },
        { label: 'Risk flags', value: '07' },
      ]
    : [
        { label: 'Workflows', value: '03' },
        { label: 'Standards', value: '02+' },
        { label: 'Risk flags', value: '07' },
      ];
  const heroRightPanel = language === 'zh'
    ? {
        title: 'Transparent Carbon Accounting Workspace',
        cardTitle: 'Flexible accounting scope',
        object: 'Product, corporate, and project carbon data',
        formTitle: 'Standards, Scope & Evidence',
        fields: [
          { label: 'Product Carbon', value: 'PCF / LCA' },
          { label: 'Corporate Carbon', value: 'Scope 1/2/3' },
          { label: 'Project Carbon', value: 'Boundary set' },
          { label: 'Evidence Trail', value: 'Traceable' },
        ],
        tabs: ['Product Carbon', 'Corporate Carbon', 'Project Carbon', 'Audit Trail'],
      }
    : {
        title: 'Transparent Carbon Accounting Workspace',
        cardTitle: 'Flexible accounting scope',
        object: 'Product, corporate, and project carbon data',
        formTitle: 'Standards, Scope & Evidence',
        fields: [
          { label: 'Product Carbon', value: 'PCF / LCA' },
          { label: 'Corporate Carbon', value: 'Scope 1/2/3' },
          { label: 'Project Carbon', value: 'Boundary set' },
          { label: 'Evidence Trail', value: 'Traceable' },
        ],
        tabs: ['Product Carbon', 'Corporate Carbon', 'Project Carbon', 'Audit Trail'],
      };
  const heroWorkspaceRows = language === 'zh'
    ? [
        { label: 'Product datasets mapped', value: '19', status: 'Parsed' },
        { label: 'Corporate scopes aligned', value: '3', status: 'Ready' },
        { label: 'Assumptions needing review', value: '7', status: 'Review' },
      ]
    : [
        { label: 'Product datasets mapped', value: '19', status: 'Parsed' },
        { label: 'Corporate scopes aligned', value: '3', status: 'Ready' },
        { label: 'Assumptions needing review', value: '7', status: 'Review' },
      ];

  const productSection = language === 'zh'
    ? {
        title: '回答业务问题，让 AI 完成专业碳核算重活',
        subtitle:
          '上传产品、供应商、运营或项目相关文件后，Climate Seal AI 会用专业算法解析数据、建立核算逻辑、从现有数据库中匹配最合适的因子，并标记缺口与风险点。用户看到的是业务问题，而不是复杂建模界面。',
        summaryTitle: '为什么企业选择 Climate Seal',
        summaryItems: [
          '从业务文件和业务问题开始，而不是从空白模型和手工整理开始',
          'AI 用数据库和专业算法完成因子匹配、边界判断和缺口识别',
          '团队可上传自己的因子库，也可以在已有选择时更换因子',
          'AI 不会未经人工确认修改任何原始数据，所有动作进入审计账本',
        ],
        cta: '立即免费开始',
        capabilitiesTitle: '核心能力',
      capabilities: [
          {
            number: '01',
            title: '业务问题驱动的数据收集',
            description:
              '把复杂核算需求转化为业务团队可以回答的问题，并把文件、表格和补充说明整理成可核算输入。',
          },
          {
            number: '02',
            title: '专业算法匹配最合适因子',
            description:
              '基于产品、材料、工艺、地区、边界和标准要求，从现有数据库中找到最合适的排放因子，并保留依据。',
          },
          {
            number: '03',
            title: '灵活因子库与人工确认',
            description:
              '支持用户上传自己的数据库，也支持在已有企业或客户指定因子时更换因子；原始数据不会被 AI 自动覆盖。',
          },
          {
            number: '04',
            title: '完整审计账本与可复核交付',
            description:
              '每个输入、假设、因子、修改和证据链接都会被记录，便于第三方核验方或买方直接复核。',
          },
        ],
      }
    : {
        title: 'Answer business questions. Let AI do the professional carbon accounting work.',
        subtitle:
          'Upload product, supplier, operating, or project files, and Climate Seal AI parses the data, builds the accounting logic, uses professional algorithms to match the best available emission factors from existing databases, and flags gaps or risks. Users answer business questions, not complex modeling prompts.',
        summaryTitle: 'Why teams choose Climate Seal',
        summaryItems: [
          'Start from business files and business questions instead of blank models and manual cleanup',
          'Use database-backed algorithms for factor matching, boundary logic, and gap detection',
          'Upload your own factor database or change factors when your team has approved choices',
          'AI never modifies original data without human confirmation, and every action is logged',
        ],
        cta: 'Start Free Today',
        capabilitiesTitle: 'Core capabilities',
        capabilities: [
          {
            number: '01',
            title: 'Business-question data collection',
            description:
              'Translate technical accounting requirements into business questions and organize files, spreadsheets, and clarifications into usable carbon accounting inputs.',
          },
          {
            number: '02',
            title: 'Algorithmic best-match factor selection',
            description:
              'Use product, material, process, geography, boundary, and standards context to find the best matching emission factor from the available database, with rationale saved for review.',
          },
          {
            number: '03',
            title: 'Flexible factor databases and human confirmation',
            description:
              'Upload your own database or change factors when your team already has approved choices. AI never overwrites original data without human confirmation.',
          },
          {
            number: '04',
            title: 'Complete audit ledger and review-ready delivery',
            description:
              'Log every input, assumption, factor, edit, and evidence link so third-party verifiers or buyers can review the workflow directly.',
          },
      ],
      sectionTitle: 'Turn Business Inputs Into Transparent, Review-Ready Carbon Accounting',
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
            <h1
              aria-label={language === 'zh' ? '可信碳核算的 AI 工作台' : 'The AI Workspace for Credible Carbon Accounting'}
              className="font-lora relative z-20 mb-4 block max-w-[24ch] !text-[clamp(2.9rem,4.25vw,3.5rem)] font-semibold leading-[0.98] text-[#123F3D] sm:mb-5"
            >
              {language === 'zh' ? (
                <>
                  <span className="block">可信碳核算</span>
                  <span className="block">AI 工作台</span>
                </>
              ) : (
                <>
                  <span className="block">AI Carbon</span>
                  <span className="block">Accounting</span>
                  <span className="block">Workspace</span>
                </>
              )}
            </h1>
            <p className="mb-5 max-w-[35rem] whitespace-pre-line text-[17px] font-medium leading-[1.65] text-[var(--brand-ink)]/88 sm:text-[18px] lg:mb-8 lg:mx-0">
              {language === 'zh'
                ? 'Climate Seal 把零散的产品、企业与项目碳数据转化为可信、透明、可复核的核算工作流。AI 在后台处理专业建模、因子匹配、证据追踪与审阅逻辑，前台只向团队提出业务问题。'
                : 'Turn fragmented BOM and supplier data into verification-ready carbon reports with built-in AI agents for automated modeling, factor matching, evidence tracking, and review workflows.'}
            </p>
            <div className="mb-5 flex flex-wrap justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-accent-strong)] lg:mb-7 lg:justify-start">
              {(language === 'zh'
                ? ['Product Carbon', 'Corporate Carbon', 'Project Carbon', 'Transparent by design']
                : ['Product Carbon', 'Corporate Carbon', 'Project Carbon', 'Transparent by design']
              ).map((item) => (
                <span
                  key={item}
                  className="rounded-[0.45rem] border border-[rgba(18,63,61,0.14)] bg-white/58 px-2.5 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
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
                  <span className="text-[var(--brand-ink)]">{language === 'zh' ? '核算工作台' : 'Accounting Workspace'}</span>
                  <span className="rounded-[0.4rem] bg-[#0f6a63] px-2.5 py-1 text-white">{language === 'zh' ? 'Traceability Build' : 'Traceability Build'}</span>
                  <span>{language === 'zh' ? 'Confidence 82%' : 'Confidence 82%'}</span>
                  <span className="rounded-[0.4rem] border border-[rgba(18,63,61,0.12)] px-2.5 py-1 text-[var(--brand-accent-strong)]">GHG Protocol · ISO 14067</span>
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
              {language === 'zh' ? '面向三类团队的碳核算工作流' : 'Carbon Accounting Workflows for Three Core Teams'}
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
              {language === 'zh' ? '为什么 Climate Seal 不只是传统碳核算工具' : 'Why Climate Seal Is More Than a Traditional Carbon Accounting Tool'}
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
                  {index === 0 ? (language === 'zh' ? 'Flexible' : 'Flexible') : index === 1 ? (language === 'zh' ? 'Controlled' : 'Controlled') : (language === 'zh' ? 'Traceable' : 'Traceable')}
                </div>
                <h3 className="mt-4 text-[1.35rem] font-semibold leading-tight text-[var(--brand-ink)]">
                  {language === 'zh'
                    ? ['灵活因子库与工作流', 'AI 不会擅自改动原始数据', '完整审计账本'][index]
                    : ['Flexible factor databases and workflows', 'AI never changes source data alone', 'Complete audit ledger'][index]}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[var(--brand-muted)]">
                  {language === 'zh'
                    ? [
                        '使用 Climate Seal 数据库、上传你自己的因子库，或在已有客户/企业指定因子时更换选择。',
                        'AI 可以整理、匹配、检查和生成计算逻辑，但不会在没有人工确认时覆盖任何原始数据。',
                        '每个输入、因子、假设、证据和修改都会被记录，便于第三方核验方或买方直接复核。',
                      ][index]
                    : [
                        'Use the Climate Seal database, upload your own factor database, or change factor choices when buyers or internal teams already have approved options.',
                        'AI can organize, match, check, and build calculation logic, but it never overwrites original data without human confirmation.',
                        'Every input, factor, assumption, evidence file, and edit is logged so third-party verifiers or buyers can review the workflow directly.',
                      ][index]}
                </p>
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
              {language === 'zh' ? '让专业碳核算更快、更透明、更容易协作' : 'Make Professional Carbon Accounting Faster, More Transparent, and Easier to Collaborate On'}
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
                {language === 'zh' ? '围绕产品、企业、项目碳核算与合规的资源' : 'Resources on Product, Corporate, Project Carbon Accounting, and Compliance'}
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
            <h2 className="mt-3 font-lora text-balance text-[2.2rem] font-bold text-[var(--brand-ink)] sm:text-[2.45rem]">{language === 'zh' ? 'AI 碳核算工作台常见问题' : 'AI Carbon Accounting Workspace FAQs'}</h2>
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
