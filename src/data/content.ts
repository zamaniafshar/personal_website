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
      greeting: 'سلام، من امین زمانی افشار هستم',
      role: 'یک برنامه نویس',
      description: 'با بیش از ۵ سال تجربه در ساخت اپلیکیشن های مدرن و کارآمد',
      cta_projects: 'مشاهده پروژه‌ها',
      cta_articles: 'خواندن مقالات',
      hud_online: 'آنلاین',
      hud_build: 'نسخه ۲.۰.۴',
      hud_latency: '۱۲ میلی‌ثانیه',
      signature: 'در حال اجرای سیستم...'
    },
    about: {
      title: 'درباره من',
      bio: 'من یک توسعه‌دهنده نرم‌افزار با اشتیاق به ساخت رابط‌های کاربری زیبا و کاربردی هستم. تمرکز اصلی من بر روی ساخت اپلیکیشن های موبایل بوده است، اما اکنون با هیجان به دنیای بک اند و فرانت اند وارد شده‌ام.',
      what_i_do: [
        'توسعه اپلیکیشن‌های  کراس پلتفرم با استفاده از فلاتر',
        'توسعه اپلیکیشن های نیتیو برای پلتفرم های Android & IOS',
        'طراحی و توسعه بک‌اند‌های پیچیده و مقیاس‌پذیر با ASP.NET Core ',
        'درحال یادگیری و کسب تجربه با React و Next.js',
      ],
      chips: ['کدنویسی 👨🏻‍💻', 'گیم 🎮', 'عاشق قهوه ☕️', 'طبیعت 🌳'],
      yearsExp: "سال تجربه",
      projects: "پروژه"
    },
    services: {
      title: 'من چه کاری میتونم برات کنم؟',
      mobile: 'اپلیکیشن های موبایل',
      web: 'طراحی وبسایت',
      desktop: 'نرم افزار های دسکتاپ',
      mobile_desc: "با تخصص در توسعه اپلیکیشن‌های موبایل، می‌توانم برنامه‌های کاربردی جذاب  برای سیستم‌عامل‌های ای او اس  و اندروید طراحی کنم. اعم از برنامه‌های نیتیو یا کراس‌پلتفرم، من برنامه‌هایی با بهینه‌سازی عملکرد، امنیت و قابلیت مقیاس‌پذیری ایجاد می‌کنم که نیازهای شما را برآورده کند.",
      web_desc: "به دنبال ساخت وب اپلیکیشنی منحصر به‌ فرد که با نیازهای شما هماهنگ باشد هستید؟  من در طراحی و توسعه برنامه‌های وب پویا و سفارشی تخصص دارم و  با توجه به هدف‌ها  و نیازهای کاربران شما،  می‌توانم برنامه‌های وب ساده یا پیچیده  منطبق با نیاز های شما طراحی و توسعه دهم.",
      desktop_desc: "به عنوان یک توسعه‌دهنده دسکتاپ، من برنامه‌هایی  با طراحی مدرن  و قابل اعتماد ایجاد می‌کنم که نیازهای شما را برآورده می‌کنند. اعم از برنامه‌های مستقل تا نرم‌افزار سطح شرکتی، من برنامه‌هایی را ساخته و طراحی می‌کنم که در هر محیطی به خوبی عمل کنند.",
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
      chips: ['Developer', 'Gamer', 'Coffee Lover', 'Night Coder'],
      yearsExp: "Years Exp",
      projects: "Projects"
    },
    services: {
      title: "How Can I Help You?",
      mobile: "Mobile App Development",
      web: "Website Design & Development",
      desktop: "Desktop Application Development",
      mobile_desc: "I specialize in crafting engaging mobile applications for both iOS and Android platforms. Whether you need native or cross-platform solutions, I build optimized, secure, and scalable apps that meet your specific requirements.",
      web_desc: "Looking for a unique web application perfectly aligned with your needs? I specialize in designing and developing dynamic, custom web applications.  I’ll work with you to understand your goals and user needs, creating web solutions – from simple to complex – tailored to your vision.",
      desktop_desc: "As a desktop application developer, I create modern and reliable software solutions to meet your business needs. From standalone applications to enterprise-level software, I build and design programs that perform flawlessly in any environment.",
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
  // {
  //   id: 8,
  //   title: { en: 'Chat Application', fa: 'ECommerce | فروشگاه' },
  //   desc: { en: 'Real-time chat using SignalR.', fa: 'بک اند پیاده شده با دات نت برا ی فروشگاه مشابه دیجی کالا' },
  //   tags: ['Backend', 'Asp .Net Core', 'Web Api'],
  //   category: 'backend',
  //   image: '/projects/sptimer_banner.png',
  //   demoUrl: '',
  //   repoUrl: 'https://github.com'
  // }

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
