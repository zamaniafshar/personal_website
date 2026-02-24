export type Locale = 'fa' | 'en';

export const profile = {
  name: 'Your Name',
  role: {
    en: 'Senior Mobile Developer',
    fa: 'توسعه‌دهنده ارشد موبایل'
  },
  bio: {
    en: 'I design and build fast, polished mobile products with a strong product mindset. I also work with .NET APIs and I am constantly learning modern web and cloud tooling.',
    fa: 'من محصولات موبایل سریع و خوش‌ساخت را با نگاه محصول طراحی و پیاده‌سازی می‌کنم. در کنار آن با APIهای .NET کار می‌کنم و همیشه در حال یادگیری ابزارهای مدرن وب و کلاد هستم.'
  },
  quickFacts: [
    { en: '6+ years experience', fa: 'بیش از ۶ سال تجربه' },
    { en: 'Main stack: Flutter / Kotlin', fa: 'استک اصلی: Flutter / Kotlin' },
    { en: 'Location: Tehran (Remote-friendly)', fa: 'موقعیت: تهران (آماده ریموت)' }
  ]
};

export const nowSection = [
  {
    en: 'Shipping version 3 of a finance-focused mobile app.',
    fa: 'در حال انتشار نسخه ۳ یک اپلیکیشن موبایل حوزه مالی هستم.'
  },
  { en: 'Studying system design for scalable mobile backends.', fa: 'در حال مطالعه طراحی سیستم برای بک‌اند مقیاس‌پذیر موبایل هستم.' },
  { en: 'Improving startup time and animation smoothness in production apps.', fa: 'روی بهبود زمان شروع اپ و روان‌تر شدن انیمیشن‌ها در محصول واقعی کار می‌کنم.' },
  { en: 'Next goal: launch a bilingual technical writing series.', fa: 'هدف بعدی: انتشار یک سری مقاله فنی دو‌زبانه.' }
];

export const skills = {
  mobile: ['Flutter', 'Kotlin', 'Jetpack Compose', 'SwiftUI', 'Firebase'],
  backend: ['.NET 8', 'ASP.NET Core', 'REST APIs', 'SQL Server', 'Redis'],
  learning: ['Next.js', 'System Design', 'CI/CD', 'Observability']
};

export const projects = [
  { category: 'mobile', name: { en: 'Pulse Wallet', fa: 'پالس والت' }, description: { en: 'A high-performance personal finance app with instant analytics.', fa: 'اپ مدیریت مالی شخصی با تحلیل سریع و پرفورمنس بالا.' }, tech: ['Flutter', 'Bloc', '.NET API'], links: { github: '#', live: '#', store: '#' } },
  { category: 'mobile', name: { en: 'FitQuest', fa: 'فیت‌کوئست' }, description: { en: 'Gamified fitness tracker with adaptive challenge engine.', fa: 'ترکر تناسب اندام بازی‌وار با موتور چالش تطبیقی.' }, tech: ['Kotlin', 'Compose', 'Room'], links: { github: '#', live: '#', store: '#' } },
  { category: 'backend', name: { en: 'Signal Core API', fa: 'سیگنال کور API' }, description: { en: 'Secure API platform powering multi-client mobile products.', fa: 'پلتفرم API امن برای پشتیبانی چند محصول موبایل.' }, tech: ['ASP.NET Core', 'PostgreSQL', 'Docker'], links: { github: '#', live: '#', store: '#' } },
  { category: 'backend', name: { en: 'Ops Dashboard', fa: 'داشبورد اپس' }, description: { en: 'Monitoring dashboard for crash rates and release quality.', fa: 'داشبورد مانیتورینگ نرخ کرش و کیفیت انتشار.' }, tech: ['.NET', 'OpenTelemetry', 'Grafana'], links: { github: '#', live: '#', store: '#' } },
  { category: 'experiments', name: { en: 'Neon UI Kit', fa: 'کیت رابط نئون' }, description: { en: 'Reusable component system for dark-mode-first apps.', fa: 'سیستم کامپوننت قابل‌استفاده مجدد برای اپ‌های دارک‌مود.' }, tech: ['Next.js', 'Tailwind', 'Framer Motion'], links: { github: '#', live: '#', store: '#' } },
  { category: 'experiments', name: { en: 'Motion Lab', fa: 'لبراتوار موشن' }, description: { en: 'A playground for high-FPS transition patterns.', fa: 'محیط آزمایشی الگوهای ترنزیشن با فریم‌ریت بالا.' }, tech: ['React', 'Motion', 'WebGL'], links: { github: '#', live: '#', store: '#' } }
];

export const externalArticles = [
  { title: { en: 'Designing silky mobile loading states', fa: 'طراحی لودینگ‌های روان در موبایل' }, date: '2026-01-14', excerpt: { en: 'How to keep perceived latency low and user trust high.', fa: 'چطور تأخیر ادراکی را کم و اعتماد کاربر را زیاد کنیم.' }, tags: ['UX', 'Mobile'], url: '#' },
  { title: { en: 'Clean architecture in small teams', fa: 'کلین آرکیتکچر در تیم‌های کوچک' }, date: '2025-11-02', excerpt: { en: 'Practical boundaries, without overengineering.', fa: 'مرزبندی عملی بدون مهندسی بیش‌ازحد.' }, tags: ['Architecture', '.NET'], url: '#' }
];

export const highlights = [
  { en: '15+ apps shipped', fa: 'بیش از ۱۵ اپ منتشرشده' },
  { en: '99.9% crash-free sessions on key products', fa: '۹۹.۹٪ سشن بدون کرش در محصولات کلیدی' },
  { en: '40% faster cold start after optimization', fa: '۴۰٪ بهبود زمان اجرای اولیه بعد از بهینه‌سازی' }
];

export const workWithMe = {
  accepts: {
    en: ['Full-time senior mobile roles', 'Freelance product delivery', 'Short consulting on performance and architecture'],
    fa: ['نقش‌های تمام‌وقت ارشد موبایل', 'پروژه فریلنس تحویل محصول', 'مشاوره کوتاه‌مدت پرفورمنس و معماری']
  },
  helps: {
    en: ['Cross-platform and native mobile apps', 'Performance tuning and release quality', '.NET backend foundations for mobile teams'],
    fa: ['توسعه اپ‌های کراس‌پلتفرم و نیتیو', 'بهینه‌سازی پرفورمنس و کیفیت انتشار', 'پایه‌های بک‌اند .NET برای تیم‌های موبایل']
  }
};

export const socials = {
  email: 'hello@example.com',
  github: 'https://github.com/your-handle',
  linkedin: 'https://linkedin.com/in/your-handle',
  medium: 'https://medium.com/@your-handle',
  cv: '#',
  call: '#'
};
