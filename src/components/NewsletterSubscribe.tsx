'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { getTranslationLocale } from '@/lib/language';
import { translations, type Language } from '@/lib/i18n';
import { trackEvent } from '@/lib/analytics';

export default function NewsletterSubscribe({ language, source }: { language: Language; source: string }) {
  const copy = translations[getTranslationLocale(language)].resourcesPage.newsletter;
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });

      if (!response.ok) {
        throw new Error('Subscription request failed');
      }

      setEmail('');
      setStatus('success');
      trackEvent('newsletter_subscribe', { source });
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="border-y border-[#d7ddd6] bg-[#f7f3ea] px-4 py-12 sm:px-6 sm:py-14 lg:px-8" aria-labelledby="newsletter-title">
      <div className="mx-auto grid max-w-4xl gap-7 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)] md:items-center md:gap-12">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#58716d]">{copy.eyebrow}</p>
          <h2 id="newsletter-title" className="mt-3 font-lora text-[1.9rem] font-semibold leading-tight text-[#123f3d] sm:text-[2.2rem]">
            {copy.title}
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#5e706d]">{copy.description}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">{copy.emailLabel}</label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={copy.emailPlaceholder}
            autoComplete="email"
            required
            disabled={status === 'submitting' || status === 'success'}
            className="min-h-12 min-w-0 flex-1 border border-[#b8c9c3] bg-white px-4 text-[15px] text-[#123f3d] outline-none transition placeholder:text-[#8a9b96] focus:border-[#215b57] focus:ring-2 focus:ring-[#b9d9cc] disabled:bg-[#edf2ee]"
          />
          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-[#215b57] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123f3d] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'submitting' ? copy.submitting : copy.submit}
            {status === 'success' ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          </button>
        </form>

        {status !== 'idle' && (
          <p className={`text-sm md:col-start-2 ${status === 'success' ? 'text-[#215b57]' : status === 'error' ? 'text-[#a34a43]' : 'text-[#5e706d]'}`} role={status === 'error' ? 'alert' : 'status'}>
            {status === 'success' ? copy.success : status === 'error' ? copy.error : copy.submitting}
          </p>
        )}
      </div>
    </section>
  );
}
