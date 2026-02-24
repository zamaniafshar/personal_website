'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { highlights } from '@/data/site';
import { MotionSection } from '@/components/ui/motion-section';
import { SectionHeader } from '@/components/ui/section-header';
import { itemStagger, sectionContainer } from '@/lib/motion';

export function HighlightsSection({ locale }: { locale: 'fa' | 'en' }) {
  const t = useTranslations('sections');

  return (
    <MotionSection id="highlights">
      <SectionHeader title={t('highlightsTitle')} />

      <motion.div className="grid gap-4 md:grid-cols-3" variants={sectionContainer}>
        {highlights.map((highlight) => (
          <motion.article key={highlight.en} variants={itemStagger} className="glass-panel-calm rounded-2xl p-6 text-center">
            <p className="text-lg font-semibold text-text">{highlight[locale]}</p>
          </motion.article>
        ))}
      </motion.div>
    </MotionSection>
  );
}
