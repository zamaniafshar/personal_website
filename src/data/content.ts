export type Language = 'en' | 'fa';
export type Direction = 'ltr' | 'rtl';

type LocalizedText = Record<Language, string>;

export interface Project {
  id: number;
  title: LocalizedText;
  desc: LocalizedText;
  tags: string[];
  category: 'mobile' | 'web' | 'backend';
  image: string;
  demoUrl: string;
  repoUrl: string;
}

export interface Article {
  id: number;
  title: LocalizedText;
  date: LocalizedText;
  readTime: LocalizedText;
  tags: string[];
  excerpt: LocalizedText;
  externalUrl?: string;
}

export const content = {
  fa: {
    nav: {
      home: 'خانه',
      about: 'درباره من',
      projects: 'پروژه‌ها',
      articles: 'مقالات',
      work: 'همکاری',
      contact: 'تماس'
    },
    hero: {
      greeting: 'سلام، من آرش هستم',
      role: 'توسعه‌دهنده موبایل و وب',
      description: '۵ سال تجربه در دات‌نت، در حال یادگیری وب مدرن.',
      cta_projects: 'مشاهده پروژه‌ها',
      cta_articles: 'خواندن مقالات',
      hud_online: 'آنلاین',
      hud_build: 'نسخه ۲.۰.۴',
      hud_latency: '۱۲ میلی‌ثانیه',
      signature: 'در حال اجرای سیستم...'
    },
    about: {
      title: 'درباره من',
      bio: 'من یک توسعه‌دهنده نرم‌افزار با اشتیاق به ساخت رابط‌های کاربری زیبا و کاربردی هستم. تمرکز اصلی من بر روی اکوسیستم دات‌نت بوده است، اما اکنون با هیجان به دنیای وب مدرن و ریکت وارد شده‌ام.',
      what_i_do: [
        'توسعه اپلیکیشن‌های موبایل با زامارین و دات‌نت مائوی',
        'طراحی و پیاده‌سازی بک‌ند با ASP.NET Core',
        'یادگیری و تجربه با React و Next.js',
        'طراحی رابط کاربری تمیز و مدرن'
      ],
      chips: ['توسعه‌دهنده', 'گیمر', 'عاشق قهوه', 'کدنویس شبانه']
    },
    now: {
      title: 'الان مشغول چه کاری هستم؟',
      items: [
        'در حال یادگیری عمیق React و Tailwind CSS',
        'کار روی یک پروژه شخصی مدیریت مالی',
        'خواندن کتاب "Clean Architecture"',
        'هدف بعدی: یادگیری Three.js'
      ]
    },
    skills: {
      title: 'مهارت‌ها',
      mobile: 'موبایل',
      backend: 'بک‌ند',
      learning: 'در حال یادگیری',
      mobile_list: ['Xamarin', '.NET MAUI', 'MVVM Cross', 'SQLite'],
      backend_list: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'Redis'],
      learning_list: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Figma']
    },
    projects: {
      title: 'پروژه‌های منتخب',
      filter_all: 'همه',
      filter_mobile: 'موبایل',
      filter_web: 'وب',
      filter_backend: 'بک‌ند',
      spotlight: 'پروژه ویژه',
      view_projects: 'مشاهده پروژه‌ها'
    },
    articles: {
      title: 'آخرین مقالات',
      tab_site: 'در این سایت',
      tab_external: 'ویرگول / مدیوم',
      read_more: 'ادامه مطلب',
      external_read: 'مطالعه در منبع خارجی'
    },
    work: {
      title: 'همکاری با من',
      subtitle: 'آیا پروژه‌ای در ذهن دارید؟',
      types: ['تمام‌وقت', 'پروژه‌ای', 'مشاوره'],
      help_text: 'من می‌توانم در توسعه اپلیکیشن‌های موبایل، طراحی سیستم‌های بک‌ند و مشاوره فنی به شما کمک کنم.',
      cta_email: 'ارسال ایمیل',
      cta_cv: 'دانلود رزومه',
      cta_call: 'رزرو مشاوره'
    },
    contact: {
      title: 'تماس با من',
      description: 'برای همکاری یا گفت‌وگو درباره ایده‌تان خوشحال می‌شوم پیام بدهید.',
      name_label: 'نام شما',
      email_label: 'ایمیل',
      message_label: 'پیام',
      send_btn: 'ارسال پیام',
      copy_email: 'کپی ایمیل',
      copied_email: 'ایمیل کپی شد',
      toast_success: 'پیام شما با موفقیت ارسال شد!',
      name_error: 'نام باید حداقل ۲ کاراکتر باشد.',
      email_error: 'یک ایمیل معتبر وارد کنید.',
      message_error: 'پیام باید حداقل ۱۰ کاراکتر باشد.'
    },
    footer: {
      rights: '© ۱۴۰۴ تمامی حقوق محفوظ است.',
      built_with: 'طراحی شده با فیگما، ساخته شده با عشق و کد.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      articles: 'Articles',
      work: 'Work',
      contact: 'Contact'
    },
    hero: {
      greeting: "Hi, I'm Arash",
      role: 'Mobile & Web Developer',
      description: '5 years experience in .NET, diving into modern web.',
      cta_projects: 'View Projects',
      cta_articles: 'Read Articles',
      hud_online: 'ONLINE',
      hud_build: 'v2.0.4',
      hud_latency: '12ms',
      signature: 'System initializing...'
    },
    about: {
      title: 'About Me',
      bio: 'I am a software developer passionate about building beautiful and functional user interfaces. My main focus has been the .NET ecosystem, but I am now diving into the world of modern web and React.',
      what_i_do: [
        'Mobile app development with Xamarin & .NET MAUI',
        'Backend design and implementation with ASP.NET Core',
        'Learning and experimenting with React & Next.js',
        'Clean and modern UI design'
      ],
      chips: ['Developer', 'Gamer', 'Coffee Lover', 'Night Coder']
    },
    now: {
      title: "What I'm doing now?",
      items: [
        'Deep diving into React & Tailwind CSS',
        'Working on a personal finance management project',
        'Reading "Clean Architecture"',
        'Next goal: Learning Three.js'
      ]
    },
    skills: {
      title: 'Skills',
      mobile: 'Mobile',
      backend: 'Backend',
      learning: 'Learning',
      mobile_list: ['Xamarin', '.NET MAUI', 'MVVM Cross', 'SQLite'],
      backend_list: ['C#', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'Redis'],
      learning_list: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Figma']
    },
    projects: {
      title: 'Featured Projects',
      filter_all: 'All',
      filter_mobile: 'Mobile',
      filter_web: 'Web',
      filter_backend: 'Backend',
      spotlight: 'Spotlight',
      view_projects: 'View Projects'
    },
    articles: {
      title: 'Latest Articles',
      tab_site: 'On this site',
      tab_external: 'Virgool / Medium',
      read_more: 'Read More',
      external_read: 'Read at source'
    },
    work: {
      title: 'Work With Me',
      subtitle: 'Have a project in mind?',
      types: ['Full-time', 'Freelance', 'Consulting'],
      help_text: 'I can help you with mobile app development, backend system design, and technical consulting.',
      cta_email: 'Send Email',
      cta_cv: 'Download CV',
      cta_call: 'Book a Call'
    },
    contact: {
      title: 'Contact Me',
      description: 'I am always open to discussing new projects, ideas, and partnerships.',
      name_label: 'Your Name',
      email_label: 'Email',
      message_label: 'Message',
      send_btn: 'Send Message',
      copy_email: 'Copy email',
      copied_email: 'Email copied',
      toast_success: 'Message sent successfully!',
      name_error: 'Name must be at least 2 characters.',
      email_error: 'Please enter a valid email address.',
      message_error: 'Message must be at least 10 characters.'
    },
    footer: {
      rights: '© 2026 All rights reserved.',
      built_with: 'Designed in Figma, built with love and code.'
    }
  }
} as const;

export const projects: Project[] = [
  {
    id: 1,
    title: { en: 'Crypto Wallet App', fa: 'کیف پول ارز دیجیتال' },
    desc: { en: 'A secure mobile wallet built with .NET MAUI.', fa: 'یک کیف پول امن موبایل ساخته شده با دات‌نت مائوی.' },
    tags: ['Mobile', '.NET MAUI', 'C#'],
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1200',
    demoUrl: 'https://example.com/projects/crypto-wallet',
    repoUrl: 'https://github.com'
  },
  {
    id: 2,
    title: { en: 'E-commerce Dashboard', fa: 'داشبورد فروشگاهی' },
    desc: { en: 'Admin panel for managing products and orders.', fa: 'پنل مدیریت برای مدیریت محصولات و سفارشات.' },
    tags: ['Web', 'React', 'Tailwind'],
    category: 'web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    demoUrl: 'https://example.com/projects/ecommerce-dashboard',
    repoUrl: 'https://github.com'
  },
  {
    id: 3,
    title: { en: 'Task Manager API', fa: 'API مدیریت وظایف' },
    desc: { en: 'High-performance REST API with ASP.NET Core.', fa: 'رست ای‌پی‌آی با کارایی بالا با ASP.NET Core.' },
    tags: ['Backend', 'ASP.NET Core', 'SQL'],
    category: 'backend',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    demoUrl: 'https://example.com/projects/task-manager-api',
    repoUrl: 'https://github.com'
  },
  {
    id: 4,
    title: { en: 'Fitness Tracker', fa: 'ردیاب تناسب اندام' },
    desc: { en: 'Track your workouts and diet progress.', fa: 'پیگیری تمرینات و پیشرفت رژیم غذایی.' },
    tags: ['Mobile', 'Xamarin', 'Azure'],
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200',
    demoUrl: 'https://example.com/projects/fitness-tracker',
    repoUrl: 'https://github.com'
  },
  {
    id: 5,
    title: { en: 'Personal Blog', fa: 'وبلاگ شخصی' },
    desc: { en: 'Minimalist blog built with Next.js.', fa: 'وبلاگ مینیمال ساخته شده با Next.js.' },
    tags: ['Web', 'Next.js', 'MDX'],
    category: 'web',
    image: 'https://images.unsplash.com/photo-1499750310159-52f8f6152133?auto=format&fit=crop&q=80&w=1200',
    demoUrl: 'https://example.com/projects/personal-blog',
    repoUrl: 'https://github.com'
  },
  {
    id: 6,
    title: { en: 'Chat Application', fa: 'اپلیکیشن چت' },
    desc: { en: 'Real-time chat using SignalR.', fa: 'چت بلادرنگ با استفاده از SignalR.' },
    tags: ['Backend', 'SignalR', 'Redis'],
    category: 'backend',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200',
    demoUrl: 'https://example.com/projects/chat-app',
    repoUrl: 'https://github.com'
  }
];

export const articles: Article[] = [
  {
    id: 1,
    title: { en: 'Migrating from Xamarin to .NET MAUI', fa: 'مهاجرت از زامارین به دات‌نت مائوی' },
    date: { en: 'Oct 2023', fa: 'مهر ۱۴۰۲' },
    readTime: { en: '5 min read', fa: '۵ دقیقه مطالعه' },
    tags: ['.NET', 'Mobile'],
    excerpt: {
      en: 'A comprehensive guide on upgrading Xamarin.Forms apps to .NET MAUI.',
      fa: 'راهنمای جامع برای ارتقای اپلیکیشن‌های Xamarin.Forms به دات‌نت مائوی.'
    },
    externalUrl: 'https://medium.com'
  },
  {
    id: 2,
    title: {
      en: 'Understanding Dependency Injection in ASP.NET Core',
      fa: 'درک تزریق وابستگی در ASP.NET Core'
    },
    date: { en: 'Sep 2023', fa: 'شهریور ۱۴۰۲' },
    readTime: { en: '8 min read', fa: '۸ دقیقه مطالعه' },
    tags: ['Backend', 'Architecture'],
    excerpt: {
      en: 'Deep dive into service lifetimes and DI best practices for testable code.',
      fa: 'بررسی عمیق طول عمر سرویس‌ها و بهترین روش‌ها برای کد قابل تست.'
    },
    externalUrl: 'https://virgool.io'
  },
  {
    id: 3,
    title: { en: 'Getting Started with Tailwind CSS', fa: 'شروع کار با Tailwind CSS' },
    date: { en: 'Aug 2023', fa: 'مرداد ۱۴۰۲' },
    readTime: { en: '4 min read', fa: '۴ دقیقه مطالعه' },
    tags: ['Web', 'CSS'],
    excerpt: {
      en: 'Why utility-first CSS is changing the way we build user interfaces.',
      fa: 'چرا CSS مبتنی بر ابزار، نحوه ساخت رابط‌های کاربری را تغییر می‌دهد.'
    },
    externalUrl: 'https://dev.to'
  }
];

export function getDirection(language: Language): Direction {
  return language === 'fa' ? 'rtl' : 'ltr';
}
