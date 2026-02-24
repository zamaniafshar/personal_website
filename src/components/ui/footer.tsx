import { socials } from '@/data/site';

export function Footer({ locale }: { locale: 'fa' | 'en' }) {
  return (
    <footer className="border-t border-panelBorder/16 py-10 text-center text-sm text-muted">
      <p>{locale === 'fa' ? 'ساخته‌شده با Next.js و توجه دقیق به جزییات تجربه کاربری' : 'Built with Next.js and obsessive attention to experience details.'}</p>
      <a href={`mailto:${socials.email}`} className="mt-2 inline-block text-glow transition hover:text-glow/80">
        {socials.email}
      </a>
    </footer>
  );
}
