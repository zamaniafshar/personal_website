import { socials } from '@/data/site';

export function Footer({ locale }: { locale: 'fa' | 'en' }) {
  return (
    <footer className="border-t border-emerald-500/10 py-8 text-center text-sm text-zinc-400">
      <p>{locale === 'fa' ? 'ساخته‌شده با نکست‌جی‌اس و کمی جادو ✨' : 'Built with Next.js and a touch of magic ✨'}</p>
      <a href={`mailto:${socials.email}`} className="mt-2 inline-block text-emerald-300">{socials.email}</a>
    </footer>
  );
}
