'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/context/language-context';
import { content, projects } from '@/data/content';
import { Badge, GlassCard, Section } from '@/components/ui/primitives';
import { cn } from '@/lib/utils';

type ProjectFilter = 'all' | 'mobile' | 'web' | 'backend';

export function Projects() {
  const { language } = useLanguage();
  const t = content[language].projects;
  const [filter, setFilter] = useState<ProjectFilter>('all');

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  const categories = [
    { id: 'all' as const, label: t.filter_all },
    { id: 'mobile' as const, label: t.filter_mobile },
    { id: 'web' as const, label: t.filter_web },
    { id: 'backend' as const, label: t.filter_backend }
  ];

  return (
    <Section id="projects" className="relative py-20">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-900/10 blur-[100px]" />

      <div className="relative z-10 mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h2 className="mb-2 text-4xl font-bold text-white">{t.title}</h2>
          <div className="h-1 w-20 rounded-full bg-emerald-500" />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setFilter(category.id)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-md transition-all duration-300',
                filter === category.id
                  ? 'border-emerald-400 bg-emerald-500 text-slate-900 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={index === 0 && filter === 'all' ? 'md:col-span-2 lg:col-span-2' : ''}
            >
              <GlassCard className="group relative flex h-full flex-col overflow-hidden" hoverEffect>
                {index === 0 && filter === 'all' && (
                  <div className="absolute right-4 top-4 z-20">
                    <Badge variant="glow" className="flex items-center gap-1">
                      <Star size={12} fill="currentColor" /> {t.spotlight}
                    </Badge>
                  </div>
                )}

                <div
                  className={cn(
                    'relative mb-4 overflow-hidden rounded-xl aspect-video',
                    index === 0 && filter === 'all' && 'md:aspect-[21/9]'
                  )}
                >
                  <div className="absolute inset-0 z-10 bg-slate-900/20 transition-colors duration-500 group-hover:bg-transparent" />
                  <Image
                    src={project.image}
                    alt={project.title[language]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 bg-slate-950/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    {project.demoUrl.length != 0 && <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition-colors hover:bg-emerald-500 hover:text-slate-900"
                      aria-label="Open project demo"
                    >
                      <ExternalLink size={20} />
                    </a>}
                    {project.repoUrl.length != 0 && <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition-colors hover:bg-emerald-500 hover:text-slate-900"
                      aria-label="Open project repository"
                    >
                      <Github size={20} />
                    </a>}
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <div className="mb-2 flex items-start justify-between">
                    <span className="text-xs uppercase tracking-wider text-emerald-400">{project.category}</span>
                    <Layers size={14} className="text-slate-500" />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-emerald-400">
                    {project.title[language]}
                  </h3>

                  <p className="mb-4 flex-1 text-sm text-slate-400">{project.desc[language]}</p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-slate-900/50 px-2 py-0.5 text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-emerald-500/30 px-8 py-3 font-medium text-emerald-400 transition-colors hover:bg-emerald-500/10"
        >
          {t.view_projects}
        </a>
      </div>
    </Section>
  );
}
