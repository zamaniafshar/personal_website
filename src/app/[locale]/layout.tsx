import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {getMessages} from 'next-intl/server';
import {localeMeta, locales, type Locale} from '@/i18n/config';
import {ThemeScript} from '@/components/theme-script';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  if (!hasLocale(locales, params.locale)) notFound();
  const locale = params.locale as Locale;
  const messages = await getMessages();
  const dir = localeMeta[locale].dir;

  return (
    <>
      <script dangerouslySetInnerHTML={{__html: `document.documentElement.lang='${locale}';document.documentElement.dir='${dir}';`}} />
      <ThemeScript />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div className={locale === 'fa' ? 'font-[var(--font-fa)]' : 'font-[var(--font-en)]'}>{children}</div>
      </NextIntlClientProvider>
    </>
  );
}
