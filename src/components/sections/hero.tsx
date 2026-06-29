'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { content, personalInfo } from '@/data/content';
import { TypeAnimation } from 'react-type-animation';

export function Hero() {
  const { language } = useLanguage();
  const t = content[language].hero;
  const bookingHref =
    personalInfo.bookingUrl || `mailto:${personalInfo.email}?subject=${encodeURIComponent('Booking a call')}`;

  const stats = [
    { value: '6+', label: t.stat_years },
    { value: '20+', label: t.stat_projects },
    { value: '100%', label: t.stat_clients }
  ];

  return (
    <section id="hero" className="container-px relative overflow-hidden pb-12 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute -top-32 end-[-10%] h-[480px] w-[480px] glow-blob" />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-start"
        >
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-xl font-medium text-muted lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.welcome}
          </span>
          <h1 className="heading mt-6 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">{t.greeting}</h1>
          <TypeAnimation
            sequence={t.typing_texts.flatMap((text) => [text, 2000])}
            wrapper="p"
            speed={50}
            deletionSpeed={70}
            repeat={Infinity}
            className="mt-4 text-lg font-medium text-accent sm:text-xl"
          />
          {/* <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted lg:mx-0">{t.description}</p> */}

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
            <a href={bookingHref} className="btn-accent">
              <CalendarCheck size={18} />
              {t.cta_book}
            </a>
            <Link href="#projects" className="btn-ghost">
              {t.cta_projects}
              <ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-start">
                <dt className="font-display text-3xl font-extrabold text-ink">{s.value}</dt>
                <dd className="mt-1 text-xs leading-tight text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2.2rem] bg-accent/15 rtl:-translate-x-4" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-card shadow-card">
            <Image
              src="/profile_pic.jpeg"
              alt={personalInfo.name[language]}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>


        </motion.div>
      </div>
    </section>
  );
}
