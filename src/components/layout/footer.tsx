'use client';

import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { content, personalInfo } from '@/data/content';

const socialLinks = [
  { label: 'GitHub', href: personalInfo.github, icon: Github },
  { label: 'Instagram', href: personalInfo.instagram, icon: Instagram },
  { label: 'LinkedIn', href: personalInfo.linkedin, icon: Linkedin }
];

export function Footer() {
  const { language } = useLanguage();
  const t = content[language].footer;

  return (
    <footer className="border-t border-white/5 bg-slate-950 pb-8 pt-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-xl font-bold text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          Z
        </div>

        <div className="mb-8 flex gap-6">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="rounded-full bg-white/5 p-2 text-slate-400 transition-all hover:bg-white/10 hover:text-white"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <p className="mb-4 text-center text-sm text-slate-500">{t.built_with}</p>
        <p className="text-xs text-slate-600">{t.rights}</p>
      </div>
    </footer>
  );
}
