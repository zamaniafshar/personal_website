'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const sections = ['home', 'about', 'now', 'skills', 'projects', 'articles', 'highlights', 'work', 'contact'] as const;

export function Navbar({ locale }: { locale: 'fa' | 'en' }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [active, setActive] = useState('home');

  useEffect(() => {
    const ids = sections.slice(1);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-500/10 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <Link href={`/${locale}`} className="font-semibold text-emerald-300">YN</Link>
        <ul className="hidden gap-4 md:flex">
          {sections.map((section) => (
            <li key={section}>
              <a href={section === 'home' ? '#top' : `#${section}`} className={`text-sm ${active === section ? 'text-emerald-300' : 'text-zinc-300'}`}>
                {t(section)}
              </a>
            </li>
          ))}
        </ul>
        <Link href={pathname.startsWith('/fa') ? pathname.replace('/fa', '/en') : pathname.replace('/en', '/fa')} className="text-sm text-zinc-300">
          {locale === 'fa' ? 'EN' : 'فا'}
        </Link>
      </nav>
    </header>
  );
}
