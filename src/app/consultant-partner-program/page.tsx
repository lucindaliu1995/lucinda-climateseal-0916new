import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { headers } from 'next/headers';
import HomeContactSection from '@/components/HomeContactSection';
import KnowHowNumbersSection from '@/components/KnowHowNumbersSection';
import { buildLanguageAlternates, isChineseLanguage, resolveLanguage } from '@/lib/language';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://climate-seal.com';

const content = {
  en: {
    metaTitle: 'Carbon Consultant Partner Program | Climate Seal',
    title: 'Consultant Partner Program',
    description:
      'Join the Climate Seal Consultant Partner Program and use AI to deliver PCF, CCF, Scope 3, and EPD draft workflows faster with traceable calculations and verification-ready materials.',
    eyebrow: 'Consultant Partner Program',
    heroTitle: 'Deliver More Carbon Consulting Projects With AI',
    heroBody:
      'Use Climate Seal as your AI production layer for PCF, CCF, Scope 3, and EPD draft work, while you keep scoping, judgment, review, and client delivery.',
    cohortLabel: 'Founding cohort',
    cohortValue: '100 consultants',
    joinedLabel: 'Already joined',
    joinedValue: '10',
    heroPrimary: 'Apply for partner access',
    heroSecondary: 'See how it works',
    proofStrip: [
      'PCF, CCF, Scope 3, and EPD draft workflows',
      'Traceable calculations',
      'Evidence-chain support',
      'Consultant-led final review',
    ],
    whoForEyebrow: 'Who it is for',
    whoForTitle: 'Who the Carbon Consultant Partner Program Is For',
    whoForBody:
      'Built for professionals and small advisory teams that already deliver carbon work and want to increase project capacity without lowering review quality.',
    whoForAudiences: [
      'Carbon consultants delivering PCF, CCF, Scope 3, or supplier data projects',
      'ESG advisors and LCA specialists preparing report drafts and evidence packs',
      'Boutique consulting firms that need repeatable delivery workflows',
      'Independent experts who want AI support while keeping client judgment and delivery',
    ],
    relatedLinks: [
      { href: '/products', label: 'Product', description: 'See the Climate Seal product workflow' },
      { href: '/solutions/carbon-expert', label: 'For Carbon Experts', description: 'Explore the consultant solution page' },
      { href: '/resources', label: 'Resources', description: 'Read guides on PCF, Scope 3, and compliance' },
      { href: '/pricing', label: 'Pricing', description: 'Compare workflow and delivery options' },
    ],
    problemEyebrow: 'Why this matters',
    problemTitle: 'Carbon projects are growing. Delivery capacity is the bottleneck.',
    problems: [
      {
        title: 'Manual data cleanup takes too long',
        description:
          'Client files arrive messy, incomplete, and inconsistent. Consultants spend hours restructuring data before real analysis begins.',
      },
      {
        title: 'Calculation tracking is repetitive',
        description:
          'Much of the work is not strategic judgment. It is organizing evidence, matching factors, documenting assumptions, and keeping an audit trail.',
      },
      {
        title: 'Clients expect credible deliverables',
        description:
          'A number alone is not enough. Clients need report drafts, source references, evidence chains, and materials that can survive review.',
      },
    ],
    expertSystemEyebrow: 'Expert delivery system',
    expertSystemTitle: 'A delivery system built for experts',
    expertSystemBody:
      'Climate Seal gives consultants a structured AI production layer for the repeatable work behind PCF, CCF, Scope 3, and EPD draft delivery, while expert judgment stays with the consultant.',
    expertSystemCards: [
      {
        title: 'Map the accounting method',
        description:
          'Set the project boundary, standards, functional unit, and client-specific assumptions before calculation work begins.',
        media: '/videos/video1-card.mp4',
        tag: 'Methodology',
      },
      {
        title: 'Clean client files faster',
        description:
          'Turn messy BOMs, supplier data, and source documents into structured inputs that are easier to review and reuse.',
        media: '/videos/video2-card.mp4',
        tag: 'Data intake',
      },
      {
        title: 'Build traceable calculations',
        description:
          'Match factors, preserve source references, and keep calculation logic visible for consultant review and client questions.',
        media: '/videos/video3-card.mp4',
        tag: 'Calculation',
      },
      {
        title: 'Package review-ready outputs',
        description:
          'Prepare report drafts, evidence chains, risk flags, and supporting material for a more credible handoff.',
        media: '/videos/video4-card.mp4',
        tag: 'Delivery',
      },
    ],
    expertSystemCta: 'Explore the carbon expert solution',
    programEyebrow: 'Program mechanics',
    programTitle: 'Turn Climate Seal into your delivery advantage',
    programBody:
      'Members get early partner pricing, access to real report workflows, referral rewards, and a certification pathway that can unlock future client leads and regional collaboration opportunities.',
    programBullets: [
      {
        label: 'Cohort',
        title: 'Limited to the first 100 consultants',
        description:
          'Early access for consultants who want to build AI-powered carbon delivery capacity with Climate Seal.',
      },
      {
        label: 'Partner pricing',
        title: 'Early cohort pricing for real client reports',
        accent: 'Preferential pricing for member delivery',
        description:
          'Members receive preferential pricing to deliver actual client projects using Climate Seal’s AI production workflow.',
      },
      {
        label: 'Referral & network growth',
        title: 'Earn rewards for inviting qualified consultants',
        accent: '$100 reward for each approved active member',
        description:
          'Refer qualified consultants to join the cohort and receive a $100 reward for each approved consultant who becomes an active member.',
        href: '/referral-program',
        cta: 'See the referral program',
      },
      {
        label: 'Certification & opportunity access',
        title: 'Path to Certified Consultant status and regional leads',
        accent: 'Future client leads, regional opportunities, and joint delivery projects',
        description:
          'Consultants who complete real projects and pass Climate Seal’s internal delivery review can become Certified Consultants and receive priority access to future client leads, regional opportunities, and joint delivery projects.',
      },
    ],
    splitEyebrow: 'How it works',
    splitTitle: 'AI handles the production layer. You keep the advisory layer.',
    aiHandles: [
      'Client data organization',
      'Emission factor matching',
      'Calculation traceability',
      'PCF / CCF draft generation',
      'Evidence chain preparation',
      'Verification-ready materials',
      'Report pack formatting',
    ],
    consultantOwns: [
      'Client scoping',
      'Data judgment and assumptions',
      'Professional review',
      'Client communication',
      'Final recommendations',
      'Commercial relationship',
      'Project delivery',
    ],
    deliverablesEyebrow: 'Deliverables',
    deliverablesTitle: 'What partner consultants can deliver',
    deliverables: [
      {
        title: 'PCF report drafts',
        description:
          'Structured calculations, assumptions, references, and client-ready report drafts for product carbon footprint projects.',
      },
      {
        title: 'CCF / corporate carbon baselines',
        description:
          'First emissions baselines across operations, purchased goods, energy, logistics, and other categories.',
      },
      {
        title: 'Scope 3 supplier data packs',
        description:
          'Collect, structure, and assess supplier carbon data in workflows that are easier to review and deliver.',
      },
      {
        title: 'EPD draft pack',
        description:
          'Early-stage EPD preparation with product data organization, calculation logic, draft report inputs, and supporting materials.',
      },
      {
        title: 'Verification-ready report and data package',
        description:
          'A complete report and supporting data package for direct third-party verification use, including emissions hotspot summaries, contribution breakdowns, risk flags, and sensitivity analysis for professional review.',
      },
    ],
    pricingEyebrow: 'Pricing',
    pricingTitle: 'Partner pricing for real client delivery',
    pricingCaption: 'For consultants who want recurring delivery capacity, not one-off tool access.',
    pricingCards: [
      {
        title: 'Partner member pricing',
        price: '$199 / report',
        items: [
          '1 report includes up to 1,000 requests',
          'Available inside the consultant partner program',
          'Cashback and Certified Consultant path included',
        ],
      },
      {
        title: 'Non-member report pricing',
        price: '$399 / report',
        items: [
          'For one-off users outside the partner program',
          'Best when you need report delivery without joining the cohort',
        ],
      },
      {
        title: 'Project-based options',
        price: 'From $699',
        items: [
          'EPD Draft Pack from $699 / project',
          'Use when the scope goes beyond a standard PCF or CCF report',
        ],
      },
    ],
    referralEyebrow: 'Referral rewards',
    referralTitle: 'Invite consultants. Earn cashback for the first 12 months.',
    referralBody:
      'Partner consultants can refer other qualified consultants and receive 20% cashback on eligible paid report purchases for the first 12 months. After 5 active paid referrals, cashback can increase to 30%.',
    referralPoints: [
      'Cashback applies to eligible paid report purchases during the first 12 months of an active referred account',
      'Climate Seal reviews referrals for fit and quality',
      'The goal is to grow a working consultant network, not a coupon scheme',
    ],
    certificationEyebrow: 'Certification path',
    certificationTitle: 'Path to Climate Seal Certified Consultant status',
    certificationBody:
      'Designed to recognize consultants who have completed real projects with Climate Seal and passed internal review of delivery quality.',
    certificationSteps: [
      'Join the partner cohort',
      'Complete 3 real client projects using Climate Seal',
      'Submit projects for review',
      'Receive Certified Consultant status',
    ],
    certificationBenefits: [
      'Priority access to future client leads',
      'Joint marketing opportunities',
      'Certified Consultant profile or directory listing',
      'Preferential partner pricing and early workflow access',
    ],
    whyEarlyEyebrow: 'Why join early',
    whyEarlyTitle: 'Why join the first partner cohort',
    whyEarlyPoints: [
      'Lock in early partner pricing before public pricing changes',
      'Shape workflows around real consulting projects',
      'Build report samples and case studies sooner',
      'Increase delivery capacity without hiring more analysts',
      'Gain early access to future partner opportunities',
    ],
    trustEyebrow: 'Built for credible consultant delivery',
    trustTitle: 'Built for credible consultant delivery',
    trustPoints: [
      'Supports PCF, CCF, Scope 3, and EPD preparation workflows',
      'Designed around traceable calculations and evidence chains',
      'Consultant-led review keeps professional judgment in the loop',
      'Outputs are prepared for third-party verification workflows',
    ],
    faqEyebrow: 'FAQ',
    faqTitle: 'Carbon Consultant Partner Program FAQ',
    faqs: [
      {
        q: 'Will Climate Seal replace my consulting work?',
        a: 'No. Climate Seal is designed to support the production layer of carbon consulting, including data organization, factor matching, evidence preparation, and draft report generation. Consultants remain responsible for project scoping, professional judgment, assumptions, client communication, review, and final delivery.',
      },
      {
        q: 'What does one report include?',
        a: 'A standard report includes a PCF or CCF draft report pack with structured calculations, assumptions, source references, evidence support, and review-ready outputs. It includes up to 1,000 requests. Larger scopes, EPD preparation, multi-product work, or unusual data requirements may be priced as project-based work.',
      },
      {
        q: 'How does certification work?',
        a: 'Consultants can apply for Climate Seal Certified Consultant status after completing 3 real client projects through the platform and submitting them for internal delivery-quality review. Approved consultants may become eligible for lead access, joint marketing opportunities, directory visibility, and preferential partner benefits.',
      },
      {
        q: 'How does the referral program work?',
        a: 'Partner consultants can refer qualified consultants to the program. Referral rewards apply only to approved active members and eligible paid activity. Climate Seal reviews each referral for fit and quality so the network grows around credible consultants rather than one-off coupon traffic.',
      },
    ],
    finalTitle: 'Join the first Climate Seal consultant partner cohort',
    finalBody:
      'Use AI to expand delivery capacity, protect your professional judgment, and build a more scalable carbon consulting business.',
    finalPrimary: 'Apply to join',
    finalSecondary: 'Book a 20-minute intro call',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Consultant Partner Program',
  },
  zh: {
    metaTitle: '碳顾问合作计划 | Climate Seal',
    title: '顾问合作计划',
    description:
      '加入 Climate Seal 顾问合作计划，用 AI 更快交付 PCF、CCF、Scope 3 与 EPD Draft 工作流，同时保留顾问的专业判断、客户关系与最终交付权。',
    eyebrow: 'Consultant Partner Program',
    heroTitle: '在不扩充分析团队的情况下，交付更多碳项目。',
    heroBody:
      '把 Climate Seal 当作你的 AI 生产层，用于 PCF、CCF、Scope 3 与 EPD Draft 工作，同时由你继续掌握范围界定、专业判断、复核和客户交付。',
    cohortLabel: '首批席位',
    cohortValue: '100 位顾问',
    joinedLabel: '已加入',
    joinedValue: '10',
    heroPrimary: '申请顾问合作资格',
    heroSecondary: '查看如何运作',
    proofStrip: [
      '覆盖 PCF、CCF、Scope 3 与 EPD Draft 工作流',
      '可追溯计算',
      '证据链支持',
      '顾问主导最终复核',
    ],
    whoForEyebrow: '适合谁',
    whoForTitle: '谁适合加入碳顾问合作计划',
    whoForBody:
      '面向已经在交付碳相关项目、希望提升交付产能但不降低专业复核质量的顾问和小型咨询团队。',
    whoForAudiences: [
      '交付 PCF、CCF、Scope 3 或供应商数据项目的碳顾问',
      '准备报告底稿与证据包的 ESG 顾问和 LCA 专家',
      '需要可复制交付流程的小型咨询公司',
      '希望获得 AI 支持，同时保留客户判断与最终交付权的独立专家',
    ],
    relatedLinks: [
      { href: '/products', label: '产品', description: '查看 Climate Seal 产品工作流' },
      { href: '/solutions/carbon-expert', label: '碳专家方案', description: '了解顾问与专家使用场景' },
      { href: '/resources', label: '资源中心', description: '阅读 PCF、Scope 3 与合规指南' },
      { href: '/pricing', label: '定价', description: '比较不同工作流和交付选项' },
    ],
    problemEyebrow: '为什么值得做',
    problemTitle: '碳项目在增长，但真正卡住交付的是产能。',
    problems: [
      {
        title: '手工整理数据太耗时',
        description:
          '客户文件常常混乱、不完整、口径不一致。顾问在真正分析开始前，就已经花掉大量时间做重组和清洗。',
      },
      {
        title: '计算追踪工作高度重复',
        description:
          '很多工作并不是高价值判断，而是在反复整理证据、查找因子、记录假设和维持审计轨迹。',
      },
      {
        title: '客户要的是可信交付，不只是数字',
        description:
          '只有计算结果远远不够。客户需要报告底稿、来源引用、证据链，以及经得起审阅的材料。',
      },
    ],
    expertSystemEyebrow: '专家交付系统',
    expertSystemTitle: '面向专家的交付系统',
    expertSystemBody:
      'Climate Seal 为顾问提供一套结构化 AI 生产层，处理 PCF、CCF、Scope 3 与 EPD Draft 交付中重复但关键的工作，同时保留顾问的专业判断。',
    expertSystemCards: [
      {
        title: '确定核算方法',
        description:
          '在计算前明确项目边界、适用标准、功能单位和客户特定假设，让后续交付有清晰基础。',
        media: '/videos/video1-card.mp4',
        tag: '方法学',
      },
      {
        title: '更快整理客户文件',
        description:
          '把混乱的 BOM、供应商数据和来源文件转成结构化输入，方便复核、追踪和复用。',
        media: '/videos/video2-card.mp4',
        tag: '数据整理',
      },
      {
        title: '建立可追溯计算',
        description:
          '匹配排放因子，保留来源引用和计算逻辑，让顾问复核和客户沟通更有依据。',
        media: '/videos/video3-card.mp4',
        tag: '计算建模',
      },
      {
        title: '打包复核就绪交付物',
        description:
          '准备报告底稿、证据链、风险提示和支撑材料，让交付更容易进入专业复核与客户沟通。',
        media: '/videos/video4-card.mp4',
        tag: '交付',
      },
    ],
    expertSystemCta: '查看碳专家方案',
    programEyebrow: '计划机制',
    programTitle: '让 Climate Seal 成为你的交付优势',
    programBody:
      '成员可获得早期合作价格、真实报告工作流、推荐奖励，以及一条可通往未来客户线索与区域协作机会的认证路径。',
    programBullets: [
      {
        label: 'Cohort',
        title: '仅限前 100 位顾问',
        description:
          '面向希望用 Climate Seal 建立 AI 驱动碳交付能力的顾问开放早期席位。',
      },
      {
        label: 'Partner pricing',
        title: '早期 cohort 的真实客户报告价格',
        accent: '成员可享受更优惠的交付价格',
        description:
          '成员可使用更优惠的价格，通过 Climate Seal 的 AI 生产工作流交付真实客户项目。',
      },
      {
        label: 'Referral & network growth',
        title: '邀请合格顾问加入并获得奖励',
        accent: '每位通过审核并成为活跃成员的顾问可获得 $100',
        description:
          '推荐合格顾问加入 cohort，每位通过审核并成为活跃成员的顾问都可为你带来一次性 $100 奖励。',
        href: '/referral-program',
        cta: '查看推荐计划',
      },
      {
        label: 'Certification & opportunity access',
        title: '获得认证顾问路径与区域机会',
        accent: '未来客户线索、区域机会与联合交付项目',
        description:
          '完成真实项目并通过 Climate Seal 内部交付审核后，顾问可以成为 Certified Consultant，并优先获得未来客户线索、区域机会与联合交付项目。',
      },
    ],
    splitEyebrow: '怎么协作',
    splitTitle: 'AI 负责生产层，顾问保留咨询层。',
    aiHandles: [
      '客户数据整理',
      '排放因子匹配',
      '计算轨迹保留',
      'PCF / CCF 底稿生成',
      '证据链准备',
      '核验准备材料',
      '报告包整理',
    ],
    consultantOwns: [
      '客户范围界定',
      '数据判断与假设',
      '专业复核',
      '客户沟通',
      '最终建议',
      '商业关系',
      '项目交付',
    ],
    deliverablesEyebrow: '可交付内容',
    deliverablesTitle: '合作顾问可以交付什么',
    deliverables: [
      {
        title: 'PCF 报告底稿',
        description:
          '适用于产品碳足迹项目，包含结构化计算、假设、引用与面向客户的报告底稿。',
      },
      {
        title: 'CCF / 企业碳基线',
        description:
          '覆盖运营、采购、能源、物流和其他类别的首版企业碳排放基线。',
      },
      {
        title: 'Scope 3 供应链数据包',
        description:
          '用于供应链项目中的供应商碳数据收集、结构化处理与质量评估。',
      },
      {
        title: 'EPD Draft Pack',
        description:
          '适合 EPD 前期准备，包含产品数据整理、计算逻辑、报告草稿输入与支撑材料。',
      },
      {
        title: '可直接用于核验的报告与数据包',
        description:
          '包含可直接提交第三方核验的完整报告与支撑数据包，并提供排放热点与贡献汇总、风险提示以及敏感性分析，方便专业审阅与交付。',
      },
    ],
    pricingEyebrow: '定价',
    pricingTitle: '面向真实客户交付的合作顾问定价',
    pricingCaption: '这不是一次性软件访问费，而是让顾问持续扩张交付能力的合作价格。',
    pricingCards: [
      {
        title: '合作顾问会员价',
        price: '$199 / 报告',
        items: [
          '1 份报告包含最多 1000 次 requests',
          '适用于顾问合作计划内的交付',
          '包含 cashback 与 Certified Consultant 路径',
        ],
      },
      {
        title: '非会员报告价格',
        price: '$399 / 报告',
        items: [
          '适用于不加入合作计划的一次性交付',
          '适合先按项目使用，再决定是否进入 cohort',
        ],
      },
      {
        title: '项目型选项',
        price: '$699 起',
        items: [
          'EPD Draft Pack 从 $699 / 项目起',
          '适用于超出标准 PCF / CCF 报告范围的项目',
        ],
      },
    ],
    referralEyebrow: '推荐机制',
    referralTitle: '邀请顾问加入，前 12 个月获得 cashback。',
    referralBody:
      '合作顾问推荐其他合格顾问加入后，可在前 12 个月内就符合条件的付费报告购买获得 20% cashback。成功推荐 5 个活跃付费用户后，cashback 可提升到 30%。',
    referralPoints: [
      'cashback 适用于被推荐账户在前 12 个月内的合格付费报告购买',
      'Climate Seal 会审核推荐对象是否匹配合作要求',
      '目标是建立真正可工作的顾问网络，不是做优惠券活动',
    ],
    certificationEyebrow: '认证路径',
    certificationTitle: '获得 Climate Seal Certified Consultant 路径',
    certificationBody:
      '用于识别那些已完成真实项目，并通过 Climate Seal 内部交付质量复核的顾问。',
    certificationSteps: [
      '加入顾问合作 cohort',
      '完成 3 个真实客户项目',
      '提交项目复核',
      '获得 Certified Consultant 身份',
    ],
    certificationBenefits: [
      '优先获得未来客户线索',
      '联合营销机会',
      '顾问名录或认证档案展示',
      '更优合作价格与更早的新工作流权限',
    ],
    whyEarlyEyebrow: '为什么现在加入',
    whyEarlyTitle: '为什么加入首批合作 cohort',
    whyEarlyPoints: [
      '在公开价格调整前锁定早期合作价格',
      '让工作流围绕真实咨询项目继续迭代',
      '更早建立报告样本与案例',
      '在不增加分析团队的情况下提升交付能力',
      '更早获得后续合作机会与网络位置',
    ],
    trustEyebrow: '可信顾问交付基础',
    trustTitle: '为可信顾问交付而构建',
    trustPoints: [
      '支持 PCF、CCF、Scope 3 与 EPD Draft 准备工作流',
      '围绕可追溯计算和证据链设计',
      '顾问主导最终复核，保留专业判断',
      '输出面向第三方验证工作流准备',
    ],
    faqEyebrow: 'FAQ',
    faqTitle: '顾问最先会问的几个问题',
    faqs: [
      {
        q: 'Climate Seal 会替代顾问工作吗？',
        a: '不会。Climate Seal 主要支持碳咨询项目中的生产层工作，包括数据整理、因子匹配、证据准备和报告底稿生成。顾问仍然负责项目范围界定、专业判断、关键假设、客户沟通、复核与最终交付。',
      },
      {
        q: '认证顾问怎么获得？',
        a: '顾问通过平台完成 3 个真实客户项目，并提交项目接受内部交付质量复核后，可以申请 Climate Seal Certified Consultant 身份。通过后可获得未来客户线索、联合营销、顾问展示和更优合作权益等机会。',
      },
      {
        q: '一份报告包含什么？',
        a: '标准报告通常包括一份 PCF 或 CCF 报告底稿，涵盖结构化计算、关键假设、来源引用、证据支持和适合复核的交付输出，并包含最多 1000 次 requests。更复杂的范围、EPD 准备、多产品项目或特殊数据要求，可能需要按项目单独定价。',
      },
      {
        q: '推荐奖励怎么计算？',
        a: '合作顾问可以推荐符合条件的顾问加入项目。推荐奖励仅适用于通过审核并成为活跃成员后的合格付费行为。Climate Seal 会审核推荐对象的专业匹配度和合作质量，确保顾问网络围绕真实交付能力增长，而不是一次性优惠活动。',
      },
    ],
    finalTitle: '加入首批 Climate Seal 顾问合作 cohort',
    finalBody:
      '用 AI 扩展交付能力，同时保住你的专业判断和客户关系，把碳咨询业务做得更可复制。',
    finalPrimary: '申请加入',
    finalSecondary: '预约 20 分钟介绍电话',
    breadcrumbHome: '首页',
    breadcrumbCurrent: '顾问合作计划',
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const locale = isChineseLanguage(resolveLanguage(headerList.get('x-language'))) ? 'zh' : 'en';
  const copy = content[locale];

  return {
    title: {
      absolute: copy.metaTitle,
    },
    description: copy.description,
    alternates: {
      canonical: '/consultant-partner-program',
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
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: copy.breadcrumbHome, item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: copy.breadcrumbCurrent, item: `${siteUrl}/consultant-partner-program` },
    ],
  };

  return (
    <main className="bg-[#FAF8F3] text-[#123F3D]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="border-b border-[#d7ddd6] bg-[linear-gradient(180deg,#fffdf9_0%,#f5f1e7_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:px-8 lg:pb-20 lg:pt-36">
          <div className="flex flex-col justify-end space-y-7">
            <div className="cs-chip">
              {copy.eyebrow}
            </div>
            <div className="space-y-5">
              <h1 className="font-lora text-4xl font-bold leading-[1.03] tracking-[-0.02em] sm:text-5xl lg:text-[3.6rem]">
                {copy.heroTitle}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#5f7672]">{copy.heroBody}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="cs-meta-pill">
                <span className="h-2 w-2 rounded-full bg-[#215b57]" />
                <span className="text-[#6a827e]">{copy.cohortLabel}</span>
                <span className="text-[#123F3D]">{copy.cohortValue}</span>
              </div>
              <div className="cs-meta-pill">
                <span className="h-2 w-2 rounded-full bg-[#6ea08e]" />
                <span className="text-[#6a827e]">{copy.joinedLabel}</span>
                <span className="text-[#123F3D]">{copy.joinedValue}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-[0.5rem] border border-[#123F3D] bg-[#123F3D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f4746]"
              >
                {copy.heroPrimary}
              </Link>
            </div>
          </div>

          <div className="lg:-mr-8 lg:flex lg:h-full lg:items-end lg:justify-end">
            <div className="cs-glass-panel w-full overflow-hidden lg:min-h-[460px] lg:max-w-none">
              <Image
                src="/consultant-partner-team.png"
                alt={locale === 'zh' ? '顾问团队协作会议' : 'Consultant team collaborating in a client delivery meeting'}
                width={1456}
                height={1056}
                className="h-full w-full object-cover lg:min-h-[460px]"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      <section className="border-b border-[#d7ddd6] bg-[#f7f4ec]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="cs-section-eyebrow">{copy.problemEyebrow}</p>
            <h2 className="mt-4 font-lora text-3xl font-bold tracking-[-0.02em] sm:text-4xl">{copy.problemTitle}</h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {copy.problems.map((item, index) => (
              <article key={item.title} className={`${index === 1 ? 'cs-card-primary' : 'cs-card-secondary'} p-7`}>
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5f7a76]">0{index + 1}</div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-[#123F3D]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#5f7672]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7ddd6] bg-[linear-gradient(180deg,#fbf9f4_0%,#f1eee5_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="cs-section-eyebrow">{copy.expertSystemEyebrow}</p>
              <h2 className="mt-4 font-lora text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
                {copy.expertSystemTitle}
              </h2>
            </div>
            <div className="max-w-3xl lg:justify-self-end">
              <p className="text-base leading-7 text-[#5f7672] sm:text-[1.05rem] sm:leading-8">
                {copy.expertSystemBody}
              </p>
              <Link
                href="/solutions/carbon-expert"
                className="mt-4 inline-flex items-center text-sm font-semibold text-[#215b57] transition hover:text-[#123F3D]"
              >
                {copy.expertSystemCta}
                <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="-mx-4 mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
            {copy.expertSystemCards.map((item, index) => (
              <article
                key={item.title}
                className={`${index === 1 ? 'cs-card-primary' : 'cs-card-secondary'} min-w-[78vw] snap-start overflow-hidden p-0 sm:min-w-[360px] lg:min-w-0`}
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[rgba(18,63,61,0.1)] bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(236,242,239,0.82))]">
                  <video
                    className="h-full w-full object-contain"
                    src={item.media}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="metadata"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,rgba(251,249,244,0),rgba(251,249,244,0.82))]" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6b8580]">
                      {item.tag}
                    </span>
                    <span className="text-xs font-semibold text-[#6b8580]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-4 text-[1.22rem] font-semibold leading-7 tracking-[-0.02em] text-[#123F3D]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.98rem] leading-7 text-[#5f7672]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7ddd6] bg-[#f6f1e7]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="cs-section-eyebrow">{copy.programEyebrow}</p>
            <h2 className="mt-4 font-lora text-3xl font-bold tracking-[-0.02em] sm:text-4xl">{copy.programTitle}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f7672]">{copy.programBody}</p>
          </div>
          <div className="border-t border-[rgba(18,63,61,0.12)]">
            {copy.programBullets.map((item, index) => (
              <div key={item.title} className="grid gap-3 border-b border-[rgba(18,63,61,0.12)] py-5 sm:grid-cols-[auto_1fr] sm:items-start">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(18,63,61,0.08)] text-sm font-semibold text-[#215b57]">
                  0{index + 1}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6b8580]">
                    {item.label}
                  </p>
                  <h3 className="mt-1.5 text-[1.08rem] font-semibold leading-7 text-[#123F3D]">{item.title}</h3>
                  {item.accent ? (
                    <p className="mt-1 text-[0.98rem] font-semibold leading-6 text-[#215b57]">{item.accent}</p>
                  ) : null}
                  <p className="mt-1.5 text-[1.02rem] leading-7 text-[#486662]">{item.description}</p>
                  {'href' in item ? (
                    <Link
                      href={item.href}
                      className="mt-3 inline-flex items-center text-sm font-semibold text-[#215b57] transition hover:text-[#123F3D]"
                    >
                      {item.cta}
                      <span className="ml-2" aria-hidden="true">→</span>
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7ddd6] bg-[#faf8f3]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <KnowHowNumbersSection locale={locale} context="consultant" />
        </div>
      </section>

      <HomeContactSection />
    </main>
  );
}
