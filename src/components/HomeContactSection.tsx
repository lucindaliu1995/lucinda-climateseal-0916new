'use client';

import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HomeContactSection() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
    referralCode: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.industry || !formData.message) {
      setSubmitMessage(t.contact.messages.validation);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.message || t.contact.messages.success);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          message: '',
          referralCode: '',
        });
      } else {
        setSubmitMessage(data.message || t.contact.messages.error);
      }
    } catch {
      setSubmitMessage(t.contact.messages.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#103b39] py-14 text-white sm:py-16 lg:py-20"
      data-theme="contact"
      data-section="contact-form"
      data-category="conversion"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-14">
          <div className="pt-1 lg:pt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b9ddd5]">
              {language === 'zh' ? '准备看看 Climate Seal？' : 'Ready to see Climate Seal?'}
            </p>
            <h2 className="mt-6 max-w-xl font-lora text-balance text-[2.35rem] font-semibold leading-[1.04] text-white sm:text-[2.9rem] lg:text-[3.25rem]">
              {language === 'zh' ? '看看 AI 如何加速你的碳报告交付' : 'See how AI can accelerate your carbon reporting workflow'}
            </h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-white/72 sm:text-[18px]">
              {language === 'zh'
                ? '留下你的信息，我们会联系你，了解你的 PCF、Scope 3 或供应链碳数据需求，并安排一次简短演示。'
                : "Leave your details and we'll contact you as soon as possible :)"}
            </p>

            <div className="mt-9 grid gap-4 border-t border-white/12 pt-6 text-sm text-white/72 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9bc7bd]">Email</p>
                <p className="mt-2 break-words font-medium text-white">xuguang.ma@climateseal.net</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9bc7bd]">Phone</p>
                <p className="mt-2 font-medium text-white">+86 15652618365</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9bc7bd]">Locations</p>
                <p className="mt-2 font-medium text-white">Beijing, Germany, Dubai, Singapore</p>
              </div>
            </div>
          </div>

          <div className="self-start border border-white/12 bg-[#f8f6f1] p-4 text-[#123F3D] shadow-[0_24px_56px_rgba(0,0,0,0.18)] sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-3" data-form="contact-form" data-section="contact-form">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#123F3D] sm:text-sm">{t.contact.form.name}*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-[#d7ddd6] bg-white px-3 py-2.5 text-sm text-[#123F3D] placeholder-[#8b9a96] focus:border-[#215b57] focus:outline-none focus:ring-2 focus:ring-[#d6e8df]"
                    placeholder={t.contact.form.placeholder.name}
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#123F3D] sm:text-sm">{t.contact.form.email}*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-[#d7ddd6] bg-white px-3 py-2.5 text-sm text-[#123F3D] placeholder-[#8b9a96] focus:border-[#215b57] focus:outline-none focus:ring-2 focus:ring-[#d6e8df]"
                    placeholder={t.contact.form.placeholder.email}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#123F3D] sm:text-sm">{t.contact.form.phone}*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-[#d7ddd6] bg-white px-3 py-2.5 text-sm text-[#123F3D] placeholder-[#8b9a96] focus:border-[#215b57] focus:outline-none focus:ring-2 focus:ring-[#d6e8df]"
                    placeholder={t.contact.form.placeholder.phone}
                    required
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#123F3D] sm:text-sm">{t.contact.form.company}*</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full border border-[#d7ddd6] bg-white px-3 py-2.5 text-sm text-[#123F3D] placeholder-[#8b9a96] focus:border-[#215b57] focus:outline-none focus:ring-2 focus:ring-[#d6e8df]"
                    placeholder={t.contact.form.placeholder.company}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#123F3D] sm:text-sm">{t.contact.form.industry || '行业'}*</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="max-h-32 w-full overflow-y-auto border border-[#d7ddd6] bg-white px-3 py-2.5 text-sm text-[#123F3D] focus:border-[#215b57] focus:outline-none focus:ring-2 focus:ring-[#d6e8df]"
                  required
                >
                  <option value="">{t.contact.form.placeholder?.industry || '请选择您的行业'}</option>
                  <option value="automotive">{t.contact.form.industries?.automotive || '汽车制造业'}</option>
                  <option value="electronics">{t.contact.form.industries?.electronics || '电子电器'}</option>
                  <option value="textiles">{t.contact.form.industries?.textiles || '纺织服装'}</option>
                  <option value="chemicals">{t.contact.form.industries?.chemicals || '化工化学'}</option>
                  <option value="food-beverage">{t.contact.form.industries?.foodBeverage || '食品饮料'}</option>
                  <option value="construction">{t.contact.form.industries?.construction || '建筑建材'}</option>
                  <option value="metals">{t.contact.form.industries?.metals || '钢铁金属'}</option>
                  <option value="plastics">{t.contact.form.industries?.plastics || '塑料橡胶'}</option>
                  <option value="packaging">{t.contact.form.industries?.packaging || '包装印刷'}</option>
                  <option value="pharmaceuticals">{t.contact.form.industries?.pharmaceuticals || '医药医疗'}</option>
                  <option value="energy">{t.contact.form.industries?.energy || '能源电力'}</option>
                  <option value="manufacturing">{t.contact.form.industries?.manufacturing || '机械制造'}</option>
                  <option value="furniture">{t.contact.form.industries?.furniture || '家具家居'}</option>
                  <option value="cosmetics">{t.contact.form.industries?.cosmetics || '美妆个护'}</option>
                  <option value="toys">{t.contact.form.industries?.toys || '玩具用品'}</option>
                  <option value="agriculture">{t.contact.form.industries?.agriculture || '农业食品'}</option>
                  <option value="transportation">{t.contact.form.industries?.transportation || '交通运输'}</option>
                  <option value="retail">{t.contact.form.industries?.retail || '零售贸易'}</option>
                  <option value="other">{t.contact.form.industries?.other || '其他'}</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#123F3D] sm:text-sm">{t.contact.form.message}*</label>
                <textarea
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full resize-none border border-[#d7ddd6] bg-white px-3 py-2.5 text-sm text-[#123F3D] placeholder-[#8b9a96] focus:border-[#215b57] focus:outline-none focus:ring-2 focus:ring-[#d6e8df]"
                  placeholder={t.contact.form.placeholder.message}
                  required
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#123F3D] sm:text-sm">
                  {language === 'zh' ? '推荐码（可选）' : 'Referral code (optional)'}
                </label>
                <input
                  type="text"
                  name="referralCode"
                  value={formData.referralCode}
                  onChange={handleInputChange}
                  className="w-full border border-[#d7ddd6] bg-white px-3 py-2.5 text-sm text-[#123F3D] placeholder-[#8b9a96] focus:border-[#215b57] focus:outline-none focus:ring-2 focus:ring-[#d6e8df]"
                  placeholder={language === 'zh' ? '如果有人推荐你，请输入推荐码' : 'Enter a referral code if someone invited you'}
                />
              </div>

              {submitMessage && (
                <div className={`rounded-lg p-2 text-sm ${
                  submitMessage.includes('成功') || submitMessage.toLowerCase().includes('success')
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 text-center text-sm font-semibold transition duration-300 ${
                  isSubmitting
                    ? 'cursor-not-allowed bg-gray-400 text-gray-600'
                    : 'bg-[#215b57] text-white hover:bg-[#174743]'
                }`}
              >
                {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
              </button>

              <div className="mt-4 text-center">
                <p className="text-xs leading-relaxed text-gray-600">
                  {t.contact.form.privacyDisclaimer}{' '}
                  <Link
                    href="/privacy"
                    className="text-[rgb(0,52,50)] underline transition-colors hover:text-[rgb(0,42,40)]"
                  >
                    {language === 'zh' ? '隐私政策' : 'Privacy Policy'}
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
