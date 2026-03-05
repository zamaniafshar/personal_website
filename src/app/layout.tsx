import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zamani Afshar | Personal Website',
  description: 'Personal website showcasing projects, articles, and ways to collaborate.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
