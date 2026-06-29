'use client';

import { Github, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { content, personalInfo } from '@/data/content';

export function Footer() {
  const { language } = useLanguage();
  const t = content[language].footer;

  const socials = [
    { label: 'GitHub', href: personalInfo.github, icon: Github },
    { label: 'LinkedIn', href: personalInfo.linkedin, icon: Linkedin },
    { label: 'Instagram', href: personalInfo.instagram, icon: Instagram }
  ].filter((s) => s.href);

  return (
    <footer className="border-t border-line bg-paper py-12">
      <div className="container-px flex flex-col items-center text-center">

        {socials.length > 0 && (
          <div className="mt-6 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-muted transition-all hover:border-accent/40 hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-col items-center gap-1 text-xs text-muted">
          <p>{t.built_with}</p>
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
