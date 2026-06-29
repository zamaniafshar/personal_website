'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Check, Copy, Github, Instagram, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useLanguage } from '@/context/language-context';
import { content, personalInfo } from '@/data/content';
import { Card, Reveal, Section } from '@/components/ui/primitives';

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
    defaultValues: { name: '', email: '', message: '' }
  });

  useEffect(() => () => {
    if (copyResetTimer.current) clearTimeout(copyResetTimer.current);
  }, []);

  const onSubmit = async () => {
    setIsSending(true);
    setSuccessMessage(null);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSending(false);
    setSuccessMessage(t.toast_success);
    reset();
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setIsCopied(true);
    if (copyResetTimer.current) clearTimeout(copyResetTimer.current);
    copyResetTimer.current = setTimeout(() => setIsCopied(false), 1800);
  };

  const socials = [
    { label: 'GitHub', href: personalInfo.github, icon: Github },
    { label: 'LinkedIn', href: personalInfo.linkedin, icon: Linkedin },
    { label: 'Instagram', href: personalInfo.instagram, icon: Instagram }
  ].filter((s) => s.href);

  const inputClass =
    'w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder-muted/60 transition-all focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20';

  return (
    <Section id="contact" className="bg-panel/40">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <Reveal>
          <span className="section-kicker">{t.kicker}</span>
          <h2 className="heading text-3xl sm:text-4xl">{t.title}</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{t.description}</p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-card p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Mail size={18} />
              </span>
              <div className="min-w-0 flex-1">
                <span className="block text-xs uppercase tracking-wide text-muted">{t.email_box}</span>
                <span className="truncate text-sm font-medium text-ink">{personalInfo.email}</span>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="rounded-lg p-2 text-muted transition-colors hover:bg-panel hover:text-accent"
                title={t.copy_email}
                aria-label={t.copy_email}
              >
                {isCopied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
              </button>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-line bg-card p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <MapPin size={18} />
              </span>
              <div>
                <span className="block text-xs uppercase tracking-wide text-muted">{t.location_box}</span>
                <span className="text-sm font-medium text-ink">{personalInfo.location[language]}</span>
              </div>
            </div>
          </div>

          {isCopied && <p className="mt-3 text-sm text-accent">{t.copied_email}</p>}

          {socials.length > 0 && (
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-card text-muted transition-all hover:border-accent/40 hover:text-accent"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <Card hover={false} className="p-7 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted">
                  {t.name_label}
                </label>
                <input id="name" type="text" {...register('name')} className={inputClass} placeholder={t.name_hint} />
                {errors.name && <p className="mt-2 text-xs text-red-500">{t.name_error}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-muted">
                  {t.email_label}
                </label>
                <input id="email" type="email" {...register('email')} className={inputClass} placeholder="you@email.com" />
                {errors.email && <p className="mt-2 text-xs text-red-500">{t.email_error}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-muted">
                  {t.message_label}
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  className={`min-h-[120px] ${inputClass}`}
                  placeholder={t.message_hint}
                />
                {errors.message && <p className="mt-2 text-xs text-red-500">{t.message_error}</p>}
              </div>

              <button type="submit" disabled={isSending} className="btn-accent w-full disabled:opacity-70">
                {isSending ? (
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-accent-contrast border-t-transparent" />
                ) : (
                  <>
                    {t.send_btn} <Send size={17} className="rtl:-scale-x-100" />
                  </>
                )}
              </button>

              {successMessage && <p className="text-sm font-medium text-accent">{successMessage}</p>}
            </form>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
