type KnowHowNumbersSectionProps = {
  locale: 'en' | 'zh';
  context?: 'home' | 'consultant';
};

const content = {
  en: {
    eyebrow: 'Trust foundation',
    title: 'Built for credible, AI-assisted sustainability compliance',
    homeIntro:
      'Climate Seal combines structured compliance workflows, reusable models, and review-oriented logic so teams can deliver more confidently across environmental, product, supplier, and operational requirements.',
    consultantIntro:
      'Consultants need more than a UI. They need working carbon know-how that compresses project delivery while preserving professional review, traceability, and verification readiness.',
    rows: [
      {
        value: '60+',
        title: 'workflow models',
        description: 'Reusable process logic for environmental, product, supplier, and operational data workflows.',
      },
      {
        value: '50+',
        title: 'automated method workflows',
        description: 'Built to support different standards, project structures, and delivery scenarios.',
      },
      {
        value: '12k+',
        title: 'traceable data matches',
        description: 'Structured matching pathways designed for transparent review, checking, and evidence capture.',
      },
      {
        value: '20k+',
        title: 'reference models',
        description: 'Reference structures that accelerate setup, comparison, and review across use cases.',
      },
    ],
  },
  zh: {
    eyebrow: '可信基础',
    title: '面向可信、AI 辅助的可持续合规而构建',
    homeIntro:
      'Climate Seal 把结构化合规工作流、可复用模型和面向复核的逻辑放进同一套系统里，让团队在环境、产品、供应商和运营要求中更稳地交付结果。',
    consultantIntro:
      '顾问需要的不只是一个界面，而是一套真正能压缩项目交付时间、同时保留专业复核、可追溯性和核验准备能力的 carbon know-how。',
    rows: [
      {
        value: '60+',
        title: '工作流模型',
        description: '覆盖环境、产品、供应商与运营数据场景的可复用流程逻辑。',
      },
      {
        value: '50+',
        title: '自动化方法工作流',
        description: '支持不同标准、项目结构与交付情境的自动化流程。',
      },
      {
        value: '12k+',
        title: '可追溯数据匹配',
        description: '面向透明复核、检查与证据记录的结构化匹配路径。',
      },
      {
        value: '20k+',
        title: '参考模型',
        description: '帮助在不同使用场景中更快完成搭建、对比与复核。',
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
