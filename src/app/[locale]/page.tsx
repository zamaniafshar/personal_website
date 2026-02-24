import {getTranslations} from 'next-intl/server';
import {getArticles} from '@/lib/articles';
import {HomePage} from '@/components/home-page';
import {Locale} from '@/i18n/config';

export default async function LocaleHome({params}: {params: {locale: Locale}}) {
  const articles = await getArticles(params.locale);
  const t = await getTranslations();

  return <HomePage locale={params.locale} t={t} onsiteArticles={articles} />;
}
