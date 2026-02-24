import './globals.css';
import { Inter, Vazirmatn } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-en' });
const vazir = Vazirmatn({ subsets: ['arabic'], variable: '--font-fa' });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.variable} ${vazir.variable} bg-bg text-text`}>{children}</body>
    </html>
  );
}
