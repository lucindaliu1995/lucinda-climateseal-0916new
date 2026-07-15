'use client';

import SolutionPageRefresh from '@/components/SolutionPageRefresh';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BrandOwnerSolutionPage() {
  const { t, language } = useLanguage();
  const persona = t.sections.personas.brandOwner;
  const assistants = t.sections.aiAssistants.assistants.brandOwner;
  const isZh = language === 'zh';

  const features = [
    {
      title: assistants.brandAnalyzer.title,
      summary: assistants.brandAnalyzer.description,
      videoSrc: '/videos/brand-video1.mp4',
    },
    {
      title: assistants.scopeTracker.title,
      summary: assistants.scopeTracker.description,
      videoSrc: '/videos/brand-video2.mp4',
    },
    {
      title: isZh ? '消除数据追踪，按时完成每个截止日期' : 'Eliminate Data Chasing, Meet Every Deadline',
      summary: isZh
        ? '自动跟踪和加快您的项目计划中的可持续发展数据收集。获得您所需的准确数据，确保您的净零和合规时间表锁定。'
        : 'Automatically track and expedite sustainability data collection against your project plan. Secure the accurate data you need to keep your net-zero and compliance timelines locked in.',
      videoSrc: '/videos/brand-video3.mp4',
    },
    {
      title: isZh ? '用供应商与产品碳数据支持目标设定和减排规划' : 'Use Supplier and Product Carbon Data to Support Target-Setting and Reduction Planning',
      summary: isZh
        ? '使用供应商与产品碳数据比较减排方案，并清楚记录假设、成本估算和排放影响，为管理层形成可复核的商业案例。'
        : 'Use supplier and product carbon data to compare reduction options and document assumptions, cost estimates, and emissions impact for a reviewable business case.',
      videoSrc: '/videos/brand-video4.mp4',
    },
  ];

  return (
    <SolutionPageRefresh
      accent="green"
      eyebrow={isZh ? '品牌方解决方案' : 'Brand Owner Solution'}
      title={persona.title}
      description={isZh
        ? '为品牌方和可持续发展负责人打造的 AI 工作流，帮助你更快掌握供应链碳数据、推进目标管理，并把减排计划讲清楚。'
        : 'An AI workflow for brand owners and sustainability leaders who need faster supplier carbon visibility, stronger target management, and clearer decarbonization planning.'}
      heroVideo="/videos/brand-video1.mp4"
      heroMediaLabel={isZh ? '品牌方工作流程演示' : 'Brand owner workflow demo'}
      heroHighlights={isZh
        ? ['品牌与供应链碳数据总览', '自动数据追踪与催收', '目标设定与减排规划支持']
        : ['Portfolio-wide carbon visibility', 'Automated supplier data follow-up', 'Target-setting and reduction planning']}
      primaryCta={isZh ? '预约演示' : 'Book a Demo'}
      secondaryCta={isZh ? '查看功能演示' : 'See Key Features'}
      challengeTitle={isZh ? '品牌团队常见挑战' : 'Common challenges for brand teams'}
      painPoints={persona.painPoints}
      workflowEyebrow={isZh ? '工作流程' : 'Workflow'}
      workflowTitle={isZh ? '面向品牌方的执行系统' : 'An execution system built for brand teams'}
      workflowIntro={isZh
        ? '把供应链数据追踪、范围管理、进度判断和减排规划整合进一个更清晰的系统，帮助品牌团队从催数据转向真正的决策与推进。'
        : 'Bring supplier follow-up, scope management, progress tracking, and abatement planning into one clearer system so brand teams spend less time chasing data and more time driving decisions.'}
      features={features}
      outcomes={[
        { title: persona.stat, description: persona.statDescription },
        { title: persona.secondStatDescription, description: persona.thirdStatDescription },
        { title: persona.fourthStat, description: persona.fourthStatDescription },
      ]}
      ctaTitle={isZh ? '让品牌团队从催数据转向推进结果' : 'Help brand teams move from chasing data to driving results'}
      ctaBody={isZh
        ? '如果你需要推动供应链减排、目标设定或品牌级碳管理，Climate Seal 可以帮助团队获得更可行动的数据与规划依据。'
        : 'If you are leading supplier decarbonization, target-setting, or brand-wide carbon programs, Climate Seal can help your team develop more actionable data and planning inputs.'}
      contactLabel={isZh ? '联系我们' : 'Contact Us'}
      homeLabel={isZh ? '返回首页' : 'Back to Home'}
    />
  );
}
