import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  const requested = locale ?? routing.defaultLocale;
  const activeLocale = routing.locales.includes(requested as 'fa' | 'en') ? requested : routing.defaultLocale;

  return {
    locale: activeLocale,
    messages: (await import(`../messages/${activeLocale}.json`)).default
  };
});
