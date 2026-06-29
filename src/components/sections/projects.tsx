'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/context/language-context';
import { content, projects } from '@/data/content';
import { Badge, Reveal, Section, SectionHeader } from '@/components/ui/primitives';
import { cn } from '@/lib/utils';

type ProjectFilter = 'all' | 'mobile' | 'web' | 'backend';

export function Projects() {
  const { language } = useLanguage();
  const t = content[language].projects;
  const [filter, setFilter] = useState<ProjectFilter>('all');

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  const categories = [
    { id: 'all' as const, label: t.filter_all },
    { id: 'web' as const, label: t.filter_web },
    { id: 'mobile' as const, label: t.filter_mobile },
    { id: 'backend' as const, label: t.filter_backend }
  ];

  return (
    <Section id="projects">
      <SectionHeader kicker={t.kicker} title={t.title} subtitle={t.subtitle} />

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setFilter(c.id)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300',
              filter === c.id
                ? 'border-accent bg-accent text-accent-contrast shadow-glow'
                : 'border-line bg-card text-muted hover:border-accent/40 hover:text-ink'
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => {
            const spotlight = index === 0 && filter === 'all';
            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={cn('group', spotlight && 'md:col-span-2 lg:col-span-2')}
              >
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card">
                  <div className={cn('relative overflow-hidden', spotlight ? 'aspect-[16/8]' : 'aspect-video')}>
                    <Image
                      src={project.image}
                      alt={project.title[language]}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {spotlight && (
                      <span className="absolute end-3 top-3 z-10">
                        <Badge className="gap-1">
                          <Star size={11} fill="currentColor" /> {t.spotlight}
                        </Badge>
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                      {project.category}
                    </span>
                    <h3 className="mt-1.5 font-display text-lg font-bold text-ink">{project.title[language]}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                      {project.desc[language]}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="soft" className="px-2 py-0.5 text-[10px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:brightness-110"
                        >
                          <ExternalLink size={15} /> {t.view_demo}
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-ink"
                        >
                          <Github size={15} /> {t.view_code}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
