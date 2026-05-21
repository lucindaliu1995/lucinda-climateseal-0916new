'use client';

type TrustFoundationGraphicProps = {
  language: string;
  compact?: boolean;
};

export default function TrustFoundationGraphic({
  language,
  compact = false,
}: TrustFoundationGraphicProps) {
  const isZh = language === 'zh';

  const checks = isZh
    ? ['方法学', '数据质量', '可追溯性', '风险复核', '交付输出']
    : ['Methodology', 'Data Quality', 'Traceability', 'Risk Review', 'Outputs'];

  return (
    <div
      className={`border border-[#d3ddd4] bg-[#0d4b48] p-3 shadow-[0_18px_36px_rgba(18,63,61,0.12)] ${
        compact ? 'max-w-[760px]' : ''
      }`}
    >
      <div className={`grid gap-3 ${compact ? 'lg:grid-cols-[1.15fr_0.85fr]' : 'lg:grid-cols-[1.2fr_0.8fr]'}`}>
        <div className="border border-[#d3ddd4] bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(239,244,237,0.96))] p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#426864]">
                {isZh ? '产品碳足迹' : 'Product Carbon Footprint'}
              </p>
              <p className="mt-4 text-sm text-[#5f7672]">{isZh ? '总量（范围1-3）' : 'Total (Scope 1-3)'}</p>
              <div className="mt-2 flex items-end gap-2 text-[#123F3D]">
                <span className="font-lora text-[3.1rem] font-bold leading-none">40.2</span>
                <span className="pb-1 text-lg font-semibold">kg CO₂e</span>
              </div>
              <p className="mt-5 text-sm text-[#6a817d]">
                {isZh ? '基线' : 'Baseline'}
                <br />
                <span className="text-base font-semibold text-[#4f6f69]">2024</span>
              </p>
              <div className="mt-5 inline-flex items-center gap-2 bg-[#edf6ee] px-3 py-1.5 text-sm font-semibold text-[#2f7f62]">
                <span className="text-base leading-none">▼</span>
                <span>{isZh ? '较 2023 年下降 28%' : '28% vs. 2023'}</span>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div
                className="relative h-40 w-40 rounded-full"
                style={{
                  background:
                    'conic-gradient(#0f5e57 0 6%, #bfd3c2 6% 20%, #dce7da 20% 100%)',
                }}
              >
                <div className="absolute inset-[22%] bg-white" />
              </div>
              <div className="space-y-4 text-sm text-[#4f6f69]">
                {[
                  { label: 'Scope 1', value: '6%', color: '#0f5e57' },
                  { label: 'Scope 2', value: '14%', color: '#bfd3c2' },
                  { label: 'Scope 3', value: '80%', color: '#dce7da' },
                ].map((item) => (
                  <div key={item.label} className="flex min-w-[90px] items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: item.color }} />
                      <span>{item.label}</span>
                    </div>
                    <span className="font-semibold text-[#5b756f]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="border border-[#d3ddd4] bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(245,247,242,0.95))] p-5">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 place-items-center bg-[#0d4b48] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#426864]">
                  {isZh ? '审计包' : 'Audit Package'}
                </p>
                <h3 className="mt-2 text-[1.4rem] font-semibold leading-tight text-[#123F3D]">
                  {isZh ? '验证就绪' : 'Verification-Ready'}
                </h3>
                <p className="mt-1 text-sm text-[#5f7672]">
                  {isZh ? '关键检查已全部通过' : 'All key checks passed'}
                </p>
              </div>
            </div>
          </div>

          <div className="border border-[#d3ddd4] bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(245,247,242,0.95))] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#426864]">
              {isZh ? '信任基础' : 'Trust foundation'}
            </p>
            <div className="mt-5 grid grid-cols-5 gap-3">
              {checks.map((check) => (
                <div key={check} className="text-center">
                  <div className="mx-auto grid h-9 w-9 place-items-center rounded-full border border-[#c8d7cd] bg-[#f4faf5] text-[#2e8b63]">
                    <span className="text-sm">✓</span>
                  </div>
                  <p className="mt-2 text-[11px] leading-4 text-[#4f6f69]">{check}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
