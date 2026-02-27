'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/language-context';
import { content } from '@/data/content';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = content[language].nav;
  const isHome = pathname === '/';

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const getHref = (sectionId: string) => (isHome ? `#${sectionId}` : `/#${sectionId}`);

  const links = [
    { name: t.home, href: isHome ? '#hero' : '/' },
    { name: t.about, href: getHref('about') },
    { name: t.projects, href: getHref('projects') },
    { name: t.articles, href: getHref('articles') },
    { name: t.work, href: getHref('work') },
    { name: t.contact, href: getHref('contact') }
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 border-b border-white/5 bg-slate-950/70 backdrop-blur-lg" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex flex-shrink-0 cursor-pointer items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 font-bold text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              A
            </div>
            <span className="hidden font-semibold tracking-wide text-white sm:block">{language === 'fa' ? 'آرش' : 'Arash'}</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative py-2 text-sm font-medium text-slate-300 transition-colors hover:text-emerald-400"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-emerald-500 opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all hover:border-emerald-500/30 hover:bg-white/10"
            >
              <Globe size={14} className="text-emerald-400" />
              <span>{language === 'fa' ? 'English' : 'فارسی'}</span>
            </button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              type="button"
              onClick={toggleLanguage}
              className="rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300"
            >
              {language.toUpperCase()}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-slate-300 transition-colors hover:text-white"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-4 px-4 py-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn('block text-base font-medium text-slate-300 transition-colors hover:text-emerald-400')}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
