'use client';

import { useState } from 'react';

type ConsultantPartnerApplicationFormProps = {
  language: 'en' | 'zh';
};

const industryOptions = {
  en: [
    'Manufacturing',
    'Textiles / Apparel',
    'Food & Beverage',
    'Electronics',
    'Consumer goods',
    'Logistics',
    'Automotive',
    'Chemicals / Materials',
    'Construction / Building products',
    'Other',
  ],
  zh: [
    '制造业',
    '纺织 / 服装',
    '食品饮料',
    '电子',
    '消费品',
    '物流',
    '汽车',
    '化工 / 材料',
    '建筑 / 建材',
    '其他',
  ],
} as const;

const projectTypeOptions = {
  en: ['PCF', 'CCF', 'Scope 3', 'EPD', 'Supplier data', 'Project carbon', 'LCA', 'Other'],
  zh: ['PCF', 'CCF', 'Scope 3', 'EPD', '供应商数据', '项目碳核算', 'LCA', '其他'],
} as const;

export default function ConsultantPartnerApplicationForm({
  language,
}: ConsultantPartnerApplicationFormProps) {
  const isZh = language === 'zh';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    countryRegion: '',
    consultantType: 'carbon',
    teamSize: '',
    expectedProjectsNext3Months: '',
    wantsReferralAccess: false,
    website: '',
    linkedin: '',
    message: '',
  });
  const [clientIndustries, setClientIndustries] = useState<string[]>([]);
  const [projectTypes, setProjectTypes] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');

  function toggleValue(list: string[], value: string, setter: (next: string[]) => void) {
    if (list.includes(value)) {
      setter(list.filter((item) => item !== value));
    } else {
      setter([...list, value]);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitState('idle');

    try {
      const response = await fetch('/api/consultant-partner/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          clientIndustries,
          projectTypes,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || 'Submission failed');
      }

      setSubmitState('success');
      setSubmitMessage(
        isZh
          ? '申请已提交。我们会根据你的地区、项目类型和合作适配度尽快联系你。'
          : 'Application submitted. We will review your region, project mix, and fit, then get back to you soon.'
      );
      setFormData({
        name: '',
        email: '',
        company: '',
        countryRegion: '',
        consultantType: 'carbon',
        teamSize: '',
        expectedProjectsNext3Months: '',
        wantsReferralAccess: false,
        website: '',
        linkedin: '',
        message: '',
      });
      setClientIndustries([]);
      setProjectTypes([]);
    } catch (error) {
      setSubmitState('error');
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : isZh
            ? '提交失败，请稍后再试。'
            : 'Submission failed. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const consultantTypeOptions = [
    { value: 'carbon', label: isZh ? '碳顾问' : 'Carbon consultant' },
    { value: 'esg', label: isZh ? 'ESG 顾问' : 'ESG consultant' },
    { value: 'lca', label: isZh ? 'LCA 顾问' : 'LCA consultant' },
    { value: 'sustainability', label: isZh ? '可持续顾问' : 'Sustainability advisor' },
    { value: 'boutique_firm', label: isZh ? '小型咨询公司' : 'Boutique consulting firm' },
    { value: 'other', label: isZh ? '其他' : 'Other' },
  ];

  const teamSizeOptions = [
    isZh ? '1 人' : 'Solo',
    isZh ? '2-5 人' : '2-5 people',
    isZh ? '6-15 人' : '6-15 people',
    isZh ? '16-50 人' : '16-50 people',
    isZh ? '50+ 人' : '50+ people',
  ];

  const projectVolumeOptions = [
    isZh ? '1-2 个项目' : '1-2 projects',
    isZh ? '3-5 个项目' : '3-5 projects',
    isZh ? '6-10 个项目' : '6-10 projects',
    isZh ? '10+ 个项目' : '10+ projects',
  ];

  return (
    <form onSubmit={handleSubmit} className="cs-glass-panel p-6 sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-[#123F3D]">{isZh ? '姓名' : 'Name'}</span>
          <input
            required
            value={formData.name}
            onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
            className="w-full border border-[#d7ddd6] bg-[#FBF9F4] px-4 py-3 text-sm text-[#123F3D] outline-none transition focus:border-[#123F3D]"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-[#123F3D]">{isZh ? '邮箱' : 'Email'}</span>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
            className="w-full border border-[#d7ddd6] bg-[#FBF9F4] px-4 py-3 text-sm text-[#123F3D] outline-none transition focus:border-[#123F3D]"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-[#123F3D]">{isZh ? '公司 / 咨询机构名称' : 'Company / consultancy name'}</span>
          <input
            required
            value={formData.company}
            onChange={(event) => setFormData((current) => ({ ...current, company: event.target.value }))}
            className="w-full border border-[#d7ddd6] bg-[#FBF9F4] px-4 py-3 text-sm text-[#123F3D] outline-none transition focus:border-[#123F3D]"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-[#123F3D]">{isZh ? '国家 / 地区' : 'Country / region'}</span>
          <input
            required
            value={formData.countryRegion}
            onChange={(event) => setFormData((current) => ({ ...current, countryRegion: event.target.value }))}
            className="w-full border border-[#d7ddd6] bg-[#FBF9F4] px-4 py-3 text-sm text-[#123F3D] outline-none transition focus:border-[#123F3D]"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-[#123F3D]">{isZh ? '顾问类型' : 'Consultant type'}</span>
          <select
            required
            value={formData.consultantType}
            onChange={(event) => setFormData((current) => ({ ...current, consultantType: event.target.value }))}
            className="w-full border border-[#d7ddd6] bg-[#FBF9F4] px-4 py-3 text-sm text-[#123F3D] outline-none transition focus:border-[#123F3D]"
          >
            {consultantTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-[#123F3D]">{isZh ? '团队体量' : 'Team size'}</span>
          <select
            required
            value={formData.teamSize}
            onChange={(event) => setFormData((current) => ({ ...current, teamSize: event.target.value }))}
            className="w-full border border-[#d7ddd6] bg-[#FBF9F4] px-4 py-3 text-sm text-[#123F3D] outline-none transition focus:border-[#123F3D]"
          >
            <option value="">{isZh ? '请选择' : 'Select one'}</option>
            {teamSizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 grid gap-6">
        <div className="space-y-3">
          <p className="text-sm font-medium text-[#123F3D]">{isZh ? '你主要服务哪些客户行业？' : 'Which client industries do you mainly serve?'}</p>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {industryOptions[language].map((option) => (
              <label key={option} className="flex items-center gap-3 border border-[#d7ddd6] bg-[#FBF9F4] px-4 py-3 text-sm text-[#486662]">
                <input
                  type="checkbox"
                  checked={clientIndustries.includes(option)}
                  onChange={() => toggleValue(clientIndustries, option, setClientIndustries)}
                  className="h-4 w-4 accent-[#123F3D]"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-[#123F3D]">{isZh ? '你主要做哪些项目类型？' : 'Which project types do you mainly deliver?'}</p>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {projectTypeOptions[language].map((option) => (
              <label key={option} className="flex items-center gap-3 border border-[#d7ddd6] bg-[#FBF9F4] px-4 py-3 text-sm text-[#486662]">
                <input
                  type="checkbox"
                  checked={projectTypes.includes(option)}
                  onChange={() => toggleValue(projectTypes, option, setProjectTypes)}
                  className="h-4 w-4 accent-[#123F3D]"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-[#123F3D]">{isZh ? '未来 3 个月预计项目数' : 'Expected client projects in the next 3 months'}</span>
            <select
              required
              value={formData.expectedProjectsNext3Months}
              onChange={(event) =>
                setFormData((current) => ({ ...current, expectedProjectsNext3Months: event.target.value }))
              }
              className="w-full border border-[#d7ddd6] bg-[#FBF9F4] px-4 py-3 text-sm text-[#123F3D] outline-none transition focus:border-[#123F3D]"
            >
              <option value="">{isZh ? '请选择' : 'Select one'}</option>
              {projectVolumeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <div className="space-y-2">
            <span className="text-sm font-medium text-[#123F3D]">{isZh ? '是否希望开通推荐合作资格？' : 'Do you want referral partner access?'}</span>
            <label className="flex items-center gap-3 border border-[#d7ddd6] bg-[#FBF9F4] px-4 py-3 text-sm text-[#486662]">
              <input
                type="checkbox"
                checked={formData.wantsReferralAccess}
                onChange={(event) =>
                  setFormData((current) => ({ ...current, wantsReferralAccess: event.target.checked }))
                }
                className="h-4 w-4 accent-[#123F3D]"
              />
              <span>{isZh ? '希望同步了解 referral 合作机制' : 'Yes, I want referral partner access as well'}</span>
            </label>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-[#123F3D]">{isZh ? '官网（可选）' : 'Website (optional)'}</span>
            <input
              value={formData.website}
              onChange={(event) => setFormData((current) => ({ ...current, website: event.target.value }))}
              className="w-full border border-[#d7ddd6] bg-[#FBF9F4] px-4 py-3 text-sm text-[#123F3D] outline-none transition focus:border-[#123F3D]"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-medium text-[#123F3D]">{isZh ? 'LinkedIn（可选）' : 'LinkedIn (optional)'}</span>
            <input
              value={formData.linkedin}
              onChange={(event) => setFormData((current) => ({ ...current, linkedin: event.target.value }))}
              className="w-full border border-[#d7ddd6] bg-[#FBF9F4] px-4 py-3 text-sm text-[#123F3D] outline-none transition focus:border-[#123F3D]"
            />
          </label>
        </div>

        <label className="space-y-2">
          <span className="text-sm font-medium text-[#123F3D]">
            {isZh ? '补充说明（当前瓶颈 / 典型项目 / 你希望怎么合作）' : 'Anything else we should know? (current bottleneck / typical projects / how you want to work with us)'}
          </span>
          <textarea
            rows={5}
            value={formData.message}
            onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
            className="w-full border border-[#d7ddd6] bg-[#FBF9F4] px-4 py-3 text-sm text-[#123F3D] outline-none transition focus:border-[#123F3D]"
          />
        </label>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center border border-[#123F3D] bg-[#123F3D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f4746] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (isZh ? '提交中...' : 'Submitting...') : isZh ? '提交申请' : 'Submit application'}
        </button>
        {submitMessage ? (
          <p className={`text-sm ${submitState === 'error' ? 'text-[#9d3b3b]' : 'text-[#456864]'}`}>{submitMessage}</p>
        ) : null}
      </div>
    </form>
  );
}
