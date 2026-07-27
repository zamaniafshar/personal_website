// lib/seo.config.ts
// Central SEO configuration for your site.
// Import from here wherever you need metadata — keeps things DRY.

export const SITE = {
  url: "https://devwithamin.ir",       // ← your domain
  name: "Amin Zamani Afshar", // ← your name / site name
  // twitterHandle: "@yourhandle",        // ← or remove if unused
} as const;

// ─── PER-LOCALE DEFAULTS ──────────────────────────────────────────────────────
// These are fallback metadata values for each language.
// Override them per-page in generateMetadata().

export const DEFAULT_META = {
  en: {
    title: "Amin Zamani Afshar – Full-Stack Developer",
    description: "Custom website design, mobile app development, scalable backend architecture, and Telegram bot solutions — all built around your business needs. I'm with you from idea to launch, every step of the way.",
    keywords: [
      "Flutter Developer",
      "Web Developer",
      "Portfolio",
      "Programmer",
      "Next.js",
      "React",
      "Mobile App",
      "Web Programmer",
      "Website Designer",
      "Custom Website Design",
      "Mobile App Developer",
      "Backend Developer",
      "Telegram Bot Development",
      "Full Stack Developer",
      "Custom Software Development",
      "Business Website Design",
      "Business App Development",
    ],
  },
  fa: {
    title: "امین زمانی افشار – فول استک دولوپر",
    description: "طراحی و توسعه وب‌سایت، اپلیکیشن موبایل، بک‌اندهای مقیاس‌پذیر و ربات‌های تلگرام بر اساس نیاز کسب‌وکار شما. از ایده تا انتشار، قدم‌به‌قدم کنار شما هستم.",
    keywords: [
      "توسعه‌دهنده فلاتر",
      "توسعه‌دهنده وب",
      "پورتفولیو",
      "برنامه نویس",
      "نکست جی اس",
      "ری‌اکت",
      "اپلیکیشن موبایل",
      "برنامه نویس وب",
      "طراح سایت",
      "طراحی سایت اختصاصی",
      "برنامه نویس موبایل",
      "توسعه دهنده بک اند",
      "ساخت ربات تلگرام",
      "برنامه نویس فول استک",
      "توسعه نرم افزار اختصاصی",
      "طراحی سایت برای کسب و کارها",
      "ساخت اپلیکیشن برای کسب و کارها",
    ],
  },
} as const;

export type Locale = keyof typeof DEFAULT_META;
export const LOCALES: Locale[] = ["en", "fa"];
export const DEFAULT_LOCALE: Locale = "en";
