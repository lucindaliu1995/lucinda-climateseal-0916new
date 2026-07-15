'use client';

import SolutionPageRefresh from '@/components/SolutionPageRefresh';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SupplyChainSolutionPage() {
  const { t, language } = useLanguage();
  const persona = t.sections.personas.supplyChain;
  const isZh = language === 'zh';

  const features = [
    {
      title: isZh ? '自动化产品碳足迹（PCF）' : 'Automated Product Carbon Footprint (PCF)',
      summary: isZh
        ? '使用 BOM、产品规格、能源和物流数据准备结构化 PCF 模型，并保留可追溯的因子、假设与证据，以响应买方或出口要求。'
        : 'Use BOM, product specification, energy, and logistics data to prepare a structured PCF model with traceable factors, assumptions, and evidence for buyer or export requirements.',
      videoSrc: '/videos/supplier-video1.mp4',
    },
    {
      title: isZh ? '提交前复核 PCF 质量' : 'Review PCF Quality Before Submission',
      summary: isZh
        ? '在提交前检查数据完整性、因子匹配、单位换算、假设与证据状态，并把需要人工确认的风险清楚列出。'
        : 'Check data completeness, factor matches, unit conversions, assumptions, and evidence status before submission, with risks requiring human confirmation clearly listed.',
      videoSrc: '/videos/supplier-video2.mp4',
    },
    {
      title: isZh ? '准备买方与审查方提交材料' : 'Prepare Buyer and Reviewer Submission Packages',
      summary: isZh
        ? '将 PCF 数据和支撑证据整理成买方或审查方要求的格式，并在提交前展示复核状态、假设和缺失项。'
        : 'Organize PCF data and supporting evidence into buyer or reviewer formats, with review status, assumptions, and missing items visible before submission.',
      videoSrc: '/videos/supplier-video3.mp4',
    },
  ];

  return (
    <SolutionPageRefresh
      accent="amber"
      eyebrow={isZh ? '供应链解决方案' : 'Supply Chain Solution'}
      title={persona.title}
      description={isZh
        ? '为供应链企业与出口团队打造的 AI 工作流，帮助团队整理 PCF 数据、提前识别质量风险，并按买方要求准备提交材料。'
        : 'An AI workflow for suppliers and export teams that helps structure PCF data, identify quality risks before submission, and prepare materials for buyer requirements.'}
      heroVideo="/videos/supplier-video1.mp4"
      heroMediaLabel={isZh ? '供应链工作流程演示' : 'Supplier workflow demo'}
      heroHighlights={isZh
        ? ['结构化准备 PCF 数据', '提交前识别质量风险', '整理买方提交材料']
        : ['Structured PCF data preparation', 'Review quality risks before submission', 'Buyer-ready submission packages']}
      primaryCta={isZh ? '预约演示' : 'Book a Demo'}
      secondaryCta={isZh ? '查看功能演示' : 'See Key Features'}
      challengeTitle={isZh ? '供应链团队常见挑战' : 'Common challenges for supplier teams'}
      painPoints={persona.painPoints}
      workflowEyebrow={isZh ? '工作流程' : 'Workflow'}
      workflowTitle={isZh ? '面向供应链的合规交付系统' : 'A compliance delivery system for suppliers'}
      workflowIntro={isZh
        ? '把 PCF 计算、质量检查和提交材料整理整合进一个更高效的系统，帮助供应链团队响应 RFQ、投标与买方审查要求。'
        : 'Bring PCF calculation, quality checks, and submission packaging into one more efficient system so suppliers can respond to RFQs, tenders, and buyer reviews.'}
      features={features}
      outcomes={[
        { title: persona.stat, description: persona.statDescription },
        { title: persona.secondStatDescription, description: persona.thirdStatDescription },
        { title: persona.fourthStat, description: persona.fourthStatDescription },
      ]}
      ctaTitle={isZh ? '帮助供应链团队更快交付合规结果' : 'Help supplier teams deliver compliant results faster'}
      ctaBody={isZh
        ? '如果你正在响应品牌方、买方或欧盟出口要求，Climate Seal 可以帮助团队完成 PCF 数据整理、质量复核与提交准备。'
        : 'If your team is responding to buyer requests, brand requirements, or EU export pressure, Climate Seal can help with PCF data preparation, quality review, and submission packaging.'}
      contactLabel={isZh ? '联系我们' : 'Contact Us'}
      homeLabel={isZh ? '返回首页' : 'Back to Home'}
    />
  );
}
