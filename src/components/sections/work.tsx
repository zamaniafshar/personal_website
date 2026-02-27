'use client';

import { Calendar, Check, FileText, Mail } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { content } from '@/data/content';
import { GlassCard, Section } from '@/components/ui/primitives';

export function Work() {
  const { language } = useLanguage();
  const t = content[language].work;

  return (
    <Section id="work" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-[120px]" />

      <GlassCard className="relative mx-auto max-w-4xl border-emerald-500/30 p-12 shadow-[0_0_50px_rgba(16,185,129,0.1)] md:p-16">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />

        <div className="flex flex-col items-center justify-between gap-12 text-center md:flex-row md:text-start">
          <div className="flex-1 space-y-6">
            <h2 className="mb-4 text-4xl font-bold text-white">{t.title}</h2>
            <p className="text-lg text-slate-300">{t.subtitle}</p>

            <div className="mb-6 flex flex-wrap justify-center gap-3 md:justify-start">
              {t.types.map((type) => (
                <div
                  key={type}
                  className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 font-medium text-emerald-400"
                >
                  <Check size={16} />
                  <span>{type}</span>
                </div>
              ))}
            </div>

            <p className="text-sm italic text-slate-400">&quot;{t.help_text}&quot;</p>
          </div>

          <div className="flex min-w-[240px] flex-col gap-4">
            <a
              href="mailto:hello@arash.dev"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-500 px-6 py-4 font-bold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]"
            >
              <Mail size={20} />
              {t.cta_email}
            </a>

            <a
              href="mailto:hello@arash.dev?subject=CV%20Request"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-medium text-white transition-all hover:bg-white/10"
            >
              <FileText size={20} />
              {t.cta_cv}
            </a>

            <a
              href="https://cal.com"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-6 py-4 font-medium text-slate-300 transition-all hover:border-emerald-500/50 hover:text-emerald-400"
            >
              <Calendar size={20} />
              {t.cta_call}
            </a>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}
