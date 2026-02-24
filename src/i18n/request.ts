import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {defaultLocale, locales} from './config';

export default getRequestConfig(async ({locale}) => {
  const validLocale = hasLocale(locales, locale) ? locale : defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});
