'use client';

import { Briefcase } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { content, experience } from '@/data/content';
import { Badge, Reveal, Section, SectionHeader } from '@/components/ui/primitives';

export function Experience() {
  const { language } = useLanguage();
  const t = content[language].experience;

  return (
    <Section id="experience" className="bg-panel/40">
      <SectionHeader kicker={t.kicker} title={t.title} subtitle={t.subtitle} />

      <div className="relative mx-auto max-w-3xl">
        {/* vertical line */}
        <span className="absolute bottom-2 top-2 start-[18px] w-px bg-line sm:start-1/2" aria-hidden />

        <div className="space-y-8">
          {experience.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06} className="relative">
              <div className="grid sm:grid-cols-2 sm:gap-8">
                {/* dot */}
                <span className="absolute start-[11px] top-6 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-paper sm:start-1/2 sm:-translate-x-1/2 rtl:sm:translate-x-1/2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>

                <div className={i % 2 === 0 ? 'sm:col-start-1 sm:text-end' : 'sm:col-start-2'}>
                  <div className="ms-10 rounded-2xl border border-line bg-card p-5 shadow-soft sm:ms-0">
                    <div
                      className={`mb-2 flex items-center gap-2 ${
                        i % 2 === 0 ? 'sm:justify-end' : ''
                      }`}
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
                        <Briefcase size={15} />
                      </span>
                      <Badge variant="soft" className="px-2 py-0.5 text-[10px]">
                        {item.period[language]}
                      </Badge>
                    </div>
                    <h3 className="font-display text-base font-bold text-ink">{item.role[language]}</h3>
                    <p className="mt-0.5 text-sm font-medium text-accent">{item.company[language]}</p>
                    <ul
                      className={`mt-3 space-y-1.5 text-sm text-muted ${
                        i % 2 === 0 ? 'sm:text-end' : ''
                      }`}
                    >
                      {item.points.map((p, idx) => (
                        <li key={idx}>{p[language]}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
