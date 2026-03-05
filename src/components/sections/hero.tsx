'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Server, Wifi } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { content } from '@/data/content';

export function Hero() {
  const { language } = useLanguage();
  const t = content[language].hero;

  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-12 px-4 pb-20 pt-32 sm:px-6 lg:flex-row lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] animate-pulse rounded-full bg-emerald-500/10 opacity-30 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-teal-500/10 opacity-20 blur-[80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex-1 text-center md:text-start"
      >
        <div className="mb-8 hidden w-fit items-center gap-4 rounded-full border border-emerald-500/20 bg-emerald-950/20 px-4 py-2 font-mono text-xs text-emerald-500/70 md:flex">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> {t.hud_online}
          </span>
          <span className="h-3 w-px bg-emerald-500/20" />
          <span className="flex items-center gap-2">
            <Cpu size={12} /> {t.hud_build}
          </span>
          <span className="h-3 w-px bg-emerald-500/20" />
          <span className="flex items-center gap-2">
            <Wifi size={12} /> {t.hud_latency}
          </span>
        </div>

        <h1 className="bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text pb-4 text-5xl font-bold leading-tight tracking-tight text-transparent md:text-7xl">
          {t.greeting}
        </h1>

        <h2 className="mb-6 text-2xl font-light text-slate-300 md:text-3xl">{t.role}</h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-400 md:mx-0 md:text-xl">{t.description}</p>

        <div className="mb-8 flex h-6 items-center justify-center font-mono text-sm text-emerald-400 md:justify-start">
          <span className="me-2 opacity-50">&gt;</span>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 'auto' }}
            transition={{ duration: 2, ease: 'linear' }}
            className="animate-blink overflow-hidden whitespace-nowrap border-e-2 border-emerald-500 pe-1"
          >
            {t.signature}
          </motion.span>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
          <Link
            href="#projects"
            className="flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3 font-bold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]"
          >
            {t.cta_projects} <ArrowRight size={18} />
          </Link>
          <Link
            href="#articles"
            className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
          >
            {t.cta_articles}
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 flex flex-1 items-center justify-center"
      >
        <div className="relative h-80 w-80 md:h-96 md:w-96">
          <div className="absolute inset-0 animate-[spin_20s_linear_infinite] rounded-full border border-emerald-500/20" />
          <div className="absolute inset-4 animate-[spin_15s_linear_infinite_reverse] rounded-full border border-dashed border-emerald-500/30" />
          <div className="absolute inset-12 animate-[pulse_4s_ease-in-out_infinite] rounded-full border border-emerald-500/10" />

          <div className="absolute inset-8 overflow-hidden rounded-full border-2 border-emerald-500/50 bg-slate-900 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
            <Image
              src="/profile_pic.jpeg"
              alt="Z"
              fill
              className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 320px, 384px"
              priority
            />
            <div className="animate-scan absolute inset-0 h-[10%] w-full bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent" />
          </div>

          <div className="absolute -top-4 right-12 animate-bounce rounded-xl border border-emerald-500/30 bg-slate-900/80 p-3 shadow-lg backdrop-blur delay-100">
            <Code size={24} className="text-emerald-400" />
          </div>
          <div className="absolute -left-4 bottom-12 animate-bounce rounded-xl border border-emerald-500/30 bg-slate-900/80 p-3 shadow-lg backdrop-blur delay-300">
            <Server size={24} className="text-teal-400" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
