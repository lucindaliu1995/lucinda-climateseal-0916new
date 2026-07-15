'use client';

import SolutionPageRefresh from '@/components/SolutionPageRefresh';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CarbonExpertSolutionPage() {
  const { t, language } = useLanguage();
  const persona = t.sections.personas.carbonExpert;
  const assistants = t.sections.aiAssistants.assistants.carbonExpert;
  const isZh = language === 'zh';

  const features = [
    {
      title: isZh ? '自动化合规映射' : 'Automated Compliance Mapping',
      summary: isZh
        ? '根据产品、业务场景和交付要求识别相关标准与方法学，并把适用规则、边界和待确认事项整理成可复核的项目设置。'
        : 'Identify relevant standards and methodologies from the product, business context, and delivery requirement, then organize applicable rules, boundaries, and open questions into reviewable project settings.',
      videoSrc: '/videos/video1-card.mp4',
    },
    {
      title: isZh ? '自动化BOM数据处理' : 'Automated BOM Data Processing',
      summary: isZh
        ? '解析和标准化物料清单（BOM）与供应链文件，识别层级、数量、单位和材料信息，并把需要专家确认的缺口清楚标记出来。'
        : 'Parse and standardize Bill of Materials (BOM) and supply-chain files, identify structures, quantities, units, and materials, and clearly flag gaps that require expert confirmation.',
      videoSrc: '/videos/video2-card.mp4',
    },
    {
      title: isZh ? '批量PCF计算' : 'Bulk PCF Calculation',
      summary: isZh
        ? '自动批量匹配排放因子，并根据BOM、能源和物流数据计算您的产品碳足迹（PCF）。超越手动计算，实现批量、可审计的结果。'
        : 'Automatically batch-match emission factors and compute your Product Carbon Footprint (PCF) from BOM, energy, and logistics data. Move beyond manual calculations to bulk, auditable results.',
      videoSrc: '/videos/video3-card.mp4',
    },
    {
      title: isZh ? '风险与数据质量检查' : 'Risk & Data Quality Check',
      summary: isZh
        ? '对产品碳核算执行字段级质量检查和不确定性分析，标记缺失信息、薄弱假设、低置信度因子匹配和其他需要专家复核的风险。'
        : 'Run field-level quality checks and uncertainty analysis across product carbon calculations, flagging missing information, weak assumptions, low-confidence factor matches, and other risks for expert review.',
      videoSrc: '/videos/video4-card.mp4',
    },
    ...(assistants.reportGenerator
      ? [{
          title: assistants.reportGenerator.title,
          summary: assistants.reportGenerator.description,
          videoSrc: '/videos/video1-card.mp4',
        }]
      : []),
    ...(assistants.dataValidator
      ? [{
          title: isZh ? '把数据质量风险转化为复核计划' : 'Turn Data-Quality Risks into a Review Plan',
          summary: isZh
            ? 'AI 会识别关键数据缺口、薄弱假设、不确定的因子匹配和其他复核风险，并整理成按优先级排序的专家跟进清单。'
            : 'AI identifies material data gaps, weak assumptions, uncertain factor matches, and other review risks, then organizes them into a prioritized action list for expert follow-up.',
          videoSrc: '/videos/video2-card.mp4',
        }]
      : []),
  ];

  return (
    <SolutionPageRefresh
      accent="blue"
      eyebrow={isZh ? '碳专家解决方案' : 'Carbon Expert Solution'}
      title={persona.title}
      description={isZh
        ? '为碳咨询师、LCA 团队和企业碳专家打造的 AI 工作流，更快完成建模、因子匹配、质量检查与报告交付。'
        : 'An AI workflow for carbon experts, LCA teams, and advisory groups that speeds up modeling, factor matching, QA, and report delivery.'}
      heroVideo="/videos/video1-card.mp4"
      heroMediaLabel={isZh ? '碳专家工作流程演示' : 'Carbon expert workflow demo'}
      heroHighlights={isZh
        ? ['AI 引导方法学与建模', '可追溯因子匹配', '结构化风险与审计留痕']
        : ['AI-guided methodology and modeling', 'Traceable factor matching', 'Structured risk and audit trail']}
      primaryCta={isZh ? '预约演示' : 'Book a Demo'}
      secondaryCta={isZh ? '查看功能演示' : 'See Key Features'}
      challengeTitle={isZh ? '专家团队常见挑战' : 'Common challenges for expert teams'}
      painPoints={persona.painPoints}
      workflowEyebrow={isZh ? '工作流程' : 'Workflow'}
      workflowTitle={isZh ? '面向专家的交付系统' : 'A delivery system built for experts'}
      workflowIntro={isZh
        ? '把方法学判断、BOM 处理、PCF 计算和结构化质量检查整合进一个可追溯系统，帮助专家团队减少重复劳动，把时间用在高价值判断上。'
        : 'Bring methodology decisions, BOM processing, PCF calculation, and structured quality checks into one traceable system so expert teams spend less time on repetitive execution and more time on high-value judgment.'}
      features={features}
      outcomes={[
        { title: persona.stat, description: persona.statDescription },
        { title: persona.secondStatDescription, description: persona.thirdStatDescription },
        { title: persona.fourthStat, description: persona.fourthStatDescription },
      ]}
      partnerProgram={{
        eyebrow: isZh ? '顾问合作计划' : 'Consultant Partner Program',
        title: isZh ? '给顾问与精品咨询机构的下一步' : 'A next step for consultants and boutique advisory firms',
        body: isZh ? '会员价、cashback 与认证路径。' : 'Member pricing, cashback, and the Certified Consultant path.',
        cta: isZh ? '查看合作计划' : 'See the program',
        href: '/consultant-partner-program',
      }}
      ctaTitle={isZh ? '让专家团队把时间花在关键判断上' : 'Give expert teams more time for high-value judgment'}
      ctaBody={isZh
        ? '如果你正在交付复杂 PCF、LCA 或审计准备项目，Climate Seal 可以帮助团队更快完成建模、复核与交付。'
        : 'If your team delivers complex PCF, LCA, or audit-prep work, Climate Seal can help you move faster through modeling, review, and delivery.'}
      contactLabel={isZh ? '联系我们' : 'Contact Us'}
      homeLabel={isZh ? '返回首页' : 'Back to Home'}
    />
  );
}
