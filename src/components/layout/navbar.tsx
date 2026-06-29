'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Menu, Moon, Sun, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/language-context';
import { useTheme } from '@/context/theme-context';
import { content, personalInfo } from '@/data/content';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = content[language].nav;
  const tt = content[language].theme;
  const isHome = pathname === '/';

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const getHref = (sectionId: string) => (isHome ? `#${sectionId}` : `/#${sectionId}`);

  const links = [
    { name: t.about, href: getHref('about') },
    { name: t.services, href: getHref('services') },
    { name: t.projects, href: getHref('projects') },
    { name: t.experience, href: getHref('experience') },
    { name: t.testimonials, href: getHref('testimonials') },
    { name: t.contact, href: getHref('contact') }
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'absolute inset-0 transition-all duration-300',
          scrolled ? 'border-b border-line bg-paper/80 backdrop-blur-xl' : 'border-b border-transparent'
        )}
      />

      <div className="container-px relative">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex flex-shrink-0 items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-display text-sm font-extrabold text-accent-contrast shadow-glow">
              AZ
            </span>
            <span className="hidden font-display font-semibold tracking-tight text-ink sm:block">
              {personalInfo.name[language]}
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-center scale-x-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? tt.to_light : tt.to_dark}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card text-muted transition-all hover:border-accent/40 hover:text-accent"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-semibold text-muted transition-all hover:border-accent/40 hover:text-accent"
            >
              <Globe size={14} />
              <span>{language === 'fa' ? 'EN' : 'فا'}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card text-ink lg:hidden"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
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
            className="relative overflow-hidden border-b border-line bg-paper/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-px flex flex-col gap-1 py-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-panel hover:text-ink"
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
