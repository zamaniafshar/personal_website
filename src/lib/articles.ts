import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

export type ArticleMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

const root = path.join(process.cwd(), 'src/content/articles');

function normalizeDate(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === 'string') {
    return value;
  }

  return '';
}

export async function getArticles(locale: 'fa' | 'en'): Promise<ArticleMeta[]> {
  const dir = path.join(root, locale);
  const files = await fs.readdir(dir);
  const parsed = await Promise.all(
    files.filter((f) => f.endsWith('.mdx')).map(async (file) => {
      const raw = await fs.readFile(path.join(dir, file), 'utf-8');
      const { data } = matter(raw);
      return {
        slug: file.replace('.mdx', ''),
        title: data.title as string,
        date: normalizeDate(data.date),
        excerpt: data.excerpt as string,
        tags: (data.tags as string[]) ?? []
      };
    })
  );
  return parsed.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticleBySlug(locale: 'fa' | 'en', slug: string) {
  const filePath = path.join(root, locale, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, 'utf-8');
  const { content, data } = matter(raw);
  return {
    content,
    meta: {
      ...(data as Omit<ArticleMeta, 'slug'>),
      date: normalizeDate(data.date)
    }
  };
}
