'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Copy, Github, Instagram, Linkedin, Mail, MapPin, Send, Twitter } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useLanguage } from '@/context/language-context';
import { content, personalInfo } from '@/data/content';
import { GlassCard, Section } from '@/components/ui/primitives';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

type ContactFormData = z.infer<typeof contactSchema>;


export function Contact() {
  const { language } = useLanguage();
  const t = content[language].contact;
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const copyResetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  useEffect(() => {
    return () => {
      if (copyResetTimer.current) {
        clearTimeout(copyResetTimer.current);
      }
    };
  }, []);

  const onSubmit = async () => {
    setIsSending(true);
    setSuccessMessage(null);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSending(false);
    setSuccessMessage(t.toast_success);
    reset();
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setIsCopied(true);

    if (copyResetTimer.current) {
      clearTimeout(copyResetTimer.current);
    }

    copyResetTimer.current = setTimeout(() => {
      setIsCopied(false);
    }, 1800);
  };

  return (
    <Section id="contact" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-slate-950" />

      <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 flex items-center gap-3 text-4xl font-bold text-white">
            <span className="h-1 w-12 rounded-full bg-emerald-500" />
            {t.title}
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-slate-400">{t.description}</p>

          <div className="mb-12 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-emerald-400">
                <Mail size={20} />
              </div>

              <div>
                <span className="block text-sm font-medium uppercase tracking-wide text-slate-500">Email</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="font-mono text-lg text-white transition-colors hover:text-emerald-400"
                >
                  {personalInfo.email}
                </button>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                className="ms-auto rounded-lg p-2 text-slate-500 transition-colors hover:bg-white/5 hover:text-white"
                title={t.copy_email}
              >
                <Copy size={16} />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-emerald-400">
                <MapPin size={20} />
              </div>
              <div>
                <span className="block text-sm font-medium uppercase tracking-wide text-slate-500">Location</span>
                <span className="text-lg text-white">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {isCopied && <p className="mb-4 text-sm text-emerald-400">{t.copied_email}</p>}

          <div className="flex gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="group cursor-pointer rounded-xl border border-white/10 p-3 transition-all hover:border-emerald-500/30 hover:bg-emerald-500/10"
              aria-label="GitHub"
            >
              <Github size={24} className="text-slate-400 transition-colors group-hover:text-emerald-400" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group cursor-pointer rounded-xl border border-white/10 p-3 transition-all hover:border-blue-500/30 hover:bg-blue-500/10"
              aria-label="Linkedin"
            >
              <Linkedin size={24} className="text-slate-400 transition-colors group-hover:text-blue-400" />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="group cursor-pointer rounded-xl border border-white/10 p-3 transition-all hover:border-blue-700/30 hover:bg-blue-700/10"
              aria-label="Instagram"
            >
              <Instagram size={24} className="text-slate-400 transition-colors group-hover:text-blue-600" />
            </a>
          </div>
        </div>

        <GlassCard className="border-emerald-500/10 bg-slate-900/40 p-8 md:p-10" hoverEffect={false}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-400">
                {t.name_label}
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-600 transition-all focus:border-emerald-500/50 focus:bg-white/10 focus:outline-none"
                placeholder={t.name_hint}
              />
              {errors.name && <p className="mt-2 text-xs text-red-400">{t.name_error}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-400">
                {t.email_label}
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-600 transition-all focus:border-emerald-500/50 focus:bg-white/10 focus:outline-none"
                placeholder="amin@gmail.com"
              />
              {errors.email && <p className="mt-2 text-xs text-red-400">{t.email_error}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-400">
                {t.message_label}
              </label>
              <textarea
                id="message"
                {...register('message')}
                className="min-h-[120px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-600 transition-all focus:border-emerald-500/50 focus:bg-white/10 focus:outline-none"
                placeholder={t.message_hint}
              />
              {errors.message && <p className="mt-2 text-xs text-red-400">{t.message_error}</p>}
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-4 font-bold text-slate-900 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? (
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-900 border-t-transparent" />
              ) : (
                <>
                  {t.send_btn} <Send size={18} />
                </>
              )}
            </button>

            {successMessage && <p className="text-sm text-emerald-400">{successMessage}</p>}
          </form>
        </GlassCard>
      </div>
    </Section>
  );
}
