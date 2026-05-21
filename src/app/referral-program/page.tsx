import type { Metadata } from 'next';
import { headers } from 'next/headers';
import FAQAccordion from '@/components/FAQAccordion';
import HomeContactSection from '@/components/HomeContactSection';
import {
  TrustIcon,
  PricingIcon,
} from '@/components/ProgramIcons';
import { BarChart3, Check, Gift, Mail, ShoppingCart, UserRound, UserRoundPlus } from 'lucide-react';
import { buildLanguageAlternates, isChineseLanguage, resolveLanguage } from '@/lib/language';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://climate-seal.com';

const content = {
  en: {
    title: 'ClimateSeal Referral Program',
    description:
      'Refer ClimateSeal by email and receive a one-time $100 thank-you reward when your referral becomes a paying customer.',
    eyebrow: 'Referral Program',
    heroTitle: 'Refer ClimateSeal. Earn a $100 Thank-You Reward.',
    heroBody:
      'If you have seen the ClimateSeal demo and believe it could help someone in your network, introduce us by email. When your referral becomes a paying customer, you receive a one-time $100 reward.',
    heroPrimary: 'Book a Demo to Become Eligible',
    heroSecondary: 'See How It Works',
    rewardCardTitle: '$100 one-time reward',
    rewardCardBody: 'Make a trusted introduction by email. We handle the demo, follow-up, and sales process directly.',
    rewardBullets: ['Demo first', 'Email introduction', 'Tracked in one thread', 'Paid customer = reward'],
    trustTitle: 'Good products spread through trusted introductions.',
    trustBody:
      'ClimateSeal helps consultants and sustainability teams turn raw data into audit-ready carbon reporting materials faster, with traceable calculations, structured evidence, and AI-assisted workflows.',
    trustBody2:
      'Because this work is specialized, the best introductions often come from people who have already seen the product and understand who it can genuinely help. If you believe ClimateSeal could be useful to someone in your network, we would be glad to thank you for making the connection.',
    trustPoints: [
      'Traceable calculations',
      'Structured evidence',
      'AI-assisted workflows',
      'Audit-ready carbon delivery',
    ],
    howEyebrow: 'How it works',
    howTitle: 'How the referral program works',
    howSteps: [
      {
        step: '1',
        title: 'Meet ClimateSeal',
        description:
          'Join a short meeting with our team and see the product demo so you understand what ClimateSeal does, how it works, and who it is best suited for.',
      },
      {
        step: '2',
        title: 'Make an introduction',
        description:
          'If someone in your network may benefit, introduce them to ClimateSeal sales by email. Simply include both the referred contact and our sales team in the same thread.',
      },
      {
        step: '3',
        title: 'We take it from there',
        description:
          'ClimateSeal handles the follow-up, product demo, questions, and sales process directly with the referred contact.',
      },
      {
        step: '4',
        title: 'Receive $100',
        description:
          'If your referral decides to use ClimateSeal and becomes a paying customer, you receive a one-time $100 thank-you reward.',
      },
    ],
    eligibilityEyebrow: 'Eligibility',
    eligibilityTitle: 'Who can participate?',
    eligibilityBody:
      'Anyone who has met with ClimateSeal, seen the product demo, and understands who the platform may help can participate in the referral program.',
    eligibilityBody2:
      'You do not need to be a paying customer to refer someone. You only need to make a genuine introduction to a relevant person or organization that may benefit from ClimateSeal.',
    eligibilityList: [
      'Carbon consultants',
      'ESG advisors',
      'LCA consultants',
      'Sustainability professionals',
      'Industry partners',
      'Existing users',
      'Other professionals with relevant introductions',
    ],
    fitTitle: 'Who should you refer?',
    fitList: [
      'Carbon consultants who want to deliver PCF or CCF projects faster',
      'ESG or sustainability teams managing product carbon or supplier data',
      'LCA professionals preparing reports, evidence packs, or verification materials',
      'Small consulting firms looking to increase delivery capacity',
      'Manufacturers facing customer, supplier, or compliance pressure around carbon reporting',
      'Teams that need more credible, traceable, and review-ready carbon outputs',
    ],
    rulesEyebrow: 'Valid referral rules',
    rulesTitle: 'What counts as a valid referral?',
    rulesBody:
      'Once we receive the introduction email, we will confirm it and use that email thread to track the referral. Referral rewards are paid only for eligible new referrals that become paying customers.',
    rulesList: [
      'Be a new introduction',
      'Be made by email',
      'Include both the referred contact and ClimateSeal sales in the same email thread',
      'Involve a person or organization that may reasonably benefit from ClimateSeal',
      'Result in the referred contact becoming a paying ClimateSeal customer',
    ],
    emailTitle: 'The easiest way to refer someone',
    emailIntro: 'You can use a simple introduction like this:',
    emailSubject: 'Subject: Introduction to ClimateSeal',
    emailBody:
      'Hi [Name],\n\nI recently saw a demo of ClimateSeal and thought it may be relevant for your work on PCF, carbon reporting, or ESG projects.\n\nI would like to introduce you to [ClimateSeal Sales Name], who can show you how the platform works and answer any questions.\n\nBest,\n[Your Name]',
    rewardTitle: 'Your reward',
    rewardHeading: '$100 one-time thank-you reward',
    rewardBody:
      'When the person or organization you refer becomes a paying ClimateSeal customer, you receive a one-time $100 referral reward.',
    rewardBody2:
      'There is no need for you to sell the product, manage follow-up, or handle commercial discussions. Your role is simply to make a trusted introduction. ClimateSeal takes care of the rest.',
    whyEyebrow: 'Why refer',
    whyTitle: 'Why refer ClimateSeal?',
    whyCards: [
      {
        title: 'Help someone solve a real problem',
        description:
          'If a consultant, sustainability team, or manufacturer in your network is struggling with carbon reporting workflows, ClimateSeal may help them move faster with better traceability.',
      },
      {
        title: 'Make a warm introduction, not a sales pitch',
        description:
          'You do not need to promote or sell the product. A simple email introduction is enough.',
      },
      {
        title: 'Get thanked for creating value',
        description:
          'When your introduction turns into a real customer relationship, ClimateSeal thanks you with a $100 reward.',
      },
      {
        title: 'Support better carbon work',
        description:
          'By connecting the right people with better tools, you help reduce repetitive manual work and improve the quality of carbon reporting delivery.',
      },
    ],
    faqTitle: 'Frequently asked questions',
    faqBody:
      'If something is still unclear, we can walk you through the program in a short call before you make any introduction.',
    faqs: [
      {
        question: 'Do I need to be a ClimateSeal customer to refer someone?',
        answer:
          'No. You only need to have met with ClimateSeal, seen the demo, and understand who the product is useful for.',
      },
      {
        question: 'How do I submit a referral?',
        answer:
          'Send an email introduction connecting the person you want to refer with ClimateSeal sales. Include both the referred contact and ClimateSeal sales in the same email thread so we can confirm and track the referral.\n\nYou can use this simple template:\n\nSubject: Introduction to ClimateSeal\n\nHi [Name],\n\nI recently saw a demo of ClimateSeal and thought it may be relevant for your work on PCF, carbon reporting, or ESG projects.\n\nI would like to introduce you to [ClimateSeal Sales Name], who can show you how the platform works and answer any questions.\n\nBest,\n[Your Name]',
      },
      {
        question: 'When do I receive the $100 reward?',
        answer:
          'You receive the one-time $100 reward after the person or organization you referred becomes a paying ClimateSeal customer.',
      },
      {
        question: 'Can I refer more than one person?',
        answer: 'Yes. You may make multiple qualified referrals.',
      },
      {
        question: 'What if the person is already talking with ClimateSeal?',
        answer: 'Only new introductions are eligible for referral rewards.',
      },
      {
        question: 'Do I need to sell ClimateSeal myself?',
        answer:
          'No. After the introduction, ClimateSeal handles the demo, follow-up, questions, and sales process.',
      },
      {
        question: 'Who is a good fit for referral?',
        answer:
          'Good referrals may include carbon consultants, ESG advisors, LCA consultants, sustainability teams, small consulting firms, manufacturers, and other organizations that need faster, more credible carbon reporting workflows.',
      },
      {
        question: 'Is every referral guaranteed to receive a reward?',
        answer: 'Rewards apply only to eligible new referrals that become paying ClimateSeal customers.',
      },
    ],
    finalTitle: 'Know someone who should see ClimateSeal?',
    finalBody:
      'Start with a short demo. If you believe ClimateSeal could help people in your network, you can begin referring right away.',
    finalPrimary: 'Book a Demo',
    finalSecondary: 'Contact Sales',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Referral Program',
  },
  zh: {
    title: 'ClimateSeal 推荐计划',
    description:
      '通过邮件推荐 ClimateSeal。当你介绍的人最终成为付费客户时，你将获得一次性 100 美元感谢奖励。',
    eyebrow: 'Referral Program',
    heroTitle: '推荐 ClimateSeal，获得 100 美元感谢奖励。',
    heroBody:
      '如果你已经看过 ClimateSeal 的演示，并且觉得它可能帮助你网络中的某个人，只需要通过邮件把我们介绍过去。当你的推荐对象成为付费客户时，你将获得一次性 100 美元奖励。',
    heroPrimary: '先预约演示，获得推荐资格',
    heroSecondary: '查看具体流程',
    rewardCardTitle: '一次性 100 美元奖励',
    rewardCardBody: '通过邮件做一个可信的暖介绍。演示、跟进和销售流程都由 ClimateSeal 直接完成。',
    rewardBullets: ['先看演示', '邮件介绍', '同一线程追踪', '成为付费客户后发放奖励'],
    trustTitle: '好的产品，往往通过可信的介绍传播。',
    trustBody:
      'ClimateSeal 帮助顾问和可持续团队更快把原始数据转成审计就绪的碳报告材料，沉淀可追溯计算、结构化证据和 AI 辅助工作流。',
    trustBody2:
      '因为这类工作本身很专业，最有价值的介绍通常来自已经看过产品、并真正理解它适合帮助谁的人。如果你认为 ClimateSeal 可能对你网络中的某个人有帮助，我们会很高兴感谢你完成这次连接。',
    trustPoints: ['可追溯计算', '结构化证据', 'AI 辅助工作流', '审计就绪交付'],
    howEyebrow: 'How it works',
    howTitle: '推荐计划如何运作',
    howSteps: [
      {
        step: '1',
        title: '先了解 ClimateSeal',
        description:
          '先和我们做一场简短会议，看产品演示，了解 ClimateSeal 做什么、怎么做，以及最适合帮助谁。',
      },
      {
        step: '2',
        title: '做一封邮件介绍',
        description:
          '如果你网络里有人可能受益，只需通过邮件把对方介绍给 ClimateSeal 销售团队，并把双方放在同一封邮件线程里。',
      },
      {
        step: '3',
        title: '后续由我们接手',
        description:
          '后续的产品演示、问题解答、销售沟通和跟进流程都由 ClimateSeal 直接完成。',
      },
      {
        step: '4',
        title: '获得 100 美元奖励',
        description:
          '如果你的推荐对象决定采用 ClimateSeal 并成为付费客户，你将获得一次性 100 美元感谢奖励。',
      },
    ],
    eligibilityEyebrow: 'Eligibility',
    eligibilityTitle: '谁可以参与？',
    eligibilityBody:
      '任何已经与 ClimateSeal 沟通过、看过产品演示，并理解这个平台适合帮助谁的人，都可以参与推荐计划。',
    eligibilityBody2:
      '你不需要先成为付费客户。你只需要做一次真实、合适的介绍，把可能受益的人或组织介绍给我们。',
    eligibilityList: ['碳顾问', 'ESG 顾问', 'LCA 顾问', '可持续从业者', '行业合作伙伴', '现有用户', '其他有相关网络资源的专业人士'],
    fitTitle: '推荐什么样的人最合适？',
    fitList: [
      '希望更快交付 PCF 或 CCF 项目的碳顾问',
      '正在管理产品碳或供应商数据的 ESG / 可持续团队',
      '需要准备报告、证据包或核验材料的 LCA 专业人士',
      '希望提升交付产能的小型咨询公司',
      '面临客户、供应链或合规压力的制造企业',
      '需要更可信、更可追溯、更适合复核的碳报告输出的团队',
    ],
    rulesEyebrow: 'Valid referral rules',
    rulesTitle: '什么样的推荐才算有效？',
    rulesBody:
      '当我们收到这封介绍邮件后，会确认推荐成立，并用这封邮件线程来追踪整个推荐过程。奖励只针对合格的新推荐，且最终转化为付费客户时发放。',
    rulesList: [
      '必须是新的介绍',
      '必须通过邮件完成',
      '邮件线程中同时包含被推荐联系人和 ClimateSeal 销售团队',
      '被推荐人或组织应当合理地可能从 ClimateSeal 受益',
      '最终转化为付费 ClimateSeal 客户',
    ],
    emailTitle: '最简单的推荐方式',
    emailIntro: '你可以直接使用下面这样的介绍邮件：',
    emailSubject: '主题：介绍你认识 ClimateSeal',
    emailBody:
      'Hi [Name],\n\n我最近看了 ClimateSeal 的演示，觉得它可能与你在 PCF、碳报告或 ESG 项目上的工作相关。\n\n我想把你介绍给 [ClimateSeal Sales Name]，他们可以向你展示这个平台如何运作，并回答你的问题。\n\nBest,\n[Your Name]',
    rewardTitle: '你的奖励',
    rewardHeading: '一次性 100 美元感谢奖励',
    rewardBody:
      '当你介绍的人或组织最终成为付费 ClimateSeal 客户时，你将获得一次性 100 美元推荐奖励。',
    rewardBody2:
      '你不需要自己销售产品，不需要负责后续跟进，也不需要参与商务讨论。你的角色只是完成一次可信的暖介绍。剩下的由 ClimateSeal 处理。',
    whyEyebrow: 'Why refer',
    whyTitle: '为什么推荐 ClimateSeal？',
    whyCards: [
      {
        title: '帮助别人解决真实问题',
        description:
          '如果你网络里的顾问、可持续团队或制造企业正被碳报告流程困住，ClimateSeal 可能帮助他们更快推进，并获得更好的追溯性。',
      },
      {
        title: '做的是暖介绍，不是销售推销',
        description:
          '你不需要推广或销售产品。一封简单的介绍邮件就足够。',
      },
      {
        title: '为创造真实价值获得感谢',
        description:
          '当你的介绍最终形成真实客户关系，ClimateSeal 会用 100 美元奖励感谢你。',
      },
      {
        title: '支持更好的碳工作',
        description:
          '把合适的人连接到更好的工具上，本身就在减少重复人工工作，也在提升碳报告交付质量。',
      },
    ],
    faqTitle: '常见问题',
    faqBody: '如果仍有问题，我们可以先安排一场简短沟通，在你真正开始推荐之前把规则讲清楚。',
    faqs: [
      {
        question: '我必须先是 ClimateSeal 客户才能推荐别人吗？',
        answer: '不需要。你只需要与 ClimateSeal 沟通过、看过演示，并理解这个产品适合帮助谁。',
      },
      {
        question: '我要怎么提交推荐？',
        answer:
          '通过邮件把你想推荐的人介绍给 ClimateSeal 销售团队，并把被推荐联系人和 ClimateSeal 销售团队放在同一个邮件线程里。我们会使用这个邮件线程来确认和追踪推荐。\n\n你可以使用这个简单模板：\n\n主题：介绍你认识 ClimateSeal\n\nHi [Name],\n\n我最近看了 ClimateSeal 的演示，觉得它可能与你在 PCF、碳报告或 ESG 项目上的工作相关。\n\n我想把你介绍给 [ClimateSeal Sales Name]，他们可以向你展示这个平台如何运作，并回答你的问题。\n\nBest,\n[Your Name]',
      },
      {
        question: '我什么时候能收到 100 美元奖励？',
        answer: '当你推荐的人或组织最终成为付费 ClimateSeal 客户后，你将获得一次性 100 美元奖励。',
      },
      {
        question: '我可以推荐不止一个人吗？',
        answer: '可以。你可以进行多次合格推荐。',
      },
      {
        question: '如果对方已经在和 ClimateSeal 接触怎么办？',
        answer: '只有新的介绍才符合奖励条件。',
      },
      {
        question: '我需要自己去销售 ClimateSeal 吗？',
        answer: '不需要。介绍完成后，演示、问题解答、跟进和销售流程都由 ClimateSeal 处理。',
      },
      {
        question: '什么样的人适合被推荐？',
        answer: '适合的人包括碳顾问、ESG 顾问、LCA 顾问、可持续团队、小型咨询机构、制造企业，以及其他需要更快、更可信碳报告流程的组织。',
      },
      {
        question: '每一条推荐都一定会获得奖励吗？',
        answer: '不是。只有符合条件的新推荐，并最终转化为付费客户时，奖励才会发放。',
      },
    ],
    finalTitle: '认识适合看 ClimateSeal 演示的人吗？',
    finalBody: '先通过一场简短演示了解产品。如果你觉得 ClimateSeal 可能帮助你网络中的某个人，你就可以马上开始推荐。',
    finalPrimary: '预约演示',
    finalSecondary: '联系销售',
    breadcrumbHome: '首页',
    breadcrumbCurrent: '推荐计划',
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
      canonical: '/referral-program',
      languages: buildLanguageAlternates('/referral-program'),
    },
    openGraph: {
      title: `${copy.title} | Climate Seal`,
      description: copy.description,
      images: [{ url: '/new-contact-logo.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${copy.title} | Climate Seal`,
      description: copy.description,
      images: ['/new-contact-logo.png'],
    },
  };
}

export default async function ReferralProgramPage() {
  const headerList = await headers();
  const locale = isChineseLanguage(resolveLanguage(headerList.get('x-language'))) ? 'zh' : 'en';
  const copy = content[locale];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: copy.breadcrumbHome, item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: copy.breadcrumbCurrent, item: `${siteUrl}/referral-program` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <main className="bg-[#FAF8F3] text-[#123F3D]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden border-b border-[#d7ddd6] bg-[linear-gradient(180deg,#f3fbf6_0%,#faf8f3_100%)]">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[38%] bg-[radial-gradient(circle_at_70%_20%,rgba(188,234,204,0.58),transparent_40%),radial-gradient(circle_at_100%_50%,rgba(214,236,220,0.72),transparent_45%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.78fr)] lg:px-8 lg:pb-20 lg:pt-36">
          <div className="relative z-10">
            <p className="cs-section-eyebrow">{copy.eyebrow}</p>
            <h1 className="mt-4 max-w-[13ch] font-lora text-[2.45rem] font-bold leading-[0.98] tracking-[-0.03em] text-[#123F3D] sm:text-[3rem] lg:text-[4rem]">
              {copy.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-[16px] leading-8 text-[#5f7672]">
              {copy.heroBody}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-[0.5rem] bg-[var(--brand-accent-strong)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:rgba(18,63,61,0.88)]"
              >
                {copy.heroPrimary}
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-[0.5rem] border border-[var(--brand-border)] bg-white/70 px-6 py-3 text-sm font-semibold text-[#123F3D] transition hover:bg-white"
              >
                {copy.heroSecondary}
              </a>
            </div>
          </div>

          <div className="relative z-10 self-end overflow-hidden rounded-[0.8rem] border border-[#d7ddd6] bg-[linear-gradient(145deg,rgba(255,255,255,0.94),rgba(237,247,241,0.82))] p-4 shadow-[0_28px_70px_rgba(18,63,61,0.12)] sm:p-6 xl:p-7">
            <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-[#dceee4]/70 sm:h-96 sm:w-96" />
            <div className="pointer-events-none absolute -bottom-28 right-0 h-64 w-64 rounded-full bg-[#cfe9db]/72 sm:h-80 sm:w-80" />
            <div className="pointer-events-none absolute left-12 top-24 hidden h-[260px] w-[120px] rounded-l-[2rem] border-l-2 border-t-2 border-b-2 border-dashed border-[#9bb8ae] xl:block" />

            <div className="relative grid gap-5 xl:grid-cols-[0.42fr_1fr] xl:items-center">
              <div className="hidden space-y-6 xl:block">
                <div className="flex max-w-[170px] flex-col items-center rounded-[0.75rem] border border-[#d7ddd6] bg-white/88 px-5 py-6 text-center shadow-[0_18px_42px_rgba(18,63,61,0.1)]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e2f1e8] text-[#215b57]">
                    <Gift className="h-10 w-10" strokeWidth={1.8} />
                  </div>
                  <p className="mt-5 text-[1.05rem] font-semibold text-[#123F3D]">{locale === 'zh' ? '你获得' : 'You earn'}</p>
                  <p className="text-[2rem] font-bold leading-tight tracking-[-0.03em] text-[#123F3D]">$100</p>
                  <p className="text-sm leading-6 text-[#5f7672]">{locale === 'zh' ? '一次性奖励' : 'one-time reward'}</p>
                </div>
                <div className="ml-auto flex h-16 w-16 items-center justify-center rounded-[0.55rem] border border-[#d7ddd6] bg-white/86 text-[#4d9878] shadow-[0_14px_34px_rgba(18,63,61,0.09)]">
                  <BarChart3 className="h-8 w-8" strokeWidth={1.8} />
                </div>
              </div>

              <div className="relative rounded-[0.65rem] border border-[#d7ddd6] bg-white/80 p-4 shadow-[0_24px_54px_rgba(18,63,61,0.11)] backdrop-blur-sm sm:p-5 xl:p-6">
                <div className="absolute -right-5 -top-10 hidden max-w-[270px] rounded-[0.55rem] border border-[#d7ddd6] bg-white/92 px-5 py-4 shadow-[0_18px_40px_rgba(18,63,61,0.12)] 2xl:block">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4f9274] text-white">
                      <Check className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="font-semibold text-[#123F3D]">{locale === 'zh' ? '奖励已获得' : 'Reward earned!'}</p>
                      <p className="mt-1 text-sm leading-5 text-[#5f7672]">{locale === 'zh' ? '$100 已添加到你的账户。' : '$100 has been added to your account.'}</p>
                    </div>
                  </div>
                </div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6b8580] sm:text-[11px]">{copy.eyebrow}</p>
                <h2 className="mt-3 text-[1.55rem] font-semibold tracking-[-0.03em] text-[#123F3D] sm:text-[1.9rem]">
                  {locale === 'zh' ? '你的影响' : 'Your impact'}
                </h2>

                <div className="mt-5 grid rounded-[0.55rem] border border-[#d7ddd6] bg-white/72 xl:grid-cols-3">
                  {[
                    { icon: UserRound, value: '12', label: locale === 'zh' ? '推荐' : 'Referrals' },
                    { icon: ShoppingCart, value: '7', label: locale === 'zh' ? '转化' : 'Conversions' },
                    { icon: Gift, value: '$700', label: locale === 'zh' ? '已获得' : 'Earned' },
                  ].map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                      <div key={metric.label} className={`flex items-center gap-3 px-4 py-3 ${index > 0 ? 'border-t border-[#d7ddd6] xl:border-l xl:border-t-0' : ''}`}>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e2f1e8] text-[#215b57]">
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[1.35rem] font-bold leading-tight text-[#123F3D]">{metric.value}</p>
                          <p className="text-sm text-[#5f7672]">{metric.label}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5">
                  <p className="text-sm font-semibold text-[#356b5d]">{locale === 'zh' ? '最近活动' : 'Recent activity'}</p>
                  <div className="mt-3 overflow-hidden rounded-[0.55rem] border border-[#d7ddd6] bg-white/72">
                    {[
                      { icon: Mail, title: locale === 'zh' ? '邮件已打开' : 'Email opened', detail: 'john@example.com', time: '2h ago' },
                      { icon: UserRoundPlus, title: locale === 'zh' ? '已注册' : 'Signed up', detail: 'sarah@example.com', time: '1d ago' },
                      { icon: ShoppingCart, title: locale === 'zh' ? '完成购买' : 'Completed purchase', detail: 'mike@example.com', time: '2d ago' },
                    ].map((activity, index) => {
                      const Icon = activity.icon;
                      return (
                        <div key={activity.title} className={`flex items-center gap-3 px-3 py-3 sm:px-4 ${index > 0 ? 'border-t border-[#d7ddd6]' : ''}`}>
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.45rem] bg-[#e8f3ed] text-[#215b57]">
                            <Icon className="h-5 w-5" strokeWidth={1.8} />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-[#123F3D]">{activity.title}</p>
                            <p className="truncate text-xs text-[#5f7672]">{activity.detail}</p>
                          </div>
                          <span className="shrink-0 text-xs text-[#5f7672]">{activity.time}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7ddd6] bg-[#fcfbf8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-20">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-[0.55rem] bg-[var(--brand-highlight)] text-[var(--brand-accent-strong)]">
              <TrustIcon className="h-5.5 w-5.5" />
            </div>
            <h2 className="mt-5 font-lora text-[2rem] font-bold leading-tight tracking-[-0.02em] text-[#123F3D] sm:text-[2.25rem]">
              {copy.trustTitle}
            </h2>
          </div>
          <div>
            <p className="text-[16px] leading-8 text-[#5f7672]">{copy.trustBody}</p>
            <p className="mt-5 text-[16px] leading-8 text-[#5f7672]">{copy.trustBody2}</p>
            <div className="mt-7 border-t border-[#d7ddd6]">
              <div className="grid gap-x-8 sm:grid-cols-2">
                {copy.trustPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-[#d7ddd6] py-4 text-[15px] font-medium text-[#355b57]"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[#2b6a64]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[linear-gradient(180deg,#f3fbf6_0%,#faf8f3_100%)] py-16 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="cs-section-eyebrow">{copy.howEyebrow}</p>
            <h2 className="mt-4 font-lora text-[2rem] font-bold tracking-[-0.02em] text-[#123F3D] sm:text-[2.35rem]">
              {copy.howTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {copy.howSteps.map((step, index) => (
              <article
                key={step.step}
                className={`rounded-[0.55rem] border p-6 shadow-[0_12px_24px_rgba(18,63,61,0.04)] ${
                  index === 3
                    ? 'border-[#b8dfc3] bg-[linear-gradient(180deg,rgba(209,244,218,0.86),rgba(242,251,245,0.96))]'
                    : 'border-[#d7ddd6] bg-white'
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(214,232,223,0.7)] text-sm font-semibold text-[#215b57]">
                  {step.step}
                </div>
                <h3 className="mt-5 text-[1.2rem] font-semibold leading-tight text-[#123F3D]">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#5f7672]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7ddd6] bg-[#fcfbf8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="cs-glass-panel p-7">
            <h2 className="font-lora text-[1.95rem] font-bold tracking-[-0.02em] text-[#123F3D]">{copy.eligibilityTitle}</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#5f7672]">{copy.eligibilityBody}</p>
            <p className="mt-4 text-[15px] leading-7 text-[#5f7672]">{copy.eligibilityBody2}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {copy.eligibilityList.map((item) => (
                <li key={item} className="rounded-[0.5rem] border border-[#d7ddd6] bg-white/55 px-4 py-3 text-sm font-medium text-[#355b57] backdrop-blur-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="cs-glass-panel p-7">
            <h2 className="font-lora text-[1.95rem] font-bold tracking-[-0.02em] text-[#123F3D]">{copy.fitTitle}</h2>
            <ul className="mt-5 space-y-3">
              {copy.fitList.map((item) => (
                <li key={item} className="flex gap-3 rounded-[0.5rem] border border-[#d7ddd6] bg-white/55 px-4 py-3 text-[15px] leading-7 text-[#5f7672] backdrop-blur-sm">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#215b57]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d7ddd6] bg-[#fcfbf8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="cs-card-primary p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-[0.55rem] bg-white text-[#215b57] shadow-[inset_0_0_0_1px_rgba(18,63,61,0.08)]">
              <PricingIcon className="h-5.5 w-5.5" />
            </div>
            <p className="mt-5 cs-section-eyebrow">{copy.rewardTitle}</p>
            <h2 className="mt-3 font-lora text-[2rem] font-bold tracking-[-0.02em] text-[#123F3D]">{copy.rewardHeading}</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#5f7672]">{copy.rewardBody}</p>
            <p className="mt-4 text-[15px] leading-7 text-[#5f7672]">{copy.rewardBody2}</p>
          </div>
          <div>
            <p className="cs-section-eyebrow">{copy.whyEyebrow}</p>
            <h2 className="mt-3 font-lora text-[2rem] font-bold tracking-[-0.02em] text-[#123F3D]">{copy.whyTitle}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {copy.whyCards.map((item, index) => (
                <article
                  key={item.title}
                  className={`rounded-[0.55rem] border p-5 shadow-[0_10px_20px_rgba(18,63,61,0.04)] ${
                    index === 2
                      ? 'border-[#c9ddcf] bg-[linear-gradient(180deg,rgba(233,247,237,0.95),rgba(251,248,242,0.98))]'
                      : 'border-[#d7ddd6] bg-[#fbf9f4]'
                  }`}
                >
                  <h3 className="text-[1.08rem] font-semibold text-[#123F3D]">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#5f7672]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfbf8] py-16 sm:py-18 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <div>
            <h2 className="font-lora text-[2rem] font-bold tracking-[-0.02em] text-[#123F3D]">{copy.faqTitle}</h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#5f7672]">{copy.faqBody}</p>
          </div>
          <FAQAccordion items={copy.faqs} />
        </div>
      </section>

      <HomeContactSection />
    </main>
  );
}
