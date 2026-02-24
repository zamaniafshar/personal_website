'use client';

import { motion } from 'framer-motion';
import { nowSection } from '@/data/site';
import { useTranslations } from 'next-intl';
import { MotionSection } from '@/components/ui/motion-section';
import { SectionHeader } from '@/components/ui/section-header';
import { itemStagger } from '@/lib/motion';

export function NowSection({ locale }: { locale: 'fa' | 'en' }) {
  const t = useTranslations('sections');

  return (
    <MotionSection id="now" className="pt-8">
      <SectionHeader title={t('nowTitle')} />
      <motion.div variants={itemStagger} className="glass-panel p-6 md:p-7">
        <ul className="space-y-3">
          {nowSection.map((item) => (
            <li key={item.en} className="flex items-start gap-3 text-sm text-muted md:text-base">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-glow" />
              <span>{item[locale]}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </MotionSection>
  );
}
