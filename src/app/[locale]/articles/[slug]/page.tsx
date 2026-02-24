import { getArticleBySlug, getArticles } from '@/lib/articles';
import { notFound } from 'next/navigation';

export async function generateStaticParams({ params }: { params: { locale: 'fa' | 'en' } }) {
  const articles = await getArticles(params.locale);
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: { params: { locale: 'fa' | 'en'; slug: string } }) {
  try {
    const { content, meta } = await getArticleBySlug(params.locale, params.slug);

    return (
      <main className="section max-w-3xl">
        <a href={`/${params.locale}`} className="text-sm text-emerald-300">← {params.locale === 'fa' ? 'بازگشت' : 'Back'}</a>
        <h1 className="mt-4 text-4xl font-bold">{meta.title}</h1>
        <p className="mt-2 text-sm text-zinc-400">{meta.date}</p>
        <article className="mt-8 whitespace-pre-wrap leading-8 text-zinc-200">{content}</article>
      </main>
    );
  } catch {
    notFound();
  }
}
