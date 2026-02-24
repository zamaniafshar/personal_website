'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import type { ArticleMeta } from '@/lib/articles';
import { MotionSection } from '@/components/ui/motion-section';
import { SectionHeader } from '@/components/ui/section-header';
import { Magnetic } from '@/components/ui/magnetic';
import { itemStagger, sectionContainer } from '@/lib/motion';

type ExternalArticle = {
  title: { en: string; fa: string };
  date: string;
  excerpt: { en: string; fa: string };
  tags: string[];
  url: string;
};

type ArticleTab = 'onsite' | 'external';

export function ArticlesClientSection({
  locale,
  onsite,
  external
}: {
  locale: 'fa' | 'en';
  onsite: ArticleMeta[];
  external: ExternalArticle[];
}) {
  const t = useTranslations('sections');
  const articleT = useTranslations('articles');
  const reduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<ArticleTab>('onsite');

  return (
    <MotionSection id="articles">
      <SectionHeader title={t('articlesTitle')} />

      <motion.div variants={itemStagger} className="mb-6 flex flex-wrap gap-2">
        {(['onsite', 'external'] as const).map((tab) => {
          const active = activeTab === tab;
          return (
            <Magnetic key={tab} strength={8}>
              <button
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative rounded-full border px-4 py-2 text-xs uppercase tracking-[0.14em] transition ${
                  active
                    ? 'border-panelBorder/50 bg-panel/65 text-text'
                    : 'border-panelBorder/20 bg-panel/35 text-muted hover:border-panelBorder/42 hover:text-text'
                }`}
              >
                {tab === 'onsite' ? articleT('onsite') : articleT('external')}
                {active && (
                  <motion.span
                    layoutId="article-tab-underline"
                    className="absolute inset-x-3 -bottom-[1px] h-px bg-gradient-to-r from-transparent via-glow to-transparent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30, mass: 0.4 }}
                  />
                )}
              </button>
            </Magnetic>
          );
        })}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-4"
        >
          <motion.div
            className="grid gap-4"
            initial={reduceMotion ? undefined : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.2 }}
            variants={reduceMotion ? undefined : sectionContainer}
          >
            {activeTab === 'onsite'
              ? onsite.map((article) => (
                  <motion.div variants={itemStagger} key={article.slug}>
                    <Link
                      href={`/${locale}/articles/${article.slug}`}
                      className="glass-panel-calm block rounded-2xl border border-panelBorder/16 p-5 transition hover:border-panelBorder/35"
                    >
                      <p className="font-semibold text-text">{article.title}</p>
                      <p className="mt-1 text-sm text-muted">{article.excerpt}</p>
                      <p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted/85">{article.date}</p>
                    </Link>
                  </motion.div>
                ))
              : external.map((article) => (
                  <motion.div variants={itemStagger} key={article.title.en}>
                    <a
                      href={article.url}
                      className="glass-panel-calm block rounded-2xl border border-panelBorder/16 p-5 transition hover:border-panelBorder/35"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="font-semibold text-text">{article.title[locale]}</p>
                      <p className="mt-1 text-sm text-muted">{article.excerpt[locale]}</p>
                      <p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted/85">{article.date}</p>
                    </a>
                  </motion.div>
                ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </MotionSection>
  );
}
