'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { socials } from '@/data/site';
import { Toast } from '@/components/ui/toast';
import { MotionSection } from '@/components/ui/motion-section';
import { SectionHeader } from '@/components/ui/section-header';
import { Magnetic } from '@/components/ui/magnetic';
import { itemStagger } from '@/lib/motion';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

type FormData = z.infer<typeof schema>;

export function ContactSection({ locale }: { locale: 'fa' | 'en' }) {
  const sectionT = useTranslations('sections');
  const common = useTranslations('common');
  const formT = useTranslations('contactForm');
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`New message from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n${data.email}`);
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(socials.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1700);
  };

  const primaryActionClass =
    'inline-flex items-center justify-center rounded-xl border border-panelBorder/48 bg-gradient-to-b from-glow/30 to-glow/15 px-5 py-2.5 text-sm font-medium text-text shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-glow-strong';

  return (
    <MotionSection id="contact">
      <SectionHeader title={sectionT('contactTitle')} />

      <div className="grid gap-6 md:grid-cols-2">
        <motion.form variants={itemStagger} onSubmit={handleSubmit(onSubmit)} className="glass-panel space-y-3 p-6">
          <input aria-label="Name" {...register('name')} placeholder={formT('name')} className="input-glass" />
          {errors.name && <p className="text-xs text-red-300">{locale === 'fa' ? 'نام معتبر وارد کنید' : 'Enter a valid name'}</p>}

          <input aria-label="Email" {...register('email')} placeholder={formT('email')} className="input-glass" />
          {errors.email && <p className="text-xs text-red-300">{locale === 'fa' ? 'ایمیل معتبر وارد کنید' : 'Enter a valid email'}</p>}

          <textarea aria-label="Message" {...register('message')} placeholder={formT('message')} className="input-glass h-36 resize-none" />
          {errors.message && <p className="text-xs text-red-300">{locale === 'fa' ? 'پیام باید حداقل ۱۰ کاراکتر باشد' : 'Message should be at least 10 characters'}</p>}

          <button className={primaryActionClass} type="submit">
            {formT('send')}
          </button>
        </motion.form>

        <motion.div variants={itemStagger} className="glass-panel space-y-4 p-6">
          <a href={socials.github} className="block text-sm text-muted transition hover:text-text">
            GitHub
          </a>
          <a href={socials.linkedin} className="block text-sm text-muted transition hover:text-text">
            LinkedIn
          </a>
          <a href={socials.medium} className="block text-sm text-muted transition hover:text-text">
            Medium
          </a>
          <a href={`mailto:${socials.email}`} className="block text-sm text-glow transition hover:text-text">
            {socials.email}
          </a>

          <Magnetic>
            <button
              onClick={copyEmail}
              type="button"
              className="rounded-full border border-panelBorder/34 bg-panel/55 px-4 py-2 text-xs uppercase tracking-[0.14em] text-muted transition hover:border-panelBorder/52 hover:text-text"
            >
              {common('copyEmail')}
            </button>
          </Magnetic>
        </motion.div>
      </div>

      <Toast show={copied} text={common('copied')} />
    </MotionSection>
  );
}
