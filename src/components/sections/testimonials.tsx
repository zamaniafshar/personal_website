'use client';

import { Quote } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';
import { content, testimonials } from '@/data/content';
import { Card, Reveal, Section, SectionHeader, Stars } from '@/components/ui/primitives';

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export function Testimonials() {
  const { language } = useLanguage();
  const t = content[language].testimonials;

  return (
    <Section id="testimonials">
      <SectionHeader kicker={t.kicker} title={t.title} subtitle={t.subtitle} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.08}>
            <Card hover={false} className="flex h-full flex-col">
              <Quote size={28} className="text-accent/40 rtl:-scale-x-100" />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">“{item.quote[language]}”</p>

              <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                {item.avatar ? (
                  <Image
                    src={item.avatar}
                    alt={item.name[language]}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                ) : (
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 font-display text-sm font-bold text-accent">
                    {initials(item.name[language])}
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{item.name[language]}</p>
                  <p className="truncate text-xs text-muted">{item.role[language]}</p>
                </div>
                <Stars rating={item.rating} />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
