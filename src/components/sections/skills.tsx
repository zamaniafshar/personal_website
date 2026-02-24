'use client';

import { skills } from '@/data/site';
import { motion, useReducedMotion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { MotionSection } from '@/components/ui/motion-section';
import { SectionHeader } from '@/components/ui/section-header';
import { itemStagger, sectionContainer } from '@/lib/motion';

export function SkillsSection() {
  const t = useTranslations('sections');
  const locale = useLocale();
  const reduceMotion = useReducedMotion();

  const groups =
    locale === 'fa'
      ? [
          { title: 'موبایل (اصلی)', items: skills.mobile },
          { title: 'بک‌اند (.NET)', items: skills.backend },
          { title: 'سایر / در حال یادگیری', items: skills.learning }
        ]
      : [
          { title: 'Mobile (Primary)', items: skills.mobile },
          { title: 'Backend (.NET)', items: skills.backend },
          { title: 'Other / Learning', items: skills.learning }
        ];

  return (
    <MotionSection id="skills">
      <SectionHeader title={t('skillsTitle')} />

      <motion.div
        className="grid gap-4 md:grid-cols-3"
        initial={reduceMotion ? undefined : 'hidden'}
        whileInView={reduceMotion ? undefined : 'visible'}
        viewport={{ once: true, amount: 0.2 }}
        variants={reduceMotion ? undefined : sectionContainer}
      >
        {groups.map((group) => (
          <motion.article key={group.title} variants={itemStagger} className="glass-panel card-tilt p-5 md:p-6">
            <h3 className="mb-3 font-semibold text-glow">{group.title}</h3>
            <ul className="space-y-2 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-glow/85" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </MotionSection>
  );
}
