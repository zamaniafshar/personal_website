'use client';

import { ReactNode, useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as 'dark' | 'light' | null) ?? 'dark';
    setTheme(saved);
    document.documentElement.classList.toggle('dark', saved === 'dark');
    document.documentElement.style.colorScheme = saved;
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    document.documentElement.style.colorScheme = next;
  };

  return (
    <div data-theme={theme}>
      <button
        aria-label="Toggle theme"
        onClick={toggle}
        className="fixed bottom-5 right-5 z-50 rounded-full border border-emerald-400/40 bg-panel px-3 py-2 text-xs"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      {children}
    </div>
  );
}
