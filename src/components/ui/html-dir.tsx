'use client';

import { useEffect } from 'react';

export function HtmlDir({ locale }: { locale: 'fa' | 'en' }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'fa' ? 'rtl' : 'ltr';
  }, [locale]);

  return null;
}
