'use client';

import { projects } from '@/data/site';
import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Tag } from '@/components/ui/tag';
import { Magnetic } from '@/components/ui/magnetic';
import { MotionSection } from '@/components/ui/motion-section';
import { SectionHeader } from '@/components/ui/section-header';
import { itemStagger, sectionContainer } from '@/lib/motion';
import { useTranslations } from 'next-intl';

const filters = ['all', 'mobile', 'backend', 'experiments'] as const;

type Filter = (typeof filters)[number];

const platformByCategory = {
  mobile: { en: 'iOS/Android', fa: 'iOS/Android' },
  backend: { en: 'API/Core', fa: 'API/Core' },
  experiments: { en: 'Web/Lab', fa: 'وب/لب' }
};

export function ProjectsSection({ locale }: { locale: 'fa' | 'en' }) {
  const t = useTranslations('sections');
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<Filter>('all');

  const filterLabels: Record<Filter, string> = {
    all: locale === 'fa' ? 'همه' : 'All',
    mobile: locale === 'fa' ? 'موبایل' : 'Mobile',
    backend: locale === 'fa' ? 'بک‌اند' : 'Backend',
    experiments: locale === 'fa' ? 'آزمایش‌ها' : 'Experiments'
  };

  const filtered = useMemo(() => projects.filter((project) => active === 'all' || project.category === active), [active]);

  return (
    <MotionSection id="projects">
      <SectionHeader title={t('projectsTitle')} />

      <motion.div variants={itemStagger} className="mb-6 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = active === filter;
          return (
            <Magnetic key={filter} strength={9}>
              <button
                type="button"
                onClick={() => setActive(filter)}
                className={`rounded-full border px-3.5 py-1.5 text-xs uppercase tracking-[0.14em] transition ${
                  isActive
                    ? 'border-panelBorder/52 bg-glow/22 text-text shadow-[0_0_0_1px_rgba(52,211,153,0.25),0_10px_28px_rgba(16,185,129,0.2)]'
                    : 'border-panelBorder/24 bg-panel/45 text-muted hover:border-panelBorder/46 hover:text-text'
                }`}
              >
                {filterLabels[filter]}
              </button>
            </Magnetic>
          );
        })}
      </motion.div>

      <motion.div
        className="grid gap-4 md:grid-cols-2"
        initial={reduceMotion ? undefined : 'hidden'}
        whileInView={reduceMotion ? undefined : 'visible'}
        viewport={{ once: true, amount: 0.15 }}
        variants={reduceMotion ? undefined : sectionContainer}
      >
        {filtered.map((project) => {
          const sourceIndex = Math.max(0, projects.findIndex((item) => item.name.en === project.name.en));
          const year = 2022 + sourceIndex;
          const platform = platformByCategory[project.category as keyof typeof platformByCategory][locale];

          return (
            <motion.article
              variants={itemStagger}
              key={project.name.en}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="group glass-panel card-tilt p-6"
            >
              <h3 className="text-xl font-semibold text-text">{project.name[locale]}</h3>
              <p className="mt-3 text-sm text-muted md:text-base">{project.description[locale]}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-panelBorder/24 bg-bg/45 px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-muted opacity-100 transition duration-300 md:opacity-0 md:group-hover:opacity-100">
                <span className="truncate">{project.tech.slice(0, 2).join(' / ')}</span>
                <span className="text-center">{year}</span>
                <span className="text-end">{platform}</span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-glow">
                <a href={project.links.github} className="transition hover:text-text">
                  GitHub
                </a>
                <a href={project.links.live} className="transition hover:text-text">
                  Live
                </a>
                <a href={project.links.store} className="transition hover:text-text">
                  Store
                </a>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </MotionSection>
  );
}
