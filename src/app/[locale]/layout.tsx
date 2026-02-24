import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { HtmlDir } from '@/components/ui/html-dir';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: { locale: 'fa' | 'en' } }) {
  const { locale } = params;
  if (!routing.locales.includes(locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider>
        <HtmlDir locale={locale} />
        <div className={locale === 'fa' ? 'font-[var(--font-fa)]' : 'font-[var(--font-en)]'}>{children}</div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
