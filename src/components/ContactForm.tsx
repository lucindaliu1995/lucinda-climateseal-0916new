'use client';

import Link from 'next/link';
import { ChangeEvent, FormEvent, useId, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { trackEvent } from '@/lib/analytics';

type ContactFormProps = {
  source: 'homepage_contact' | 'contact_page';
};

export default function ContactForm({ source }: ContactFormProps) {
  const { t, language } = useLanguage();
  const formId = useId();
  const [submitSucceeded, setSubmitSucceeded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
    referralCode: '',
  });
  const submittingRef = useRef(false);
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
    if (submittingRef.current) return;
    setSubmitSucceeded(false);

    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      setSubmitMessage(t.contact.messages.validation);
      return;
    }

    submittingRef.current = true;
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok && data.success === true) {
        setSubmitSucceeded(true);
        trackEvent('contact_form_submit', { form: source });
        trackEvent('demo_request_submit', { form: source });
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
        setSubmitMessage(data.message || data.error || t.contact.messages.error);
      }
    } catch {
      setSubmitMessage(t.contact.messages.error);
    } finally {
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <div className="self-start border border-white/12 bg-[#f8f6f1] p-4 text-[#123F3D] shadow-[0_24px_56px_rgba(0,0,0,0.18)] sm:p-6">
      <form aria-busy={isSubmitting} onSubmit={handleSubmit} className="space-y-3" data-form="contact-form" data-section="contact-form">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor={`${formId}-name`} className="mb-1.5 block text-xs font-semibold text-[#123F3D] sm:text-sm">{t.contact.form.name}*</label>
            <input
              type="text"
              id={`${formId}-name`}
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-[#d7ddd6] bg-white px-3 py-2.5 text-sm text-[#123F3D] placeholder-[#8b9a96] focus:border-[#215b57] focus:outline-none focus:ring-2 focus:ring-[#d6e8df]"
              placeholder={t.contact.form.placeholder.name}
              required
            />
          </div>
          <div>
            <label htmlFor={`${formId}-email`} className="mb-1.5 block text-xs font-semibold text-[#123F3D] sm:text-sm">{t.contact.form.workEmail}*</label>
            <input
              type="email"
              id={`${formId}-email`}
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
            <label htmlFor={`${formId}-phone`} className="mb-1.5 block text-xs font-semibold text-[#123F3D] sm:text-sm">{t.contact.form.phone} {t.contact.form.optional}</label>
            <input
              type="tel"
              id={`${formId}-phone`}
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border border-[#d7ddd6] bg-white px-3 py-2.5 text-sm text-[#123F3D] placeholder-[#8b9a96] focus:border-[#215b57] focus:outline-none focus:ring-2 focus:ring-[#d6e8df]"
              placeholder={t.contact.form.placeholder.phone}
            />
          </div>
          <div>
            <label htmlFor={`${formId}-company`} className="mb-1.5 block text-xs font-semibold text-[#123F3D] sm:text-sm">{t.contact.form.company}*</label>
            <input
              type="text"
              id={`${formId}-company`}
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
          <label htmlFor={`${formId}-industry`} className="mb-1.5 block text-xs font-semibold text-[#123F3D] sm:text-sm">{t.contact.form.industryOrRole} {t.contact.form.optional}</label>
          <select
            id={`${formId}-industry`}
            name="industry"
            value={formData.industry}
            onChange={handleInputChange}
            className="max-h-32 w-full overflow-y-auto border border-[#d7ddd6] bg-white px-3 py-2.5 text-sm text-[#123F3D] focus:border-[#215b57] focus:outline-none focus:ring-2 focus:ring-[#d6e8df]"
          >
            <option value="">{t.contact.form.placeholder?.industry || '请选择您的行业'}</option>
            <option value="consulting">{t.contact.form.industries.consulting}</option>
            <option value="procurement">{t.contact.form.industries.procurement}</option>
            <option value="automotive">{t.contact.form.industries.automotive}</option>
            <option value="electronics">{t.contact.form.industries.electronics}</option>
            <option value="textiles">{t.contact.form.industries.textiles}</option>
            <option value="chemicals">{t.contact.form.industries.chemicals}</option>
            <option value="food-beverage">{t.contact.form.industries.foodBeverage}</option>
            <option value="construction">{t.contact.form.industries.construction}</option>
            <option value="metals">{t.contact.form.industries.metals}</option>
            <option value="plastics">{t.contact.form.industries.plastics}</option>
            <option value="packaging">{t.contact.form.industries.packaging}</option>
            <option value="pharmaceuticals">{t.contact.form.industries.pharmaceuticals}</option>
            <option value="energy">{t.contact.form.industries.energy}</option>
            <option value="manufacturing">{t.contact.form.industries.manufacturing}</option>
            <option value="furniture">{t.contact.form.industries.furniture}</option>
            <option value="cosmetics">{t.contact.form.industries.cosmetics}</option>
            <option value="toys">{t.contact.form.industries.toys}</option>
            <option value="agriculture">{t.contact.form.industries.agriculture}</option>
            <option value="transportation">{t.contact.form.industries.transportation}</option>
            <option value="retail">{t.contact.form.industries.retail}</option>
            <option value="other">{t.contact.form.industries.other}</option>
          </select>
        </div>

        <div>
          <label htmlFor={`${formId}-message`} className="mb-1.5 block text-xs font-semibold text-[#123F3D] sm:text-sm">{t.contact.form.message} {t.contact.form.optional}</label>
          <textarea
            rows={3}
            id={`${formId}-message`}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full resize-none border border-[#d7ddd6] bg-white px-3 py-2.5 text-sm text-[#123F3D] placeholder-[#8b9a96] focus:border-[#215b57] focus:outline-none focus:ring-2 focus:ring-[#d6e8df]"
            placeholder={t.contact.form.placeholder.message}
          />
        </div>

        <div>
          <label htmlFor={`${formId}-referralCode`} className="mb-1.5 block text-xs font-semibold text-[#123F3D] sm:text-sm">
            {language === 'zh' ? '推荐码（可选）' : 'Referral code (optional)'}
          </label>
          <input
            type="text"
            id={`${formId}-referralCode`}
            name="referralCode"
            value={formData.referralCode}
            onChange={handleInputChange}
            className="w-full border border-[#d7ddd6] bg-white px-3 py-2.5 text-sm text-[#123F3D] placeholder-[#8b9a96] focus:border-[#215b57] focus:outline-none focus:ring-2 focus:ring-[#d6e8df]"
            placeholder={language === 'zh' ? '如果有人推荐你，请输入推荐码' : 'Enter a referral code if someone invited you'}
          />
        </div>

        {submitMessage && (
          <div role={submitSucceeded ? 'status' : 'alert'} className={`rounded-lg p-2 text-sm ${
            submitSucceeded
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
  );
}
