'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Tag } from '@/components/ui/tag';
import { MotionSection } from '@/components/ui/motion-section';
import { itemStagger } from '@/lib/motion';
import { profile } from '@/data/site';
import { useTranslations } from 'next-intl';

export function AboutSection({ locale }: { locale: 'fa' | 'en' }) {
  const t = useTranslations('sections');

  return (
    <MotionSection id="about">
      <SectionHeader title={t('aboutTitle')} subtitle={t('aboutSubtitle')} />

      <div className="grid gap-6 md:grid-cols-[230px,1fr]">
        <motion.div variants={itemStagger} className="glass-panel card-tilt relative h-56 overflow-hidden p-4" aria-label="Profile avatar placeholder">
          <div className="absolute inset-0 bg-gradient-to-br from-glow/25 via-transparent to-transparent" />
          <div className="relative flex h-full items-center justify-center">
            <div className="h-32 w-32 rounded-full border border-panelBorder/40 bg-bg/55" />
          </div>
        </motion.div>

        <motion.div variants={itemStagger} className="glass-panel p-6 md:p-7">
          <h3 className="text-xl font-semibold text-text">{profile.role[locale]}</h3>
          <p className="mt-4 text-muted">{profile.bio[locale]}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {profile.quickFacts.map((fact) => (
              <Tag key={fact.en}>{fact[locale]}</Tag>
            ))}
          </div>
        </motion.div>
      </div>
    </MotionSection>
  );
}
