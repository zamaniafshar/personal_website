'use client';

import { ArrowUpRight, BookOpen, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/context/language-context';
import { articles, content } from '@/data/content';
import { Badge, Reveal, Section, SectionHeader } from '@/components/ui/primitives';
import { cn } from '@/lib/utils';

type ArticleTab = 'site' | 'external';

export function Articles() {
  const { language } = useLanguage();
  const t = content[language].articles;
  const [activeTab, setActiveTab] = useState<ArticleTab>('external');

  return (
    <Section id="articles" className="bg-panel/40">
      <SectionHeader kicker={t.kicker} title={t.title} subtitle={t.subtitle} />

      <div className="mb-10 flex justify-center">
        <div className="flex rounded-full border border-line bg-card p-1">
          {(
            [
              { id: 'site' as const, label: t.tab_site },
              { id: 'external' as const, label: t.tab_external }
            ]
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all',
                activeTab === tab.id ? 'bg-accent text-accent-contrast shadow-glow' : 'text-muted hover:text-ink'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => {
          const isExternal = activeTab === 'external';
          const href = isExternal ? article.externalUrl ?? '#' : `/articles/${article.id}`;

          return (
            <Reveal key={article.id} delay={i * 0.07}>
              <a
                href={href}
                {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group flex h-full flex-col rounded-3xl border border-line bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.map((tag) => (
                      <Badge key={tag} className="px-2 py-0.5 text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted transition-all group-hover:text-accent rtl:-scale-x-100"
                  />
                </div>

                <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-accent">
                  {article.title[language]}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{article.excerpt[language]}</p>

                <div className="mt-5 flex items-center gap-4 border-t border-line pt-4 text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} /> {article.date[language]}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} /> {article.readTime[language]}
                  </span>
                  <span className="ms-auto flex items-center gap-1 font-semibold text-accent">
                    {isExternal ? t.external_read : t.read_more}
                    <BookOpen size={13} />
                  </span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
