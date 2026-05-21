type KnowHowNumbersSectionProps = {
  locale: 'en' | 'zh';
  context?: 'home' | 'consultant';
};

const content = {
  en: {
    eyebrow: 'Trust foundation',
    title: 'Built for Credible, AI-Assisted Carbon Accounting',
    homeIntro:
      'Climate Seal combines structured carbon accounting workflows, reusable models, and verification-oriented review logic so teams can deliver more confidently across product, corporate, and supply-chain carbon work.',
    consultantIntro:
      'Consultants need more than a UI. They need working carbon know-how that compresses project delivery while preserving professional review, traceability, and verification readiness.',
    rows: [
      {
        value: '60+',
        title: 'carbon asset process models',
        description: 'Reusable process logic for product and operational carbon accounting workflows.',
      },
      {
        value: '50+',
        title: 'automated method workflows',
        description: 'Built to support different standards, project structures, and delivery scenarios.',
      },
      {
        value: '12k+',
        title: 'verification factor matches',
        description: 'Structured factor matching pathways designed for traceable review and checking.',
      },
      {
        value: '20k+',
        title: 'benchmark product models',
        description: 'Reference product structures that accelerate setup, comparison, and review.',
      },
    ],
  },
  zh: {
    eyebrow: '可信基础',
    title: '面向可信、AI 辅助碳核算而构建',
    homeIntro:
      'Climate Seal 把结构化碳核算工作流、可复用模型和面向核验的复核逻辑放进同一套系统里，让团队在产品、企业和供应链碳核算项目中更稳地交付结果。',
    consultantIntro:
      '顾问需要的不只是一个界面，而是一套真正能压缩项目交付时间、同时保留专业复核、可追溯性和核验准备能力的 carbon know-how。',
    rows: [
      {
        value: '60+',
        title: '碳资产流程模型',
        description: '覆盖产品与运营类碳核算场景的可复用流程逻辑。',
      },
      {
        value: '50+',
        title: '自动化方法工作流',
        description: '支持不同标准、项目结构与交付情境的自动化流程。',
      },
      {
        value: '12k+',
        title: '核验因子匹配',
        description: '面向可追溯复核与检查的结构化因子匹配路径。',
      },
      {
        value: '20k+',
        title: '基准产品模型',
        description: '帮助更快完成搭建、对比与复核的参考产品模型。',
      },
    ],
  },
} as const;

export default function KnowHowNumbersSection({
  locale,
}: KnowHowNumbersSectionProps) {
  const copy = content[locale];

  return (
    <div>
      <div className="mx-auto max-w-[880px] text-center">
        <p className="cs-section-eyebrow">
          {copy.eyebrow}
        </p>
        <h2 className="mx-auto mt-3 max-w-[820px] font-lora text-[1.9rem] font-bold leading-[1.05] text-[var(--brand-ink)] sm:text-[2.35rem]">
          {copy.title}
        </h2>
      </div>

      <div className="mx-auto mt-8 max-w-[1220px] border-t border-[rgba(18,63,61,0.12)] lg:translate-x-6 xl:translate-x-10">
        {copy.rows.map((row) => (
          <div
            key={row.title}
            className="grid gap-3 border-b border-[rgba(18,63,61,0.12)] py-5 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-8 sm:py-6 lg:grid-cols-[130px_minmax(0,1fr)]"
          >
            <div className="text-[1.9rem] font-semibold leading-none tracking-[-0.04em] text-[var(--brand-accent-strong)] sm:text-[2.45rem]">
              {row.value}
            </div>
            <div className="max-w-3xl">
              <h3 className="text-[1.08rem] font-semibold leading-7 text-[var(--brand-ink)] sm:text-[1.14rem]">
                {row.title}
              </h3>
              <p className="mt-2 text-[15px] leading-7 text-[var(--brand-muted)] sm:text-[16px]">
                {row.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
