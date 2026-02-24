import { externalArticles } from '@/data/site';
import { getArticles } from '@/lib/articles';
import { ArticlesClientSection } from '@/components/sections/articles-client';

export async function ArticlesSection({ locale }: { locale: 'fa' | 'en' }) {
  const onsite = await getArticles(locale);

  return <ArticlesClientSection locale={locale} onsite={onsite} external={externalArticles} />;
}
