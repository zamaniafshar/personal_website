import { ArticleDetailPage } from '@/components/pages/article-detail-page';
import { articles } from '@/data/content';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return articles.map((article) => ({ id: String(article.id) }));
}

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const articleId = Number(id);
  const articleExists = Number.isInteger(articleId) && articles.some((article) => article.id === articleId);

  if (!articleExists) {
    notFound();
  }

  return <ArticleDetailPage articleId={articleId} />;
}
