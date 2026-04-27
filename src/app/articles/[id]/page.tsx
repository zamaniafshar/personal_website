import { ArticleDetailPage } from '@/components/pages/article-detail-page';
import { articles } from '@/data/content';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: {
    id: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const articleId = Number(params.id);
  const articleExists = Number.isInteger(articleId) && articles.some((article) => article.id === articleId);

  if (!articleExists) {
    notFound();
  }

  return <ArticleDetailPage articleId={articleId} />;
}



export async function generateStaticParams() {
  var ids=articles.map(article=>article.id.toString())
 return ids.map(id => ({ id }));
}