'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

const sections = ['home', 'about', 'now', 'skills', 'projects', 'articles', 'highlights', 'work', 'contact'] as const;

function getLocaleSwitchHref(pathname: string, locale: 'fa' | 'en') {
  if (locale === 'fa') {
    return pathname.replace(/^\/fa(?=\/|$)/, '/en');
  }

  return pathname.replace(/^\/en(?=\/|$)/, '/fa');
}

export function Navbar({ locale }: { locale: 'fa' | 'en' }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [active, setActive] = useState<(typeof sections)[number]>('home');
  const localeHref = useMemo(() => getLocaleSwitchHref(pathname, locale), [locale, pathname]);

  useEffect(() => {
    const sectionIds = sections.slice(1);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActive(visible.target.id as (typeof sections)[number]);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0.15, 0.35, 0.6] }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    const syncHome = () => {
      if (window.scrollY < 96) {
        setActive('home');
      }
    };

    syncHome();
    window.addEventListener('scroll', syncHome, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', syncHome);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-panelBorder/18 bg-bg/56 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-8">
        <Link href={`/${locale}`} className="inline-flex items-center gap-2 rounded-full border border-panelBorder/28 bg-panel/55 px-3 py-1.5 text-sm font-semibold text-glow">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-glow" />
          YN
        </Link>

        <ul className="hidden items-center gap-2 md:flex">
          {sections.map((section) => {
            const isActive = active === section;
            return (
              <li key={section} className="relative">
                <a
                  href={section === 'home' ? '#top' : `#${section}`}
                  className={`relative rounded-lg px-3 py-2 text-sm transition ${isActive ? 'text-text' : 'text-muted hover:text-text'}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {t(section)}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="active-energy"
                    className="absolute inset-x-2 -bottom-1 h-px bg-gradient-to-r from-transparent via-glow to-transparent shadow-[0_0_12px_rgba(52,211,153,0.75)]"
                    transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.42 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <Link href={localeHref} className="rounded-full border border-panelBorder/24 bg-panel/45 px-3 py-1.5 text-xs font-medium text-muted transition hover:border-panelBorder/48 hover:text-text">
          {locale === 'fa' ? 'EN' : 'فا'}
        </Link>
      </nav>
    </header>
  );
}
