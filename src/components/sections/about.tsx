import { SectionHeader } from '@/components/ui/section-header';
import { Tag } from '@/components/ui/tag';
import { profile } from '@/data/site';
import { getTranslations } from 'next-intl/server';

export async function AboutSection({ locale }: { locale: 'fa' | 'en' }) {
  const t = await getTranslations('sections');
  return (
    <section id="about" className="section">
      <SectionHeader title={t('aboutTitle')} subtitle={t('aboutSubtitle')} />
      <div className="grid gap-6 md:grid-cols-[200px,1fr]">
        <div className="card h-48 w-full bg-gradient-to-br from-emerald-600/30 to-transparent" aria-label="Profile image placeholder" />
        <div className="card space-y-4">
          <h3 className="text-xl font-semibold">{profile.role[locale]}</h3>
          <p className="text-zinc-300">{profile.bio[locale]}</p>
          <div className="flex flex-wrap gap-2">{profile.quickFacts.map((f) => <Tag key={f.en}>{f[locale]}</Tag>)}</div>
        </div>
      </div>
    </section>
  );
}
