'use client';

import Link from 'next/link';
import {Moon, Sun} from 'lucide-react';
import {useEffect, useState} from 'react';
import {Button} from './ui';

export function Navbar({
  locale,
  navItems,
  switchLabel,
  themeLabel
}: {
  locale: 'fa' | 'en';
  navItems: Array<{href: string; label: string}>;
  switchLabel: string;
  themeLabel: {dark: string; light: string};
}) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const current = document.documentElement.classList.contains('light') ? 'light' : 'dark';
    setTheme(current);
    const sections = navItems.map((item) => document.querySelector(item.href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      {rootMargin: '-40% 0px -45% 0px'}
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [navItems]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(next);
    localStorage.setItem('theme', next);
    setTheme(next);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/75 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={`transition hover:text-emerald-300 ${active === item.href ? 'text-emerald-300' : ''}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button onClick={toggleTheme} aria-label="Toggle theme" className="px-3">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            <span className="ms-1 hidden md:inline">{theme === 'dark' ? themeLabel.light : themeLabel.dark}</span>
          </Button>
          <Link href={locale === 'fa' ? '/en' : '/fa'} className="rounded-xl border border-white/20 px-3 py-2 text-sm">
            {switchLabel}
          </Link>
        </div>
      </div>
    </header>
  );
}
