import type {Metadata} from 'next';
import {Inter, Vazirmatn} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin'], variable: '--font-en'});
const vazir = Vazirmatn({subsets: ['arabic'], variable: '--font-fa'});

export const metadata: Metadata = {
  title: 'Personal Brand Website',
  description: 'Modern mobile developer portfolio with localized Persian and English experiences.',
  openGraph: {
    title: 'Personal Brand Website',
    description: 'Modern + cool + slightly fantasy personal portfolio.',
    type: 'website'
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.variable} ${vazir.variable}`}>{children}</body>
    </html>
  );
}
