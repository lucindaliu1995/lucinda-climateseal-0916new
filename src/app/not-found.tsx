import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { translations } from '@/lib/i18n';
import { getTranslationLocale, resolveLanguage } from '@/lib/language';

async function getCopy() {
  const language = resolveLanguage((await headers()).get('x-language'));
  return translations[getTranslationLocale(language)].notFound;
}

export async function generateMetadata(): Promise<Metadata> {
  const copy = await getCopy();
  return {
    title: { absolute: `${copy.title} | Climate Seal` },
    description: copy.description,
    robots: { index: false, follow: true },
    alternates: { canonical: null, languages: {} },
    openGraph: null,
    twitter: null,
  };
}

export default async function NotFound() {
  const copy = await getCopy();
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 py-24 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#58716d]">404</p>
        <h1 className="mt-4 font-lora text-4xl font-bold text-[#123f3d]">{copy.title}</h1>
        <p className="mt-4 text-base text-[#5e706d]">{copy.description}</p>
        <Link href="/" className="mt-7 inline-flex border border-[#123f3d] px-5 py-3 text-sm font-semibold text-[#123f3d]">
          {copy.returnHome}
        </Link>
      </div>
    </section>
  );
}
