import {Locale} from '@/i18n/config';

type LocalizedText = Record<Locale, string>;

export const profile = {
  name: 'Your Name',
  role: {
    fa: 'توسعه‌دهنده موبایل',
    en: 'Mobile Developer'
  },
  years: 6,
  bio: {
    fa: 'من توسعه‌دهنده موبایل هستم و روی ساخت محصولاتی کار می‌کنم که سریع، مقیاس‌پذیر و خوش‌تجربه باشند. تمرکز اصلی‌ام روی اپ‌های موبایل است، ولی در سمت بک‌اند .NET هم تجربه عملی دارم.',
    en: 'I build mobile products that are fast, scalable and delightful to use. Mobile is my main craft, and I also work with .NET backend when the product needs it.'
  },
  shortTagline: {
    fa: 'اپلیکیشن‌هایی می‌سازم که هم زیبا باشند، هم سریع. اسمم را سرچ کن.',
    en: 'I craft mobile apps that feel premium and perform hard. Google me energy, shipped with discipline.'
  }
};

export const nowSection = {
  workingOn: {
    fa: 'در حال ساخت یک اپ موبایل با تمرکز روی انیمیشن‌های روان و زمان اجرای پایین هستم.',
    en: 'Currently building a mobile app focused on silky interactions and low runtime cost.'
  },
  learning: {
    fa: 'الان در حال عمیق‌تر شدن در معماری تمیز و هوش مصنوعی کاربردی داخل محصول هستم.',
    en: 'I’m going deeper into clean architecture and practical AI integrations for products.'
  },
  goal: {
    fa: 'هدف بعدی: انتشار یک محصول شخصی کامل از موبایل تا بک‌اند.',
    en: 'Next goal: launch a complete personal product from mobile to backend.'
  }
};

export const skills = [
  {
    id: 'mobile',
    title: {fa: 'موبایل (اصلی)', en: 'Mobile (Primary)'},
    items: ['Flutter', 'Dart', 'Kotlin', 'Swift', 'App Architecture', 'Performance Profiling']
  },
  {
    id: 'backend',
    title: {fa: 'بک‌اند (.NET)', en: 'Backend (.NET)'},
    items: ['ASP.NET Core', 'Web API', 'EF Core', 'SQL Server', 'Redis Basics']
  },
  {
    id: 'other',
    title: {fa: 'سایر / در حال یادگیری', en: 'Other / Learning'},
    items: ['Next.js', 'Framer Motion', 'CI/CD', 'Observability', 'Product Analytics']
  }
];

export type ProjectCategory = 'mobile' | 'backend' | 'experiments';

export const projects = [
  {
    name: 'PulseFit',
    description: {
      fa: 'اپلیکیشن سلامت با سیستم تمرین روزانه و داشبورد پیشرفت.',
      en: 'A health companion app with daily workout plans and progress analytics.'
    },
    category: 'mobile',
    tags: ['Flutter', 'Firebase', 'HealthKit'],
    links: {github: '#', live: '#', store: '#'}
  },
  {
    name: 'Tripora',
    description: {
      fa: 'رزرو سفر با UX مینیمال و جست‌وجوی سریع.',
      en: 'Travel booking app with minimalist UX and fast search.'
    },
    category: 'mobile',
    tags: ['Kotlin', 'Compose', 'Maps'],
    links: {github: '#', live: '#', store: '#'}
  },
  {
    name: 'Orion API',
    description: {
      fa: 'بک‌اند مدیریت سفارش با معماری تمیز و لاگینگ ساختاریافته.',
      en: 'Order management backend with clean architecture and structured logging.'
    },
    category: 'backend',
    tags: ['ASP.NET Core', 'PostgreSQL', 'Docker'],
    links: {github: '#', live: '#', store: '#'}
  },
  {
    name: 'SignalBoard',
    description: {
      fa: 'سیستم مانیتورینگ ساده برای متریک‌های محصول.',
      en: 'Lightweight dashboard for product metrics and health signals.'
    },
    category: 'backend',
    tags: ['.NET', 'Redis', 'OpenTelemetry'],
    links: {github: '#', live: '#', store: '#'}
  },
  {
    name: 'Nebula UI Motion',
    description: {
      fa: 'آزمایشگاه انیمیشن و کامپوننت‌های تعاملی برای موبایل.',
      en: 'Interaction lab for advanced mobile micro-animations.'
    },
    category: 'experiments',
    tags: ['Framer Motion', 'Prototype'],
    links: {github: '#', live: '#', store: '#'}
  },
  {
    name: 'Echo Notes AI',
    description: {
      fa: 'نمونه اولیه یادداشت هوشمند با خلاصه‌سازی محلی.',
      en: 'AI-assisted note app prototype with local-first summaries.'
    },
    category: 'experiments',
    tags: ['AI', 'Edge', 'UX'],
    links: {github: '#', live: '#', store: '#'}
  }
] as const;

export const highlights = [
  {label: {fa: 'اپ منتشرشده', en: 'Apps shipped'}, value: '12+'},
  {label: {fa: 'سال تجربه', en: 'Years of experience'}, value: '6+'},
  {label: {fa: 'بهبود عملکرد', en: 'Avg performance gains'}, value: '35%'}
];

export const workWithMe = {
  accepted: {
    fa: 'همکاری تمام‌وقت، فریلنس و مشاوره فنی کوتاه‌مدت',
    en: 'Open to full-time roles, freelance projects and focused consulting.'
  },
  helpWith: {
    fa: 'توسعه اپ موبایل، بهینه‌سازی عملکرد، طراحی معماری و زیرساخت بک‌اند .NET',
    en: 'Mobile development, performance optimization, architecture design and .NET backend foundations.'
  },
  ctas: {
    email: 'hello@example.com',
    cv: '#',
    call: '#'
  }
};

export const socialLinks = [
  {name: 'GitHub', href: 'https://github.com/your-handle'},
  {name: 'LinkedIn', href: 'https://linkedin.com/in/your-handle'},
  {name: 'Medium', href: 'https://medium.com/@your-handle'},
  {name: 'Email', href: 'mailto:hello@example.com'}
];

export const externalArticles: Array<{
  title: LocalizedText;
  date: string;
  excerpt: LocalizedText;
  tags: string[];
  href: string;
}> = [
  {
    title: {
      fa: 'طراحی تجربه روان در اپلیکیشن‌های موبایل',
      en: 'Designing Fluid Experience in Mobile Apps'
    },
    date: '2025-05-20',
    excerpt: {
      fa: 'نگاهی به اصول انیمیشن و فیدبک لمسی برای افزایش کیفیت حس کاربری.',
      en: 'A practical guide to animation and tactile feedback that elevate app quality.'
    },
    tags: ['UX', 'Mobile'],
    href: 'https://medium.com/'
  },
  {
    title: {
      fa: 'چه زمانی .NET انتخاب هوشمندانه‌ای است؟',
      en: 'When is .NET the smart backend choice?'
    },
    date: '2025-04-10',
    excerpt: {
      fa: 'تجربه استفاده از .NET در پروژه‌های مقیاس‌پذیر با تیم‌های کوچک.',
      en: 'Lessons from using .NET in scalable products with lean teams.'
    },
    tags: ['.NET', 'Architecture'],
    href: 'https://medium.com/'
  }
];
