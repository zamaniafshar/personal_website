import Link from 'next/link';
import {notFound} from 'next/navigation';
import {MDXRemote} from 'next-mdx-remote/rsc';
import {getArticleBySlug} from '@/lib/articles';
import {Locale} from '@/i18n/config';

export default async function ArticlePage({params}: {params: {locale: Locale; slug: string}}) {
  try {
    const article = await getArticleBySlug(params.locale, params.slug);
    return (
      <main className="mx-auto max-w-3xl px-4 py-14">
        <Link href={`/${params.locale}`} className="text-sm text-emerald-300">← Back</Link>
        <h1 className="mt-4 text-4xl font-bold">{article.meta.title}</h1>
        <p className="mt-2 text-slate-400">{article.meta.date}</p>
        <article className="prose prose-invert mt-8 max-w-none">
          <MDXRemote source={article.content} />
        </article>
      </main>
    );
  } catch {
    notFound();
  }
}
