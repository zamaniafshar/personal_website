import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Amin Zamani Afshar | Software Engineer',
  description:
    'Amin Zamani Afshar — Software Engineer building websites, scalable backends, and Telegram bots for businesses, startups, and solo founders.',
  openGraph: {
    title: 'Amin Zamani Afshar | Software Engineer',
    description:
      'Websites that convert, backends you can trust, and Telegram bots that automate the busywork.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',      // Next.js resolves this against metadataBase
        width: 1200,
        height: 630,
        alt: 'Amin Zamani Afshar – Full-Stack Developer',
      },
    ],
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Vazirmatn:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body data-lang="fa" className="bg-paper text-ink antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
