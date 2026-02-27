'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from 'react';
import { getDirection, type Direction, type Language } from '@/data/content';

interface LanguageContextValue {
  language: Language;
  direction: Direction;
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
}

const STORAGE_KEY = 'preferred-language';

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fa');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'fa' || stored === 'en') {
      setLanguageState(stored);
    }
  }, []);

  const direction = getDirection(language);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.body.dataset.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [direction, language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'fa' ? 'en' : 'fa'));
  }, []);

  const value = useMemo(
    () => ({
      language,
      direction,
      setLanguage,
      toggleLanguage
    }),
    [direction, language, setLanguage, toggleLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
