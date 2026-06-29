'use client';

import { CalendarCheck, Check, FileText, Mail } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { content, personalInfo } from '@/data/content';
import { Reveal, Section } from '@/components/ui/primitives';

export function Work() {
  const { language } = useLanguage();
  const t = content[language].work;

  const bookingHref =
    personalInfo.bookingUrl || `mailto:${personalInfo.email}?subject=${encodeURIComponent('Booking a call')}`;
  const cvHref = personalInfo.cvUrl || `mailto:${personalInfo.email}?subject=${encodeURIComponent('CV Request')}`;

  return (
    <Section id="work">
      <Reveal>
        <div className="relative overflow-hidden rounded-4xl border border-line bg-card p-8 shadow-card sm:p-12">
          <div className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 glow-blob" />
          <div className="relative grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="section-kicker">{t.kicker}</span>
              <h2 className="heading text-3xl sm:text-4xl">{t.title}</h2>
              <p className="mt-4 text-base text-muted">{t.subtitle}</p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {t.types.map((type) => (
                  <span
                    key={type}
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent/12 px-3.5 py-1.5 text-sm font-medium text-accent ring-1 ring-inset ring-accent/20"
                  >
                    <Check size={14} strokeWidth={3} /> {type}
                  </span>
                ))}
              </div>

              <p className="mt-6 max-w-lg border-s-2 border-accent/50 ps-4 text-sm italic leading-relaxed text-muted">
                {t.help_text}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a href={bookingHref} className="btn-accent w-full">
                <CalendarCheck size={18} /> {t.cta_call}
              </a>
              <a href={`mailto:${personalInfo.email}`} className="btn-ghost w-full">
                <Mail size={18} /> {t.cta_email}
              </a>
              <a href={cvHref} className="btn-ghost w-full">
                <FileText size={18} /> {t.cta_cv}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
