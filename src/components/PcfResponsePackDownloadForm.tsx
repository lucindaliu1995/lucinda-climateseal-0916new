'use client';

import { Check, Download } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import type { Language } from '@/lib/i18n';
import { getTranslationLocale } from '@/lib/language';
import { trackEvent } from '@/lib/analytics';
import { translations } from '@/lib/i18n';

type PcfResponsePackDownloadFormProps = {
  language: Language;
};

const DOWNLOAD_URL = '/downloads/climateseal-pcf-3-day-response-pack.pdf';

export default function PcfResponsePackDownloadForm({ language }: PcfResponsePackDownloadFormProps) {
  const copy = translations[getTranslationLocale(language)].resourcesPage.pcfResponsePack.form;
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    role: '',
    industry: '',
    marketingOptIn: false,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  function updateField(field: keyof typeof formData, value: string | boolean) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/request-pcf-response-pack', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Response pack request failed');
      }

      setStatus('success');
      trackEvent('pcf_pack_form_submit', { marketing_opt_in: formData.marketingOptIn });
      if (formData.marketingOptIn) {
        trackEvent('newsletter_subscribe', { source: 'pcf_response_pack' });
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="border-t border-[#c8d7cf] pt-6" role="status">
        <div className="flex items-start gap-3 text-[#215b57]">
          <Check className="mt-0.5 h-5 w-5 shrink-0" />
          <p className="text-sm leading-6">{copy.success}</p>
        </div>
        <a
          href={DOWNLOAD_URL}
          download
          data-analytics-event="pcf_pack_download"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-[#215b57] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#123f3d]"
        >
          {copy.download}
          <Download className="h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border-t border-[#c8d7cf] pt-6">
      <div>
        <label htmlFor="pcf-pack-email" className="mb-1.5 block text-xs font-semibold text-[#385c56]">{copy.email}</label>
        <input
          id="pcf-pack-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(event) => updateField('email', event.target.value)}
          autoComplete="email"
          required
          className="min-h-11 w-full border border-[#b8c9c3] bg-white px-3.5 text-sm text-[#123f3d] outline-none transition placeholder:text-[#8a9b96] focus:border-[#215b57] focus:ring-2 focus:ring-[#b9d9cc]"
        />
      </div>

      <div>
        <label htmlFor="pcf-pack-company" className="mb-1.5 block text-xs font-semibold text-[#385c56]">{copy.company}</label>
        <input
          id="pcf-pack-company"
          name="company"
          type="text"
          value={formData.company}
          onChange={(event) => updateField('company', event.target.value)}
          autoComplete="organization"
          required
          className="min-h-11 w-full border border-[#b8c9c3] bg-white px-3.5 text-sm text-[#123f3d] outline-none transition placeholder:text-[#8a9b96] focus:border-[#215b57] focus:ring-2 focus:ring-[#b9d9cc]"
        />
      </div>

      <div>
        <label htmlFor="pcf-pack-role" className="mb-1.5 block text-xs font-semibold text-[#385c56]">{copy.role}</label>
        <input
          id="pcf-pack-role"
          name="role"
          type="text"
          value={formData.role}
          onChange={(event) => updateField('role', event.target.value)}
          autoComplete="organization-title"
          required
          className="min-h-11 w-full border border-[#b8c9c3] bg-white px-3.5 text-sm text-[#123f3d] outline-none transition placeholder:text-[#8a9b96] focus:border-[#215b57] focus:ring-2 focus:ring-[#b9d9cc]"
        />
      </div>

      <div>
        <label htmlFor="pcf-pack-industry" className="mb-1.5 block text-xs font-semibold text-[#385c56]">{copy.industry}</label>
        <input
          id="pcf-pack-industry"
          name="industry"
          type="text"
          value={formData.industry}
          onChange={(event) => updateField('industry', event.target.value)}
          className="min-h-11 w-full border border-[#b8c9c3] bg-white px-3.5 text-sm text-[#123f3d] outline-none transition placeholder:text-[#8a9b96] focus:border-[#215b57] focus:ring-2 focus:ring-[#b9d9cc]"
        />
      </div>

      <label className="flex items-start gap-2.5 text-xs leading-5 text-[#5e706d]">
        <input
          type="checkbox"
          checked={formData.marketingOptIn}
          onChange={(event) => updateField('marketingOptIn', event.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-[#215b57]"
        />
        <span>{copy.marketingOptIn}</span>
      </label>

      {status === 'error' && <p className="text-sm leading-6 text-[#a34a43]" role="alert">{copy.error}</p>}

      <p className="text-[11px] leading-5 text-[#6d7f7a]">
        {copy.privacyNote}{' '}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-[#215b57]">{copy.privacyLink}</Link>
      </p>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 bg-[#215b57] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123f3d] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? copy.submitting : copy.submit}
        {status !== 'submitting' && <Download className="h-4 w-4" />}
      </button>
    </form>
  );
}
