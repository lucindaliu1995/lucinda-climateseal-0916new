'use client';

import { useState } from 'react';

type Props = {
  isZh: boolean;
};

export default function ReferralProgramContactForm({ isZh }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const labels = isZh
    ? {
        title: '预约演示，获得推荐资格',
        body: '填写信息后，我们会安排一场简短演示，帮助你判断 ClimateSeal 是否适合你网络中的顾问、品牌团队或制造企业。',
        name: '姓名',
        email: '邮箱',
        phone: '电话',
        company: '公司 / 机构',
        industry: '行业',
        message: '留言',
        submit: '预约演示',
        submitting: '提交中...',
        success: '提交成功，我们会尽快联系你。',
        error: '提交失败，请稍后重试。',
        validation: '请完整填写必填信息。',
        privacy: '提交表单即表示你同意我们根据隐私政策处理你的信息。',
        placeholders: {
          name: '请输入你的姓名',
          email: '请输入你的邮箱',
          phone: '请输入你的电话',
          company: '请输入公司或机构名称',
          industry: '请选择你的行业',
          message: '例如：我想先看演示，并了解推荐计划是否适合我的网络。',
        },
      }
    : {
        title: 'Book a demo to become eligible',
        body: 'Fill this out and we will arrange a short demo so you can see the product, understand who it fits, and start making qualified referrals with confidence.',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company / organization',
        industry: 'Industry',
        message: 'Message',
        submit: 'Book a demo',
        submitting: 'Submitting...',
        success: 'Your request was sent successfully. We will reach out soon.',
        error: 'Something went wrong. Please try again.',
        validation: 'Please complete all required fields.',
        privacy: 'By submitting this form, you agree that we may process your information in line with our privacy policy.',
        placeholders: {
          name: 'Enter your name',
          email: 'Enter your email',
          phone: 'Enter your phone number',
          company: 'Enter your company or organization',
          industry: 'Select your industry',
          message: 'For example: I would like to see the demo and understand whether the referral program is a fit for my network.',
        },
      };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.industry || !formData.message) {
      setSubmitMessage(labels.validation);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.message || labels.success);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          message: '',
        });
      } else {
        setSubmitMessage(data.message || labels.error);
      }
    } catch (error) {
      console.error('Referral form submission error:', error);
      setSubmitMessage(labels.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cs-glass-panel p-6 sm:p-8">
      <p className="cs-section-eyebrow">{isZh ? 'Book a demo' : 'Book a demo'}</p>
      <h3 className="mt-3 font-lora text-balance text-[1.8rem] font-semibold leading-tight text-[#123F3D] sm:text-[2rem]">
        {labels.title}
      </h3>
      <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#5f7672]">
        {labels.body}
      </p>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-medium text-black sm:text-sm">{labels.name}*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full rounded-[0.5rem] border border-[#d7ddd6] bg-[#fbf9f4] p-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent-strong)]"
              placeholder={labels.placeholders.name}
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-black sm:text-sm">{labels.email}*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-[0.5rem] border border-[#d7ddd6] bg-[#fbf9f4] p-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent-strong)]"
              placeholder={labels.placeholders.email}
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-black sm:text-sm">{labels.phone}*</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full rounded-[0.5rem] border border-[#d7ddd6] bg-[#fbf9f4] p-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent-strong)]"
              placeholder={labels.placeholders.phone}
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-black sm:text-sm">{labels.company}*</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full rounded-[0.5rem] border border-[#d7ddd6] bg-[#fbf9f4] p-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent-strong)]"
              placeholder={labels.placeholders.company}
              required
            />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-black sm:text-sm">{labels.industry}*</label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleInputChange}
            className="w-full rounded-[0.5rem] border border-[#d7ddd6] bg-[#fbf9f4] p-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent-strong)]"
            required
          >
            <option value="">{labels.placeholders.industry}</option>
            <option value="consulting">{isZh ? '咨询服务' : 'Consulting'}</option>
            <option value="manufacturing">{isZh ? '制造业' : 'Manufacturing'}</option>
            <option value="sustainability">{isZh ? '可持续 / ESG' : 'Sustainability / ESG'}</option>
            <option value="procurement">{isZh ? '采购 / 供应链' : 'Procurement / Supply chain'}</option>
            <option value="software">{isZh ? '软件 / 科技' : 'Software / Technology'}</option>
            <option value="other">{isZh ? '其他' : 'Other'}</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-black sm:text-sm">{labels.message}*</label>
          <textarea
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full resize-none rounded-[0.5rem] border border-[#d7ddd6] bg-[#fbf9f4] p-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent-strong)]"
            placeholder={labels.placeholders.message}
            required
          />
        </div>

        {submitMessage && (
          <div
            className={`rounded-[0.5rem] p-3 text-sm ${
              submitMessage.includes('成功') || submitMessage.toLowerCase().includes('success')
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {submitMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full rounded-[0.5rem] py-3 text-sm font-semibold transition duration-300 ${
            isSubmitting
              ? 'cursor-not-allowed bg-gray-400 text-gray-600'
              : 'bg-[var(--brand-accent-strong)] text-white hover:bg-[color:rgba(18,63,61,0.88)]'
          }`}
        >
          {isSubmitting ? labels.submitting : labels.submit}
        </button>

        <p className="text-center text-xs leading-relaxed text-gray-600">
          {labels.privacy}
        </p>
      </form>
    </div>
  );
}
