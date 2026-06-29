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

export interface ExperienceItem {
  id: number;
  role: LocalizedText;
  company: LocalizedText;
  period: LocalizedText;
  type: LocalizedText;
  points: LocalizedText[];
}

export interface Testimonial {
  id: number;
  name: LocalizedText;
  role: LocalizedText;
  rating: number;
  quote: LocalizedText;
  /** optional avatar path under /public, e.g. /testimonials/ali.jpg */
  avatar?: string;
}

export const personalInfo = {
  name: { en: 'Amin Zamani Afshar', fa: 'امین زمانی افشار' } as LocalizedText,
  email: 'zamani3509@gmail.com',
  phone: '',
  location: { en: 'Kerman, Iran · Remote', fa: 'کرمان، ایران · دورکاری' } as LocalizedText,
  github: 'https://github.com/zamaniafshar',
  linkedin: 'https://www.linkedin.com/in/zamani-afshar/',
  instagram: 'https://www.instagram.com/amin.devlog/',
  telegram: 'https://t.me/amin_zamani_afshar',
  // Leave empty to fall back to an email link. Drop in a Calendly / Cal.com URL to enable booking.
  bookingUrl: 'https://calendar.app.google/syZuknLSjKC9eTM6A',
  // Optional: link to a hosted PDF résumé. Falls back to an email request when empty.
  cvUrl: ''
};

export const content = {
  fa: {
    nav: {
      home: 'خانه',
      about: 'درباره من',
      services: 'خدمات',
      projects: 'پروژه‌ها',
      experience: 'تجربه',
      testimonials: 'نظرها',
      contact: 'تماس'
    },
    theme: {
      to_light: 'حالت روشن',
      to_dark: 'حالت تیره'
    },
    hero: {
      welcome: "سلام خوش اومدی!",
      greeting: 'امین زمانی افشار',
      role: 'فول استک دولوپر',
      typing_texts: [
        'فول استک دولوپر',
        'خالق محصولات موثر',
        'عاشق حل چالش ها',
        'کسب و کارت انلاین کن!',
      ],
      cta_projects: 'دیدن پروژه‌ها',
      cta_contact: 'بیا پروژه‌ات را شروع کنیم',
      cta_book: 'یک زمان ملاقات انتخاب کن 😎',
      stat_years: 'سال تجربه',
      stat_projects: 'پروژه‌ی انجام‌شده',
      stat_clients: 'رضایت مشتری'
    },
    about: {
      title: 'درباره من',
      kicker: 'بیایید آشنا شویم',
      bio: 'علاقه‌ی من به برنامه‌نویسی از جایی شروع شد که فهمیدم با چند خط کد توی یک صحفه سیاه و سفید، میشه کلی چیزای جذاب و باحال ساخت و کلی از مشکلات حل کرد. از سال ۱۳۹۹ به‌صورت حرفه‌ای در دنیای توسعه نرم‌افزار فعالیت می‌کنم. همیشه تلاش کرده‌ام راه‌حل‌هایی بسازم که هم از نظر فنی دقیق باشند و هم برای آدم‌ها واقعاً کاربردی باشند.',
      bio2: ' بر اساس نیاز هر پروژه، می‌توانم در طراحی وب‌سایت، ساخت اپلیکیشن‌های موبایل، توسعه‌ی بک‌اندهای مقیاس‌پذیر، طراحی ربات‌های تلگرام و پیاده‌سازی راه‌حل‌های نرم‌افزاری اختصاصی همراه شما باشم. از اولین خط کد تا آخرین لحظه‌ی انتشار، قدم‌به‌قدم کنار شما هستم تا ایده‌تان با دقت، شفافیت و کیفیت به یک محصول واقعی تبدیل شود.',
      what_i_do_title: 'چه کارهایی انجام می‌دهم',
      what_i_do: [
        'توسعه اپلیکیشن‌های  کراس پلتفرم با استفاده از فلاتر',
        'توسعه اپلیکیشن های نیتیو برای پلتفرم های Android & IOS',
        'طراحی و توسعه بک‌اند‌های پیچیده و مقیاس‌پذیر با ASP.NET Core ',
        'توسعه وب سایت های مدرن و کارآمد با React و Next.js',
      ],
      chips: ['کدنویسی 👨🏻‍💻', 'گیم 🎮', 'عاشق قهوه ☕️', 'طبیعت 🌳']
    },
    services: {
      kicker: 'خدمات من',
      title: 'چه کاری می‌تونم برات انجام بدم؟',
      subtitle: 'هر چیزی که کسب‌وکارت لازم دارد را از صفر تا انتشار کنارت می‌سازم.',
      mobile: 'اپلیکیشن موبایل',
      web: 'وب‌سایت و بک‌اند',
      bot: 'ربات‌های تلگرام',
      mobile_desc:
        'اپلیکیشنی برای آیفون یا اندروید نیاز داری که سریع، امن و بدون مشکل اجرا بشه؟ طراحی و توسعه‌اش را از صفر تا انتشار برات انجام می‌دم.',
      web_desc:
        'از یک وب‌سایت ساده گرفته تا سیستمی پیچیده با بک‌اندی مقیاس‌پذیر، هر چی کسب‌وکارت بهش نیاز داره را طراحی و پیاده‌سازی می‌کنم؛ سریع، امن و آماده برای رشد.',
      bot_desc:
        'می‌خوای فرایندهای تکراری را خودکار کنی یا مستقیم با مشتری‌هات روی تلگرام در ارتباط باشی؟ این دقیقاً همان چیزیه که توش تخصص دارم؛ از ربات فروشگاهی تا سیستم‌های مدیریتی هوشمند.'
    },
    projects: {
      kicker: 'نمونه‌کارها',
      title: 'پروژه‌های منتخب',
      subtitle: 'گزیده‌ای از چیزهایی که با علاقه ساخته‌ام و منتشر کرده‌ام.',
      filter_all: 'همه',
      filter_mobile: 'موبایل',
      filter_web: 'وب',
      filter_backend: 'بک‌اند',
      spotlight: 'پروژه ویژه',
      view_demo: 'مشاهده',
      view_code: 'کد'
    },
    experience: {
      kicker: 'مسیر کاری',
      title: 'تجربه‌ی من',
      subtitle: 'جایی که یاد گرفتم، رشد کردم و محصول ساختم.'
    },
    testimonials: {
      kicker: 'اعتماد دیگران',
      title: 'دیگران درباره‌ی من چه می‌گویند؟',
      subtitle:
        'هیچ چیز دلگرم‌کننده‌تر از شنیدن نظر کسانی نیست که با آن‌ها کار کرده‌ام. 💛'
    },
    articles: {
      kicker: 'بلاگ',
      title: 'آخرین مقالات',
      subtitle: 'هر چیزی که یاد می‌گیرم را اینجا می‌نویسم.',
      tab_site: 'در این سایت',
      tab_external: 'ویرگول / مدیوم',
      read_more: 'ادامه مطلب',
      external_read: 'مطالعه در منبع خارجی'
    },
    work: {
      kicker: 'بیا با هم کار کنیم',
      title: 'آماده‌ای پروژه‌ات را شروع کنی؟',
      subtitle: 'ایده‌ای تو ذهنته؟ بیا با هم شروعش کنیم.',
      types: ['تمام‌وقت', 'پروژه‌ای', 'مشاوره'],
      help_text:
        'هر چی باشه؛ یه وب‌سایت ساده، یه بک‌اند پیچیده، یه ربات تلگرام یا یه اپلیکیشن موبایل، کنارتم تا از ایده به یه محصول واقعی برسیم.',
      cta_email: 'ارسال ایمیل',
      cta_cv: 'دانلود رزومه',
      cta_call: 'رزرو جلسه'
    },
    contact: {
      kicker: 'تماس',
      title: 'مشتاق شنیدن از تو هستم',
      description:
        'پروژه‌ای تو ذهنته یا فقط می‌خوای حرف بزنیم؟ خوشحال می‌شم بشنوم. بیایید یک پروژه شروع کنیم 🚀',
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
      message_hint: 'درباره پروژت یا ایدت بهم بگو ...',
      name_hint: 'امین زمانی افشار',
      email_box: 'ایمیل',
      location_box: 'موقعیت'
    },
    footer: {
      rights: '© ۱۴۰۴ امین زمانی افشار — تمامی حقوق محفوظ است.',
      built_with: 'ساخته‌شده با ☕️ و ❤️'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      experience: 'Experience',
      testimonials: 'Reviews',
      contact: 'Contact'
    },
    theme: {
      to_light: 'Light mode',
      to_dark: 'Dark mode'
    },
    hero: {
      welcome: "Hi, Welcome to my website!",
      greeting: "I'm Amin Zamani Afshar",
      role: 'Full-Stack Developer',
      typing_texts: [
        'Full Stack Developer',
        'Creator of Effective Products',
        'Love Solving Challenges',
        'Take Your Business Online!',
      ],
      cta_projects: 'View Projects',
      cta_contact: "Let's start your project",
      cta_book: 'Pick a time that works for you 😊',
      stat_years: 'Years of experience',
      stat_projects: 'Projects delivered',
      stat_clients: 'Happy clients'
    },
    about: {
      title: 'About Me',
      kicker: 'Get to know me',
      bio:
        "Ever since I started coding, the thing I've loved most is watching an idea move off the page and into something real that people actually use. That's why, for over 5 years, I've worked alongside businesses, startups, and solo founders to turn what they need into a website, backend, or app that actually works.",
      bio2:
        "My core expertise is building powerful websites and backends, and one area I focus on more than most is Telegram bots — because I've seen how much they can simplify a business. Alongside that, I also have hands-on experience building mobile apps.",
      what_i_do_title: 'What I do',
      what_i_do: [
        'Websites & web apps — with React and Next.js',
        'Secure, scalable backends & APIs — with ASP.NET Core and .NET',
        'Telegram bots & automation — my specialty',
        'Mobile apps — with Flutter, for Android and iOS'
      ],
      chips: ['Developer', 'Gamer', 'Coffee Lover', 'Nature']
    },
    services: {
      kicker: 'What I offer',
      title: 'What Can I Do For You?',
      subtitle: 'Whatever your business needs, I build it end-to-end — from idea to launch.',
      mobile: 'Mobile Apps',
      web: 'Websites & Backends',
      bot: 'Telegram Bots',
      mobile_desc:
        "Need an app for iPhone or Android that's fast, secure, and just works? I handle it end-to-end, from design to launch.",
      web_desc:
        'From a simple website to a complex system with a scalable backend, I design and build whatever your business needs — fast, secure, and ready to grow.',
      bot_desc:
        'Want to automate repetitive tasks or talk directly to your customers on Telegram? This is exactly where I specialize — from storefront bots to smart management systems.'
    },
    projects: {
      kicker: 'Selected work',
      title: 'Featured Projects',
      subtitle: "A selection of things I've built and shipped with care.",
      filter_all: 'All',
      filter_mobile: 'Mobile',
      filter_web: 'Web',
      filter_backend: 'Backend',
      spotlight: 'Spotlight',
      view_demo: 'View',
      view_code: 'Code'
    },
    experience: {
      kicker: 'Career path',
      title: 'My Experience',
      subtitle: 'Where I learned, grew, and shipped products.'
    },
    testimonials: {
      kicker: 'Trusted by others',
      title: 'What People Say About Me',
      subtitle:
        "There's nothing more rewarding than hearing from the people I've worked with. 💛"
    },
    articles: {
      kicker: 'Blog',
      title: 'Latest Articles',
      subtitle: 'I write about everything I learn.',
      tab_site: 'On this site',
      tab_external: 'Virgool / Medium',
      read_more: 'Read More',
      external_read: 'Read at source'
    },
    work: {
      kicker: "Let's work together",
      title: 'Ready to start your project?',
      subtitle: "Have a project in mind? Let's start it together.",
      types: ['Full-time', 'Freelance', 'Consulting'],
      help_text:
        "Whatever it is — a simple website, a complex backend, a Telegram bot, or a mobile app — I'm here to take it from idea to a real product.",
      cta_email: 'Send Email',
      cta_cv: 'Download CV',
      cta_call: 'Book a Call'
    },
    contact: {
      kicker: 'Contact',
      title: "I'd love to hear from you",
      description:
        "Got a project in mind, or just want to chat? I'd love to hear from you. Let's start a project together 🚀",
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
      message_hint: 'Tell me about your project ...',
      name_hint: 'Amin Zamani Afshar',
      email_box: 'Email',
      location_box: 'Location'
    },
    footer: {
      rights: '© 2026 Amin Zamani Afshar — All rights reserved.',
      built_with: 'Built with ☕️ and ❤️'
    }
  }
} as const;

export const projects: Project[] = [
  {
    id: 1,
    title: { en: 'SignalECU', fa: 'SignalECU' },
    desc: {
      en: 'A diagnostics and training app for heavy machinery, built with Flutter for Android and iOS.',
      fa: 'اپلیکیشن عیب‌یابی و آموزش ماشین‌آلات سنگین، توسعه داده شده با فلاتر برای اندروید و iOS.'
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
      en: 'A digital marketplace built with Next.js for selling digital products like gaming accounts, Spotify, and AI subscriptions.',
      fa: 'وب‌سایت فروشگاهی توسعه‌یافته با Next.js برای فروش محصولات دیجیتال مانند اکانت‌های گیمینگ، اسپاتیفای، هوش مصنوعی و غیره.'
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
    title: { en: 'SPtimer | Smart Pomodoro Timer', fa: 'SPtimer | تایمر پومودورو هوشمند' },
    desc: {
      en: 'An open-source Flutter app with 10,000+ installs that helps users focus using the Pomodoro technique and reduce fatigue during daily tasks.',
      fa: 'اپلیکیشن اوپن سورس توسعه‌یافته با فلاتر، با بیش از ۱۰,۰۰۰ نصب در بازار، با استفاده از تکنیک پومودورو به کاربران کمک می‌کند تمرکز خود را افزایش داده و خستگی حین انجام کارهای روزانه را کاهش دهند.'
    },
    tags: ['Mobile', 'Flutter', 'Open Source'],
    category: 'mobile',
    image: '/projects/sptimer_banner.png',
    demoUrl: 'https://cafebazaar.ir/app/smart.pomodoro.timer',
    repoUrl: 'https://github.com/zamaniafshar/sptimer'
  },
  {
    id: 5,
    title: { en: 'Bong Music', fa: 'Bong Music' },
    desc: {
      en: 'A cross-platform music player with talent-discovery features inspired by StarMaker — letting users listen, record and edit audio, build music videos, create profiles and share content.',
      fa: 'یک موزیک‌پلیر کراس پلتفرم با قابلیت استعدادیابی مشابه اپلیکیشن StarMaker. این برنامه به کاربران امکان می‌دهد تا موزیک گوش کنند، موزیک‌ویدئو بسازند و استعداد خود را به نمایش بگذارند. دارای قابلیت‌هایی مانند ضبط و ادیت صدا، ایجاد پروفایل شخصی و اشتراک‌گذاری محتوا و ... می‌باشد.'
    },
    tags: ['Music Player', 'Flutter', 'Talent Finder'],
    category: 'mobile',
    image: '/projects/bongmusic_banner.png',
    demoUrl: 'https://github.com/zamaniafshar/project-showcase/tree/main/BongMusicApp',
    repoUrl: ''
  },
  {
    id: 6,
    title: { en: 'Infi Talk', fa: 'Infi Talk' },
    desc: {
      en: 'A cross-platform translator app powered by Azure AI for fast, accurate translation across 100+ languages — with voice translation, speech-to-text and instant translation.',
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
    title: { en: 'Personal Website', fa: 'وب‌سایت شخصی' },
    desc: {
      en: 'A bilingual, minimalist personal website built with Next.js and MDX.',
      fa: 'وب‌سایت شخصی دوزبانه و مینیمال ساخته شده با Next.js و MDX.'
    },
    tags: ['Web', 'Next.js', 'MDX'],
    category: 'web',
    image: '/projects/personal_website_banner.png',
    demoUrl: '',
    repoUrl: 'https://github.com/zamaniafshar/personal_website'
  }
];

/**
 * Work experience timeline.
 * NOTE: These entries are starter examples — replace the company names,
 * periods and bullet points with your real history.
 */
export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: { en: 'Senior Full-Stack Developer', fa: 'توسعه‌دهنده‌ی ارشد فول‌استک' },
    company: { en: 'Freelance · Remote', fa: 'فریلنس · دورکاری' },
    period: { en: '2022 — Present', fa: '۱۴۰۱ — اکنون' },
    type: { en: 'Freelance', fa: 'پروژه‌ای' },
    points: [
      {
        en: 'Designed and shipped websites, scalable backends and Telegram bots for businesses and startups.',
        fa: 'طراحی و انتشار وب‌سایت، بک‌اند مقیاس‌پذیر و ربات تلگرام برای کسب‌وکارها و استارتاپ‌ها.'
      },
      {
        en: 'Built end-to-end products from idea to launch with React, Next.js and ASP.NET Core.',
        fa: 'ساخت محصول از ایده تا انتشار با React، Next.js و ASP.NET Core.'
      }
    ]
  },
  {
    id: 2,
    role: { en: 'Backend Developer (.NET)', fa: 'توسعه‌دهنده‌ی بک‌اند (دات‌نت)' },
    company: { en: 'Software Company', fa: 'شرکت نرم‌افزاری' },
    period: { en: '2020 — 2022', fa: '۱۳۹۹ — ۱۴۰۱' },
    type: { en: 'Full-time', fa: 'تمام‌وقت' },
    points: [
      {
        en: 'Developed secure REST APIs and management systems with ASP.NET Core and SQL Server.',
        fa: 'توسعه‌ی API امن و سیستم‌های مدیریتی با ASP.NET Core و SQL Server.'
      },
      {
        en: 'Improved performance, data security and code maintainability across services.',
        fa: 'بهبود کارایی، امنیت داده و نگه‌داری کد در سرویس‌های مختلف.'
      }
    ]
  },
  {
    id: 3,
    role: { en: 'Mobile Developer (Flutter)', fa: 'توسعه‌دهنده‌ی موبایل (فلاتر)' },
    company: { en: 'Product Team', fa: 'تیم محصول' },
    period: { en: '2019 — 2020', fa: '۱۳۹۸ — ۱۳۹۹' },
    type: { en: 'Full-time', fa: 'تمام‌وقت' },
    points: [
      {
        en: 'Built cross-platform mobile apps for Android and iOS, published on app stores.',
        fa: 'ساخت اپلیکیشن کراس‌پلتفرم برای اندروید و iOS و انتشار در استورها.'
      },
      {
        en: 'Collaborated closely with designers to ship clean, user-friendly experiences.',
        fa: 'همکاری نزدیک با طراحان برای ارائه‌ی تجربه‌ی کاربری تمیز و کاربرپسند.'
      }
    ]
  }
];

/**
 * Testimonials / recommendations.
 * NOTE: These are placeholder examples. Replace name, role and quote with real
 * recommendations (e.g. from LinkedIn). Add an avatar image under /public/testimonials/.
 */
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: { en: 'Team Lead', fa: 'سرپرست تیم' },
    role: { en: 'CTO · Startup', fa: 'مدیر فنی · استارتاپ' },
    rating: 5,
    quote: {
      en: 'Amin took our project from initial scope all the way to production and owned both the backend and the frontend with equal care. Reliable, communicative and genuinely easy to work with — any team would be lucky to have him.',
      fa: 'لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. این متن به عنوان یک عنصر ساختگی و بدون معنی به کار می‌رود تا طراحان بتوانند بر روی عناصر بصری مانند فونت، رنگ، اندازه و چیدمان تمرکز کنند.'
    }
  },
  {
    id: 2,
    name: { en: 'Product Manager', fa: 'مدیر محصول' },
    role: { en: 'Founder', fa: 'بنیان‌گذار' },
    rating: 5,
    quote: {
      en: 'He single-handedly built our Telegram bot from start to finish — architecture, implementation and ship. Calm under pressure and great to collaborate with.',
      fa: 'لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. این متن به عنوان یک عنصر ساختگی و بدون معنی به کار می‌رود تا طراحان بتوانند بر روی عناصر بصری مانند فونت، رنگ، اندازه و چیدمان تمرکز کنند.'
    }
  },
  {
    id: 3,
    name: { en: 'Colleague', fa: 'همکار' },
    role: { en: 'Senior Developer', fa: 'توسعه‌دهنده‌ی ارشد' },
    rating: 5,
    quote: {
      en: 'Strong technical knowledge, structured and organized, and always follows through with precision. His positive energy brings momentum to every project.',
      fa: 'لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. این متن به عنوان یک عنصر ساختگی و بدون معنی به کار می‌رود تا طراحان بتوانند بر روی عناصر بصری مانند فونت، رنگ، اندازه و چیدمان تمرکز کنند.'
    }
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
