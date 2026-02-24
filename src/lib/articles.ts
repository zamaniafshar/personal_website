import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import {Locale} from '@/i18n/config';

const articlesDir = path.join(process.cwd(), 'src/content/articles');

export type ArticleMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  locale: Locale;
};

export async function getArticles(locale: Locale): Promise<ArticleMeta[]> {
  const files = await fs.readdir(articlesDir);
  const scoped = files.filter((file) => file.endsWith(`.${locale}.mdx`));

  const all = await Promise.all(
    scoped.map(async (file) => {
      const fullPath = path.join(articlesDir, file);
      const raw = await fs.readFile(fullPath, 'utf-8');
      const {data} = matter(raw);
      const slug = file.replace(`.${locale}.mdx`, '');

      return {
        slug,
        title: String(data.title),
        excerpt: String(data.excerpt),
        date: String(data.date),
        tags: (data.tags as string[]) ?? [],
        locale
      } satisfies ArticleMeta;
    })
  );

  return all.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticleBySlug(locale: Locale, slug: string) {
  const filePath = path.join(articlesDir, `${slug}.${locale}.mdx`);
  const raw = await fs.readFile(filePath, 'utf-8');
  const {content, data} = matter(raw);

  return {
    content,
    meta: {
      slug,
      title: String(data.title),
      excerpt: String(data.excerpt),
      date: String(data.date),
      tags: (data.tags as string[]) ?? [],
      locale
    } satisfies ArticleMeta
  };
}
