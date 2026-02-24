'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('hero');
  const reduced = useReducedMotion();

  return (
    <section id="top" className="section relative pt-28">
      <motion.div
        initial={reduced ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card overflow-hidden shadow-glow"
      >
        <p className="text-sm text-emerald-300">{t('badge')}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">{t('title')}</h1>
        <p className="mt-5 max-w-2xl text-zinc-300">{t('subtitle')}</p>
        <p className="mt-2 max-w-2xl text-zinc-400">{t('statement')}</p>
        <div className="mt-8 flex gap-3">
          <a href="#projects" className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black">Projects</a>
          <a href="#articles" className="rounded-xl border border-zinc-600 px-5 py-2.5 text-sm">Articles</a>
          <a href="#contact" className="rounded-xl border border-zinc-600 px-5 py-2.5 text-sm">Contact</a>
        </div>
      </motion.div>
    </section>
  );
}
