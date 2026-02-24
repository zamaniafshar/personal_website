export const locales = ['fa', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fa';

export const localeMeta: Record<Locale, {dir: 'rtl' | 'ltr'; label: string}> = {
  fa: {dir: 'rtl', label: 'فارسی'},
  en: {dir: 'ltr', label: 'English'}
};
