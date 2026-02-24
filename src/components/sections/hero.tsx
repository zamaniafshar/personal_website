'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { Magnetic } from '@/components/ui/magnetic';
import { MotionSection } from '@/components/ui/motion-section';
import { itemStagger } from '@/lib/motion';
import { profile } from '@/data/site';

export function HeroSection() {
  const t = useTranslations('hero');
  const common = useTranslations('common');
  const locale = useLocale() as 'fa' | 'en';
  const reduceMotion = useReducedMotion();

  const terminalLine = t('terminalLine', { name: profile.name });
  const initials = useMemo(() => {
    return profile.name
      .split(' ')
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  }, []);

  const [typed, setTyped] = useState(reduceMotion ? terminalLine : '');

  useEffect(() => {
    if (reduceMotion) {
      setTyped(terminalLine);
      return;
    }

    let index = 0;
    setTyped('');
    const timer = window.setInterval(() => {
      index += 1;
      setTyped(terminalLine.slice(0, index));
      if (index >= terminalLine.length) {
        window.clearInterval(timer);
      }
    }, 28);

    return () => window.clearInterval(timer);
  }, [reduceMotion, terminalLine]);

  const hudItems = [
    { label: t('hudOnlineLabel'), value: t('hudOnlineValue') },
    { label: t('hudBuildLabel'), value: t('hudBuildValue') },
    { label: t('hudLatencyLabel'), value: t('hudLatencyValue') }
  ];

  const primaryActionClass =
    'inline-flex items-center justify-center rounded-xl border border-panelBorder/45 bg-gradient-to-b from-glow/28 to-glow/16 px-5 py-2.5 text-sm font-medium text-text shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-glow-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/65 focus-visible:ring-offset-2 focus-visible:ring-offset-bg';
  const ghostActionClass =
    'inline-flex items-center justify-center rounded-xl border border-panelBorder/24 bg-panel/45 px-5 py-2.5 text-sm font-medium text-text/90 transition duration-300 hover:-translate-y-0.5 hover:border-panelBorder/50 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glow/65 focus-visible:ring-offset-2 focus-visible:ring-offset-bg';

  return (
    <MotionSection id="top" className="pt-28 md:pt-32" viewportAmount={0.1}>
      <motion.div variants={itemStagger} className="glass-panel relative overflow-hidden p-6 md:p-10">
        <div className="pointer-events-none absolute -left-16 top-8 h-40 w-40 rounded-full bg-glow/18 blur-3xl" />
        <div className="pointer-events-none absolute -right-8 bottom-6 h-36 w-36 rounded-full bg-teal-400/16 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <motion.p variants={itemStagger} className="text-sm text-glow">
              {t('badge')}
            </motion.p>

            <motion.p variants={itemStagger} className="mt-4 inline-flex items-center gap-2 rounded-full border border-panelBorder/35 bg-bg/55 px-3 py-1 font-mono text-xs text-muted">
              <span className="text-glow">$</span>
              <span>{typed}</span>
              {!reduceMotion && <span className="inline-block h-4 w-px bg-glow animate-terminal-caret" aria-hidden />}
            </motion.p>

            <motion.h1 variants={itemStagger} className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight text-text md:text-6xl">
              {t('title')}
            </motion.h1>

            <motion.p variants={itemStagger} className="mt-5 max-w-2xl text-muted md:text-lg">
              {t('subtitle')}
            </motion.p>

            <motion.p variants={itemStagger} className="mt-3 max-w-2xl text-sm text-muted/92 md:text-base">
              {t('statement')}
            </motion.p>

            <motion.div variants={itemStagger} className="mt-6 flex flex-wrap gap-2">
              {hudItems.map((item) => (
                <span key={item.label} className="hud-label">
                  {item.label}
                  <span className="text-text/90">{item.value}</span>
                </span>
              ))}
            </motion.div>

            <motion.div variants={itemStagger} className="mt-8 flex flex-wrap gap-3">
              <Magnetic>
                <a href="#projects" className={primaryActionClass}>
                  {common('projects')}
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#articles" className={ghostActionClass}>
                  {common('articles')}
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#contact" className={ghostActionClass}>
                  {common('contact')}
                </a>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div variants={itemStagger} className="relative mx-auto w-full max-w-[320px]">
            <div className="pointer-events-none absolute inset-[12%] rounded-full bg-glow/18 blur-3xl" />
            <svg viewBox="0 0 240 240" className="rune-spin absolute inset-0 h-full w-full text-glow/32" aria-hidden>
              <circle cx="120" cy="120" r="108" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
              <circle cx="120" cy="120" r="84" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" strokeOpacity="0.55" />
              <path d="M120 20v24M120 196v24M20 120h24M196 120h24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              <path d="M65 65l17 17M158 158l17 17M65 175l17-17M158 82l17-17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.75" />
              <polygon points="120,86 136,120 120,154 104,120" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.8" />
            </svg>

            <div className="glass-panel relative mx-auto mt-8 flex aspect-square w-[78%] flex-col items-center justify-center rounded-full border-panelBorder/28 p-4 text-center">
              <span className="text-4xl font-semibold text-text">{initials}</span>
              <p className="mt-2 text-xs text-muted">{profile.role[locale]}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </MotionSection>
  );
}
