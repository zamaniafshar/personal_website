'use client';

import { Bot, Server, Smartphone } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { content } from '@/data/content';
import { Card, Reveal, Section, SectionHeader } from '@/components/ui/primitives';

export function Services() {
  const { language } = useLanguage();
  const t = content[language].services;

  const items = [
    { id: 'web', title: t.web, desc: t.web_desc, icon: <Server size={22} /> },
    { id: 'bot', title: t.bot, desc: t.bot_desc, icon: <Bot size={22} /> },
    { id: 'mobile', title: t.mobile, desc: t.mobile_desc, icon: <Smartphone size={22} /> }
  ];

  return (
    <Section id="services" className="bg-panel/40">
      <SectionHeader kicker={t.kicker} title={t.title} subtitle={t.subtitle} />

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.08}>
            <Card className="h-full">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-contrast">
                {item.icon}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
