import { nowSection } from '@/data/site';
import { getTranslations } from 'next-intl/server';

export async function NowSection({ locale }: { locale: 'fa' | 'en' }) {
  const t = await getTranslations('sections');
  return (
    <section id="now" className="section pt-6">
      <h2 className="mb-4 text-2xl font-bold">{t('nowTitle')}</h2>
      <div className="card space-y-2">{nowSection.map((item) => <p key={item.en}>{item[locale]}</p>)}</div>
    </section>
  );
}
