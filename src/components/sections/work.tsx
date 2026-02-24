'use client';

import { motion } from 'framer-motion';
import { socials, workWithMe } from '@/data/site';
import { MotionSection } from '@/components/ui/motion-section';
import { SectionHeader } from '@/components/ui/section-header';
import { Magnetic } from '@/components/ui/magnetic';
import { itemStagger } from '@/lib/motion';
import { useTranslations } from 'next-intl';

export function WorkSection({ locale }: { locale: 'fa' | 'en' }) {
  const t = useTranslations('sections');

  const primaryActionClass =
    'inline-flex items-center justify-center rounded-xl border border-panelBorder/48 bg-gradient-to-b from-glow/30 to-glow/15 px-5 py-2.5 text-sm font-medium text-text shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-glow-strong';
  const ghostActionClass =
    'inline-flex items-center justify-center rounded-xl border border-panelBorder/28 bg-panel/45 px-5 py-2.5 text-sm font-medium text-text/90 transition duration-300 hover:-translate-y-0.5 hover:border-panelBorder/50 hover:text-text';

  return (
    <MotionSection id="work" className="py-12">
      <SectionHeader title={t('workTitle')} />

      <motion.div variants={itemStagger} className="glass-panel relative overflow-hidden border-panelBorder/34 p-6 shadow-glow-strong md:p-8">
        <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-glow/24 blur-3xl" />
        <div className="pointer-events-none absolute left-8 top-12 h-24 w-24 rounded-full bg-teal-400/16 blur-3xl" />

        <div className="relative grid gap-6 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-glow">{locale === 'fa' ? 'نوع همکاری' : 'I accept'}</p>
            <ul className="space-y-2 text-sm text-muted md:text-base">
              {workWithMe.accepts[locale].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-glow" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-glow">{locale === 'fa' ? 'کمک‌هایی که ارائه می‌دهم' : 'I can help with'}</p>
            <ul className="space-y-2 text-sm text-muted md:text-base">
              {workWithMe.helps[locale].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-glow" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Magnetic>
            <a className={primaryActionClass} href={`mailto:${socials.email}`}>
              {locale === 'fa' ? 'ارسال ایمیل' : 'Email me'}
            </a>
          </Magnetic>
          <Magnetic>
            <a className={ghostActionClass} href={socials.cv}>
              {locale === 'fa' ? 'دانلود رزومه' : 'Download CV'}
            </a>
          </Magnetic>
          <Magnetic>
            <a className={ghostActionClass} href={socials.call}>
              {locale === 'fa' ? 'رزرو جلسه' : 'Book a call'}
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </MotionSection>
  );
}
