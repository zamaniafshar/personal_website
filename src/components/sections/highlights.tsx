import { highlights } from '@/data/site';

export function HighlightsSection({ locale }: { locale: 'fa' | 'en' }) {
  return (
    <section id="highlights" className="section">
      <h2 className="mb-6 text-3xl font-bold">{locale === 'fa' ? 'هایلایت‌ها' : 'Highlights'}</h2>
      <div className="grid gap-4 md:grid-cols-3">{highlights.map((h) => <article className="card text-center" key={h.en}><p className="text-lg font-semibold text-emerald-300">{h[locale]}</p></article>)}</div>
    </section>
  );
}
