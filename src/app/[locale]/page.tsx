import { getTranslations } from 'next-intl/server';
import { Navbar } from '@/components/ui/navbar';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { NowSection } from '@/components/sections/now';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { ArticlesSection } from '@/components/sections/articles';
import { HighlightsSection } from '@/components/sections/highlights';
import { WorkSection } from '@/components/sections/work';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/ui/footer';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'hero' });
  return {
    title: 'Personal Brand Website',
    description: t('subtitle'),
    openGraph: {
      title: t('title'),
      description: t('subtitle')
    }
  };
}

export default function Home({ params }: { params: { locale: 'fa' | 'en' } }) {
  return (
    <div className="relative overflow-hidden bg-noise">
      <Navbar locale={params.locale} />
      <main>
        <HeroSection />
        <AboutSection locale={params.locale} />
        <NowSection locale={params.locale} />
        <SkillsSection />
        <ProjectsSection locale={params.locale} />
        <ArticlesSection locale={params.locale} />
        <HighlightsSection locale={params.locale} />
        <WorkSection locale={params.locale} />
        <ContactSection locale={params.locale} />
      </main>
      <Footer locale={params.locale} />
    </div>
  );
}
