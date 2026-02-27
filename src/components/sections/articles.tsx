'use client';

import { BookOpen, Calendar, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/context/language-context';
import { articles, content } from '@/data/content';
import { Badge, GlassCard, Section } from '@/components/ui/primitives';
import { cn } from '@/lib/utils';

type ArticleTab = 'site' | 'external';

export function Articles() {
  const { language } = useLanguage();
  const t = content[language].articles;
  const [activeTab, setActiveTab] = useState<ArticleTab>('site');

  return (
    <Section id="articles" className="relative py-20">
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-teal-500/10 blur-[80px]" />

      <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
        <div>
          <h2 className="relative mb-4 inline-block text-4xl font-bold text-white">
            {t.title}
            <span className="absolute -bottom-2 left-0 h-1 w-1/3 rounded-full bg-emerald-500" />
          </h2>
        </div>

        <div className="flex rounded-full border border-white/10 bg-slate-900/50 p-1 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setActiveTab('site')}
            className={cn(
              'rounded-full px-6 py-2 text-sm font-medium transition-all',
              activeTab === 'site' ? 'bg-emerald-500 text-slate-900 shadow-lg' : 'text-slate-400 hover:text-white'
            )}
          >
            {t.tab_site}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('external')}
            className={cn(
              'rounded-full px-6 py-2 text-sm font-medium transition-all',
              activeTab === 'external' ? 'bg-emerald-500 text-slate-900 shadow-lg' : 'text-slate-400 hover:text-white'
            )}
          >
            {t.tab_external}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => {
          const isExternal = activeTab === 'external';

          return (
            <GlassCard
              key={article.id}
              className="group flex h-full flex-col transition-all duration-300 hover:border-emerald-500/30"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="default" className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {isExternal && <ExternalLink size={16} className="text-slate-500" />}
              </div>

              {isExternal ? (
                <a href={article.externalUrl} target="_blank" rel="noreferrer" className="block">
                  <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-emerald-400">
                    {article.title[language]}
                  </h3>
                </a>
              ) : (
                <Link href={`/articles/${article.id}`} className="block">
                  <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-emerald-400">
                    {article.title[language]}
                  </h3>
                </Link>
              )}

              <p className="mb-6 flex-1 text-sm text-slate-400">{article.excerpt[language]}</p>

              <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4 text-xs text-slate-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {article.date[language]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime[language]}
                  </span>
                </div>

                {isExternal ? (
                  <a
                    href={article.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 font-medium text-emerald-500 transition-colors hover:text-emerald-400"
                  >
                    {t.external_read} <ExternalLink size={12} />
                  </a>
                ) : (
                  <Link
                    href={`/articles/${article.id}`}
                    className="flex items-center gap-1 font-medium text-emerald-500 transition-all group-hover:gap-2 hover:text-emerald-400"
                  >
                    {t.read_more} <BookOpen size={12} />
                  </Link>
                )}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}
