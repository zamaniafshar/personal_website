'use client';

import { ArrowLeft, Bookmark, Calendar, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { Badge } from '@/components/ui/primitives';
import { useLanguage } from '@/context/language-context';
import { articles, personalInfo } from '@/data/content';

interface ArticleDetailPageProps {
  articleId: number;
}

export function ArticleDetailPage({ articleId }: ArticleDetailPageProps) {
  const { language } = useLanguage();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shareMessage, setShareMessage] = useState<string | null>(null);

  const article = articles.find((item) => item.id === articleId);
  if (!article) return null;

  const articleContent =
    language === 'fa' ? (
      <>
        <p className="mb-6 text-lg leading-loose text-muted">
          دات‌نت مائوی (Multi-platform App UI) فریم‌ورک جدید مایکروسافت برای ساخت اپلیکیشن‌های بومی و کراس‌پلتفرم
          است که جایگزین زامارین فورمز می‌شود. در این مقاله چالش‌ها و راهکارهای مهاجرت را بررسی می‌کنیم.
        </p>
        <h2 className="mb-4 mt-8 font-display text-2xl font-bold text-accent">چرا باید مهاجرت کنیم؟</h2>
        <p className="mb-6 leading-loose text-muted">
          مائوی نه‌تنها عملکرد بهتری دارد، بلکه معماری Single Project توسعه را بسیار ساده‌تر می‌کند و نگهداری کد را
          بهبود می‌دهد.
        </p>
        <div className="my-8 rounded-2xl border-s-4 border-accent bg-card p-6">
          <p className="italic text-muted">«مائوی یک بازنویسی کامل نیست، بلکه تکامل طبیعی اکوسیستم دات‌نت است.»</p>
        </div>
      </>
    ) : (
      <>
        <p className="mb-6 text-lg leading-loose text-muted">
          .NET MAUI (Multi-platform App UI) is Microsoft&apos;s modern framework for building native cross-platform
          applications and replacing Xamarin.Forms. This article explains practical migration steps and pitfalls.
        </p>
        <h2 className="mb-4 mt-8 font-display text-2xl font-bold text-accent">Why Migrate?</h2>
        <p className="mb-6 leading-loose text-muted">
          MAUI offers better performance, long-term support, and a single-project architecture that reduces complexity
          across platforms.
        </p>
        <div className="my-8 rounded-2xl border-s-4 border-accent bg-card p-6">
          <p className="italic text-muted">
            &quot;MAUI is not a complete rewrite, but a natural evolution of the .NET ecosystem.&quot;
          </p>
        </div>
      </>
    );

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/articles/${article.id}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: article.title[language], url: shareUrl });
        return;
      } catch {
        return;
      }
    }
    await navigator.clipboard.writeText(shareUrl);
    setShareMessage(language === 'fa' ? 'لینک مقاله کپی شد.' : 'Article link copied.');
    setTimeout(() => setShareMessage(null), 1600);
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />

      <main className="container-px max-w-3xl pb-20 pt-32">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1 rtl:-scale-x-100" />
          {language === 'fa' ? 'بازگشت به خانه' : 'Back to Home'}
        </Link>

        <article>
          <header className="mb-10">
            <div className="mb-6 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            <h1 className="heading text-3xl leading-tight sm:text-5xl">{article.title[language]}</h1>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-line py-5 text-sm text-muted">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                    AZ
                  </span>
                  <span className="font-medium text-ink">{personalInfo.name[language]}</span>
                </div>
                <span className="flex items-center gap-2">
                  <Calendar size={16} /> {article.date[language]}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} /> {article.readTime[language]}
                </span>
              </div>

              <div className="flex gap-4">
                <button type="button" onClick={handleShare} className="transition-colors hover:text-accent" aria-label="Share article">
                  <Share2 size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsBookmarked((prev) => !prev)}
                  className="transition-colors hover:text-accent"
                  aria-label="Bookmark article"
                >
                  <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
                </button>
              </div>
            </div>

            {shareMessage && <p className="mt-3 text-sm text-accent">{shareMessage}</p>}
          </header>

          <div className="max-w-none">{articleContent}</div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
