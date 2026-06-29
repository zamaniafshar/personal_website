'use client';

import { Check } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { content } from '@/data/content';
import { Badge, Card, Reveal, Section } from '@/components/ui/primitives';

export function About() {
  const { language } = useLanguage();
  const t = content[language].about;

  return (
    <Section id="about">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <Reveal>
          <span className="section-kicker">{t.kicker}</span>
          <h2 className="heading text-3xl sm:text-4xl">{t.title}</h2>
          <span className="mt-5 block h-1 w-16 rounded-full bg-accent/80" />
          <p className="mt-6 text-base leading-relaxed text-muted">{t.bio}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{t.bio2}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {t.chips.map((chip) => (
              <Badge key={chip} variant="soft">
                {chip}
              </Badge>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card hover={false} className="p-7 sm:p-8">
            <h3 className="font-display text-lg font-bold text-ink">{t.what_i_do_title}</h3>
            <ul className="mt-5 space-y-4">
              {t.what_i_do.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
