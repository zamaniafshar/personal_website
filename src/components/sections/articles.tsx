import { externalArticles } from '@/data/site';
import { getArticles } from '@/lib/articles';
import Link from 'next/link';

export async function ArticlesSection({ locale }: { locale: 'fa' | 'en' }) {
  const onsite = await getArticles(locale);
  return (
    <section id="articles" className="section">
      <h2 className="mb-6 text-3xl font-bold">{locale === 'fa' ? 'مقالات' : 'Articles'}</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="mb-3 text-lg font-semibold text-emerald-300">{locale === 'fa' ? 'داخل سایت' : 'On this site'}</h3>
          <div className="space-y-3">{onsite.map((a) => <Link key={a.slug} href={`/${locale}/articles/${a.slug}`} className="card block"><p className="font-semibold">{a.title}</p><p className="text-sm text-zinc-400">{a.excerpt}</p></Link>)}</div>
        </div>
        <div>
          <h3 className="mb-3 text-lg font-semibold text-emerald-300">{locale === 'fa' ? 'خارجی' : 'External'}</h3>
          <div className="space-y-3">{externalArticles.map((a) => <a key={a.title.en} href={a.url} className="card block"><p className="font-semibold">{a.title[locale]}</p><p className="text-sm text-zinc-400">{a.excerpt[locale]}</p></a>)}</div>
        </div>
      </div>
    </section>
  );
}
