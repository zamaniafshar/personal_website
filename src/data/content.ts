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

export const personalInfo = {
  email: "zamani3509@gmail.com",
  location: "Kerman, Iran (Remote)",
  github: "",
  linkedin: "",
  instagram: "",
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
      greeting: 'امین زمانی افشار',
      role: 'توسعه‌دهنده فول‌استک',
      description: 'وب‌سایتی که نتیجه بده، بک‌اندی قابل‌اعتماد، یا رباتی که کارهای تکراری رو خودکار کنه؟ من اینها رو برای کسب‌وکارها، استارتاپ‌ها و کارآفرینان مستقل می‌سازم؛ از ایده تا محصول نهایی، با بیش از ۵ سال تجربه.',
      cta_projects: 'مشاهده پروژه‌ها',
      cta_articles: 'خواندن مقالات',
      hud_online: 'آنلاین',
      hud_build: 'نسخه ۲.۱.۴',
      hud_latency: '۱۲ میلی‌ثانیه',
      signature: 'در حال اجرای سیستم...'
    },
    about: {
      title: 'درباره من',
      bio: 'از وقتی برنامه‌نویسی رو شروع کردم، چیزی که همیشه برام لذت‌بخش بوده، دیدن یه ایده‌ست که از روی کاغذ میاد بیرون و تبدیل به یه محصول واقعی می‌شه که آدم‌ها ازش استفاده می‌کنن. برای همین بیش از ۵ ساله که کنار کسب‌وکارها، استارتاپ‌ها و کارآفرینان مستقل می‌ایستم تا نیازشون رو به وب‌سایت، بک‌اند یا اپلیکیشنی تبدیل کنم که واقعاً کار می‌کنه. تخصص اصلی من ساخت وب‌سایت و بک‌اندهای قدرتمنده، و یکی از حوزه‌هایی که بیشتر از همه روش تمرکز دارم ساخت ربات‌های تلگرامه؛ چون می‌دونم چقدر می‌تونه فرایندهای یه کسب‌وکار رو ساده‌تر کنه. در کنار این‌ها، تجربه عملی در ساخت اپلیکیشن موبایل هم دارم.',
      what_i_do: [
        'توسعه اپلیکیشن‌های  کراس پلتفرم با استفاده از فلاتر',
        'توسعه اپلیکیشن های نیتیو برای پلتفرم های Android & IOS',
        'طراحی و توسعه بک‌اند‌های پیچیده و مقیاس‌پذیر با ASP.NET Core ',
        'توسعه وب سایت های مدرن و کارآمد با React و Next.js',
      ],
      chips: ['کدنویسی 👨🏻‍💻', 'گیم 🎮', 'عاشق قهوه ☕️', 'طبیعت 🌳'],
      yearsExp: "سال تجربه",
      projects: "پروژه"
    },
    services: {
      title: 'چه کاری می‌تونم برات انجام بدم؟',
      mobile: 'اپلیکیشن موبایل',
      web: 'وب‌سایت و بک‌اند',
      bot: 'ربات‌های تلگرام',
      mobile_desc: "اپلیکیشنی برای آیفون یا اندروید نیاز داری که سریع، امن و بدون مشکل اجرا بشه؟ من طراحی و توسعه‌ش رو از صفر تا انتشار برات انجام می‌دم.",
      web_desc: "از یه وب‌سایت ساده گرفته تا سیستمی پیچیده با بک‌اندی مقیاس‌پذیر، هر چی کسب‌وکارت بهش نیاز داره رو طراحی و پیاده‌سازی می‌کنم؛ سریع، امن و آماده برای رشد.",
      bot_desc: "می‌خوای فرایندهای تکراری رو خودکار کنی یا مستقیم با مشتری‌هات روی تلگرام در ارتباط باشی؟ این دقیقاً همون چیزیه که توش تخصص دارم؛ از ربات فروشگاهی تا سیستم‌های مدیریتی هوشمند.",
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
      subtitle: 'ایده‌ای تو ذهنته؟ بیا با هم شروعش کنیم.',
      types: ['تمام‌وقت', 'پروژه‌ای', 'مشاوره'],
      help_text: 'هر چی باشه؛ یه وب‌سایت ساده، یه بک‌اند پیچیده، یه ربات تلگرام یا یه اپلیکیشن موبایل، کنارتم تا از ایده به یه محصول واقعی برسیم.',
      cta_email: 'ارسال ایمیل',
      cta_cv: 'دانلود رزومه',
      cta_call: 'رزرو مشاوره'
    },
    contact: {
      title: 'تماس با من',
      description: 'پروژه‌ای تو ذهنته یا فقط می‌خوای حرف بزنیم؟ خوشحال می‌شم بشنوم. بیایید یک پروژه شروع کنیم 🚀',
      name_label: 'نام شما',
      email_label: 'ایمیل',
      message_label: 'پیام',
      send_btn: 'ارسال پیام',
      copy_email: 'کپی ایمیل',
      copied_email: 'ایمیل کپی شد',
      toast_success: 'پیام شما با موفقیت ارسال شد!',
      name_error: 'نام باید حداقل ۲ کاراکتر باشد.',
      email_error: 'یک ایمیل معتبر وارد کنید.',
      message_error: 'پیام باید حداقل ۱۰ کاراکتر باشد.',
      message_hint: "درباره پروژت یا ایدت بهم بگو ...",
      name_hint: "امین زمانی افشار"
    },
    footer: {
      rights: '© ۱۴۰۴ تمامی حقوق محفوظ است.',
      built_with: 'ساخته شده با ☕️ + ❤️'
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
      greeting: "Hi, I'm Amin Zamani Afshar",
      role: 'Software Engineer — Websites, Backends & Telegram Bots',
      description: 'A website that converts. A backend you can trust. A Telegram bot that automates the busywork. I build these for businesses, startups, and solo founders — from idea to finished product, backed by 5+ years of experience.',
      cta_projects: 'View Projects',
      cta_articles: 'Read Articles',
      cta_contact: "Let's start your project",
      hud_online: 'ONLINE',
      hud_build: 'v2.0.4',
      hud_latency: '12ms',
      signature: 'System initializing...'
    },
    about: {
      title: 'About Me',
      bio: "Ever since I started coding, the thing I've loved most is watching an idea move off the page and into something real that people actually use. That's why, for over 5 years, I've worked alongside businesses, startups, and solo founders to turn what they need into a website, backend, or app that actually works. My core expertise is building powerful websites and backends, and one area I focus on more than most is Telegram bots — because I've seen how much they can simplify a business. Alongside that, I also have hands-on experience building mobile apps.",
      what_i_do: [
        '✅ Websites & web apps — with React and Next.js',
        '✅ Secure, scalable backends & APIs — with ASP.NET Core and .NET',
        '✅ Telegram bots & automation — my specialty',
        '✅ Mobile apps — with Flutter, for Android and iOS',
      ],
      chips: ['Developer', 'Gamer', 'Coffee Lover', 'Night Coder'],
      yearsExp: "Years Exp",
      projects: "Projects"
    },
    services: {
      title: "What Can I Do For You?",
      mobile: "Mobile Apps",
      web: "Websites & Backends",
      bot: "Telegram Bots",
      mobile_desc: "Need an app for iPhone or Android that's fast, secure, and just works? I handle it end-to-end, from design to launch.",
      web_desc: "From a simple website to a complex system with a scalable backend, I design and build whatever your business needs — fast, secure, and ready to grow.",
      bot_desc: "Want to automate repetitive tasks or talk directly to your customers on Telegram? This is exactly where I specialize — from storefront bots to smart management systems.",
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
      subtitle: 'Have a project in mind? Let\'s start it together.',
      types: ['Full-time', 'Freelance', 'Consulting'],
      help_text: 'Whatever it is — a simple website, a complex backend, a Telegram bot, or a mobile app — I\'m here to take it from idea to a real product.',
      cta_email: 'Send Email',
      cta_cv: 'Download CV',
      cta_call: 'Book a Call'
    },
    contact: {
      title: 'Contact Me',
      description: "Got a project in mind, or just want to chat? I'd love to hear from you. Let's start a project together 🚀",
      name_label: 'Your Name',
      email_label: 'Email',
      message_label: 'Message',
      send_btn: 'Send Message',
      copy_email: 'Copy email',
      copied_email: 'Email copied',
      toast_success: 'Message sent successfully!',
      name_error: 'Name must be at least 2 characters.',
      email_error: 'Please enter a valid email address.',
      message_error: 'Message must be at least 10 characters.',
      message_hint: "Tell me about your project ...",
      name_hint: "Amin Zamani Afshar"
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
    title: { en: 'SignalECU', fa: 'SignalECU' },
    desc: {
      en: 'A secure mobile wallet built with .NET MAUI.',
      fa: 'اپلیکیشن عیب‌یابی و آموزش ماشین‌آلات سنگین، توسعه داده شده با فلاتر برای اندروید و ای او اس.'
    },
    tags: ['Mobile', 'Flutter', 'Article Rendering'],
    category: 'mobile',
    image: '/projects/signal_ecu_banner.png',
    demoUrl: 'https://signalecu.ir/',
    repoUrl: ''
  },
  {
    id: 2,
    title: { en: 'Explore Hub', fa: 'اکسپلور هاب' },
    desc: {
      en: 'A digital marketplace e-commerce website developed with Next.js for selling digital products like gaming accounts, Spotify, and AI accounts.',
      fa: 'وبسایت فروشگاهی توسعه‌یافته با Next.js برای فروش محصولات دیجیتال مانند اکانت‌های گیمینگ، اسپاتیفای، هوش مصنوعی و غیره.'
    },
    tags: ['Web', 'Next.js', 'Tailwind CSS', 'E-commerce'],
    category: 'web',
    image: '/projects/explorehub_page_banner.png',
    demoUrl: 'https://explorehub.ir/',
    repoUrl: ''
  },
  {
    id: 3,
    title: { en: 'Badankhoba Telegram Bot', fa: 'ربات تلگرام بدنخوبا' },
    desc: {
      en: 'A Telegram bot for getting personalized workout plans and watching exercise tutorials for the Badankhoba fitness brand.',
      fa: 'ربات تلگرام ثبت‌نام، دریافت برنامه تمرینی و تغذیه اختصاصی و مشاهده ویدیوهای آموزشی تیم بدنخوبا که با دات‌نت توسعه یافته است.'
    },
    tags: ['Telegram Bot', '.NET', 'C#', 'Backend'],
    category: 'backend',
    image: '/projects/badankhoba_banner.jpeg',
    demoUrl: 'https://t.me/Badankhooba_Bot',
    repoUrl: ''
  },
  {
    id: 4,
    title: { en: 'E-commerce Dashboard', fa: 'SPtimer | Smart Pomodoro Timer' },
    desc: {
      en: 'Admin panel for managing products and orders.',
      fa: 'اپلیکیشن اوپن سورس توسعه‌یافته با فلاتر، با بیش از ۱۰,۰۰۰ نصب در بازار، با استفاده از تکنیک پومودورو به کاربران کمک می‌کند تا تمرکز خود را افزایش داده و خستگی در حین انجام کارهای روزانه را کاهش دهند، تا بتوانند به نتایج بهتری دست یابند.'
    },
    tags: ['Mobile', 'Flutter', 'Open Source'],
    category: 'mobile',
    image: '/projects/sptimer_banner.png',
    demoUrl: 'https://cafebazaar.ir/app/smart.pomodoro.timer',
    repoUrl: 'https://github.com/zamaniafshar/sptimer'
  },
  {
    id: 5,
    title: { en: 'Task Manager API', fa: 'Bong Music' },
    desc: {
      en: 'High-performance REST API with ASP.NET Core.',
      fa: 'یک موزیک‌پلیر کراس پلتفرم با قابلیت استعداد‌یابی مشابه اپلیکیشن StarMaker. این برنامه به کاربران امکان می‌دهد تا موزیک گوش کنند، موزیک‌ویدئو بسازند و استعداد خود را به نمایش بگذارند. دارای قابلیت‌هایی مانند ضبط و ادیت صدا، ایجاد پروفایل شخصی و اشتراک‌گذاری محتوا و ... میباشد.'
    },
    tags: ['Music Player', 'Flutter', 'Talent Finder'],
    category: 'mobile',
    image: '/projects/bongmusic_banner.png',
    demoUrl: 'https://github.com/zamaniafshar/project-showcase/tree/main/BongMusicApp',
    repoUrl: ''
  },
  {
    id: 6,
    title: { en: 'Fitness Tracker', fa: 'Infi Talk' },
    desc: {
      en: 'Track your workouts and diet progress.',
      fa: 'اپلیکیشن مترجم کراس پلتفرم با بهره‌گیری از هوش مصنوعی Azure برای ترجمه دقیق و سریع. این برنامه با طراحی زیبا و کاربرپسند، امکان ترجمه بیش از ۱۰۰ زبان زنده دنیا را فراهم می‌کند. قابلیت‌های کلیدی شامل ترجمه صوتی، تبدیل ویس به متن، و ترجمه آنی است که تجربه‌ای روان و کاربردی برای کاربران ایجاد می‌کند.'
    },
    tags: ['Mobile', 'Translator', 'Flutter'],
    category: 'mobile',
    image: '/projects/infitalk_banner.png',
    demoUrl: '',
    repoUrl: 'https://github.com/zamaniafshar/project-showcase/tree/main/InfiTalk'
  },
  {
    id: 7,
    title: { en: 'Personal Blog', fa: 'وبلاگ شخصی' },
    desc: { en: 'Minimalist blog built with Next.js.', fa: 'وبلاگ مینیمال ساخته شده با Next.js.' },
    tags: ['Web', 'Next.js', 'MDX'],
    category: 'web',
    image: '/projects/personal_website_banner.png',
    demoUrl: '',
    repoUrl: ''
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