'use client';

import { ArrowLeft, Bookmark, Calendar, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { Badge, GlassCard } from '@/components/ui/primitives';
import { useLanguage } from '@/context/language-context';
import { articles } from '@/data/content';

interface ArticleDetailPageProps {
  articleId: number;
}

export function ArticleDetailPage({ articleId }: ArticleDetailPageProps) {
  const { language } = useLanguage();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shareMessage, setShareMessage] = useState<string | null>(null);

  const article = articles.find((item) => item.id === articleId);

  if (!article) {
    return null;
  }

  const articleContent =
    language === 'fa' ? (
      <>
        <p className="mb-6 text-lg leading-loose text-slate-300">
          دات‌نت مائوی (Multi-platform App UI) فریم‌ورک جدید مایکروسافت برای ساخت اپلیکیشن‌های بومی و کراس‌پلتفرم
          است که جایگزین زامارین فورمز می‌شود. در این مقاله چالش‌ها و راهکارهای مهاجرت را بررسی می‌کنیم.
        </p>
        <h2 className="mb-4 mt-8 text-2xl font-bold text-emerald-400">چرا باید مهاجرت کنیم؟</h2>
        <p className="mb-6 leading-loose text-slate-300">
          مائوی نه‌تنها عملکرد بهتری دارد، بلکه معماری Single Project توسعه را بسیار ساده‌تر می‌کند و نگهداری کد را
          بهبود می‌دهد.
        </p>
        <div className="my-8 rounded-xl border-e-4 border-emerald-500 bg-slate-900/50 p-6">
          <p className="italic text-slate-400">"مائوی یک بازنویسی کامل نیست، بلکه تکامل طبیعی اکوسیستم دات‌نت است."</p>
        </div>
        <h3 className="mb-4 text-xl font-bold text-white">مراحل اصلی</h3>
        <ul className="mb-8 list-inside list-disc space-y-2 text-slate-300 marker:text-emerald-500">
          <li>به‌روزرسانی فایل پروژه به SDK Style</li>
          <li>تغییر نیم‌اسپیس‌ها از Xamarin.Forms به Microsoft.Maui</li>
          <li>به‌روزرسانی کتابخانه‌های شخص ثالث</li>
        </ul>
      </>
    ) : (
      <>
        <p className="mb-6 text-lg leading-loose text-slate-300">
          .NET MAUI (Multi-platform App UI) is Microsoft&apos;s modern framework for building native cross-platform
          applications and replacing Xamarin.Forms. This article explains practical migration steps and pitfalls.
        </p>
        <h2 className="mb-4 mt-8 text-2xl font-bold text-emerald-400">Why Migrate?</h2>
        <p className="mb-6 leading-loose text-slate-300">
          MAUI offers better performance, long-term support, and a single-project architecture that reduces complexity
          across platforms.
        </p>
        <div className="my-8 rounded-xl border-s-4 border-emerald-500 bg-slate-900/50 p-6">
          <p className="italic text-slate-400">
            &quot;MAUI is not a complete rewrite, but a natural evolution of the .NET ecosystem.&quot;
          </p>
        </div>
        <h3 className="mb-4 text-xl font-bold text-white">Key Steps</h3>
        <ul className="mb-8 list-inside list-disc space-y-2 text-slate-300 marker:text-emerald-500">
          <li>Update the project file to SDK-style format</li>
          <li>Move namespaces from Xamarin.Forms to Microsoft.Maui</li>
          <li>Audit and update third-party dependencies</li>
        </ul>
      </>
    );

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/articles/${article.id}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title[language],
          url: shareUrl
        });
        return;
      } catch {
        return;
      }
    }

    await navigator.clipboard.writeText(shareUrl);
    setShareMessage(language === 'fa' ? 'لینک مقاله کپی شد.' : 'Article link copied.');

    setTimeout(() => {
      setShareMessage(null);
    }, 1600);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-emerald-400"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          {language === 'fa' ? 'بازگشت به خانه' : 'Back to Home'}
        </Link>

        <article>
          <header className="mb-12">
            <div className="mb-6 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="glow">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">{article.title[language]}</h1>

            <div className="flex flex-wrap items-center justify-between gap-4 border-y border-white/5 py-6 text-sm text-slate-400">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-slate-800" />
                  <span className="font-medium text-white">Arash</span>
                </div>
                <span className="flex items-center gap-2">
                  <Calendar size={16} /> {article.date[language]}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} /> {article.readTime[language]}
                </span>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleShare}
                  className="transition-colors hover:text-white"
                  aria-label="Share article"
                >
                  <Share2 size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsBookmarked((prev) => !prev)}
                  className="transition-colors hover:text-white"
                  aria-label="Bookmark article"
                >
                  <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
                </button>
              </div>
            </div>

            {shareMessage && <p className="mt-3 text-sm text-emerald-400">{shareMessage}</p>}
          </header>

          <div className="max-w-none">{articleContent}</div>

          <div className="mb-12 mt-12">
            <GlassCard className="overflow-hidden border-slate-800 bg-slate-900 p-0 font-mono text-sm" hoverEffect={false}>
              <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-2">
                <span className="text-slate-400">Program.cs</span>
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full border border-red-500/50 bg-red-500/20" />
                  <span className="h-3 w-3 rounded-full border border-yellow-500/50 bg-yellow-500/20" />
                  <span className="h-3 w-3 rounded-full border border-green-500/50 bg-green-500/20" />
                </div>
              </div>
              <div className="overflow-x-auto p-6 text-slate-300">
                <pre>
                  <code>{`public static MauiApp CreateMauiApp()
{
    var builder = MauiApp.CreateBuilder();
    builder
        .UseMauiApp<App>()
        .ConfigureFonts(fonts =>
        {
            fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
        });

    return builder.Build();
}`}</code>
                </pre>
              </div>
            </GlassCard>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
