'use client';

import { projects } from '@/data/site';
import { useMemo, useState } from 'react';
import { Tag } from '@/components/ui/tag';

const filters = ['all', 'mobile', 'backend', 'experiments'] as const;

export function ProjectsSection({ locale }: { locale: 'fa' | 'en' }) {
  const [active, setActive] = useState<(typeof filters)[number]>('all');
  const filtered = useMemo(() => projects.filter((p) => active === 'all' || p.category === active), [active]);

  return (
    <section id="projects" className="section">
      <h2 className="mb-6 text-3xl font-bold">{locale === 'fa' ? 'پروژه‌ها' : 'Projects'}</h2>
      <div className="mb-4 flex gap-2">{filters.map((f) => <button key={f} onClick={() => setActive(f)} className={`rounded-full px-3 py-1 text-xs ${active === f ? 'bg-emerald-500 text-black' : 'bg-zinc-800'}`}>{f}</button>)}</div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((project) => (
          <article className="card" key={project.name.en}>
            <h3 className="text-xl font-semibold">{project.name[locale]}</h3>
            <p className="mt-2 text-zinc-300">{project.description[locale]}</p>
            <div className="mt-3 flex flex-wrap gap-2">{project.tech.map((tech) => <Tag key={tech}>{tech}</Tag>)}</div>
            <div className="mt-4 flex gap-4 text-sm text-emerald-300"><a href={project.links.github}>GitHub</a><a href={project.links.live}>Live</a><a href={project.links.store}>Store</a></div>
          </article>
        ))}
      </div>
    </section>
  );
}
