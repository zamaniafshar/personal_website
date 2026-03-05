'use client';

import { CheckCircle, Clock, Terminal } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { content } from '@/data/content';
import { Badge, GlassCard, Section } from '@/components/ui/primitives';

export function About() {
  const { language } = useLanguage();
  const t = content[language].about;

  return (
    <Section id="about" className="relative">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-emerald-400">
            <span className="h-1 w-8 rounded-full bg-emerald-500" />
            {t.title}
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-slate-300">{t.bio}</p>

          <div className="flex flex-wrap gap-2">
            {t.chips.map((chip) => (
              <Badge
                key={chip}
                variant="outline"
                className="cursor-default transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
              >
                {chip}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="mb-8 space-y-4">
            {t.what_i_do.map((item) => (
              <div key={item} className="group flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-500 transition-transform group-hover:scale-110" />
                <span className="text-slate-400 transition-colors group-hover:text-emerald-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <GlassCard className="flex flex-col items-center justify-center p-4 text-center">
              <span className="mb-1 text-4xl font-bold text-emerald-400">5+</span>
              <span className="text-xs uppercase tracking-widest text-slate-400">{t.yearsExp}</span>
            </GlassCard>
            <GlassCard className="flex flex-col items-center justify-center p-4 text-center">
              <span className="mb-1 text-4xl font-bold text-teal-400">20+</span>
              <span className="text-xs uppercase tracking-widest text-slate-400">{t.projects}</span>
            </GlassCard>
          </div>
        </div>
      </div>
    </Section>
  );
}
