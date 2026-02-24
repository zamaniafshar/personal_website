'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { socials } from '@/data/site';
import { Toast } from '@/components/ui/toast';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

type FormData = z.infer<typeof schema>;

export function ContactSection({ locale }: { locale: 'fa' | 'en' }) {
  const [copied, setCopied] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`New message from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n${data.email}`);
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="contact" className="section">
      <h2 className="mb-6 text-3xl font-bold">{locale === 'fa' ? 'تماس' : 'Contact'}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="card space-y-3">
          <input aria-label="Name" {...register('name')} placeholder={locale === 'fa' ? 'نام' : 'Name'} className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2" />
          {errors.name && <p className="text-xs text-red-400">{locale === 'fa' ? 'نام معتبر وارد کنید' : 'Enter a valid name'}</p>}
          <input aria-label="Email" {...register('email')} placeholder="Email" className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2" />
          <textarea aria-label="Message" {...register('message')} placeholder={locale === 'fa' ? 'پیام' : 'Message'} className="h-32 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2" />
          <button className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black" type="submit">{locale === 'fa' ? 'ارسال پیام' : 'Send message'}</button>
        </form>
        <div className="card space-y-3">
          <a href={socials.github}>GitHub</a><a href={socials.linkedin}>LinkedIn</a><a href={socials.medium}>Medium</a><a href={`mailto:${socials.email}`}>{socials.email}</a>
          <button onClick={copyEmail} className="w-fit rounded-lg border border-emerald-400/40 px-3 py-1.5 text-sm text-emerald-300">{locale === 'fa' ? 'کپی ایمیل' : 'Copy email'}</button>
        </div>
      </div>
      <Toast show={copied} text={locale === 'fa' ? 'ایمیل کپی شد' : 'Email copied'} />
    </section>
  );
}
