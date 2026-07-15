import type { Language } from '@/lib/i18n';
import { DEFAULT_LANGUAGE } from '@/lib/i18n';

export const LANGUAGE_COOKIE = 'preferred-language';
export const LANGUAGE_HEADER = 'x-language';

// Only advertise languages that have complete, maintained website translations.
export const SUPPORTED_LANGUAGES: Language[] = ['en', 'zh'];

export const LANGUAGE_OPTIONS: Array<{
  code: Language;
  label: string;
  nativeLabel: string;
}> = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'zh', label: 'Chinese', nativeLabel: '中文' },
];

export function resolveLanguage(value?: string | null): Language {
  if (value && SUPPORTED_LANGUAGES.includes(value as Language)) {
    return value as Language;
  }
  return DEFAULT_LANGUAGE;
}

export function isChineseLanguage(language: Language): boolean {
  return language === 'zh';
}

export function getTranslationLocale(language: Language): 'en' | 'zh' {
  return isChineseLanguage(language) ? 'zh' : 'en';
}

export function buildLocalizedCanonical(
  canonical: string,
  language: Language,
  includeChinese = true
): string {
  return includeChinese && isChineseLanguage(language) ? `${canonical}?lang=zh` : canonical;
}

export function buildLanguageAlternates(
  canonical: string,
  includeChinese = true
): Record<string, string> {
  return {
    en: canonical,
    ...(includeChinese ? { zh: `${canonical}?lang=zh` } : {}),
    'x-default': canonical,
  };
}
