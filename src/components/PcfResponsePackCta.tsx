import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import PcfResponsePackDownloadForm from '@/components/PcfResponsePackDownloadForm';
import type { Language } from '@/lib/i18n';
import { getTranslationLocale } from '@/lib/language';
import { translations } from '@/lib/i18n';

type PcfResponsePackCtaProps = {
  language: Language;
  compact?: boolean;
};

export default function PcfResponsePackCta({ language, compact = false }: PcfResponsePackCtaProps) {
  const copy = translations[getTranslationLocale(language)].resourcesPage.pcfResponsePack;

  if (compact) {
    return (
      <aside className="mt-12 border-y border-[#c8d7cf] bg-[#f7f3ea] px-5 py-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-7">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#58716d]">{copy.eyebrow}</p>
          <h2 className="mt-2 font-lora text-[1.45rem] font-semibold leading-tight text-[#123f3d]">{copy.title}</h2>
        </div>
        <Link
          href="#pcf-response-pack"
          className="mt-5 inline-flex shrink-0 items-center justify-center gap-2 bg-[#215b57] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123f3d] sm:mt-0"
        >
          {copy.cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </aside>
    );
  }

  return (
    <aside id="pcf-response-pack" className="my-12 border border-[#c8d7cf] bg-[#f7f3ea] px-5 py-7 sm:px-8 sm:py-9">
      <div className="grid gap-7 md:grid-cols-[minmax(0,1fr)_minmax(240px,0.72fr)] md:items-center md:gap-10">
        <div>
          <div className="flex items-center gap-2 text-[#215b57]">
            <FileText className="h-4 w-4" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em]">{copy.eyebrow}</p>
          </div>
          <h2 className="mt-3 font-lora text-[1.75rem] font-semibold leading-tight text-[#123f3d] sm:text-[2rem]">{copy.title}</h2>
          <p className="mt-3 text-[15px] leading-7 text-[#5e706d]">{copy.description}</p>
          <ul className="mt-5 grid gap-2 text-sm leading-6 text-[#385c56] sm:grid-cols-2">
            {copy.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#6a9c8c]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:border-l md:border-[#c8d7cf] md:pl-8">
          <PcfResponsePackDownloadForm language={language} />
        </div>
      </div>
    </aside>
  );
}
