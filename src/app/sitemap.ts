// app/sitemap.ts
// Next.js App Router — MetadataRoute.Sitemap
// Generates a sitemap for both English and Persian locales.
// Google uses this to discover all your pages and their language alternates.

import { MetadataRoute } from "next";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const BASE_URL = "https://devwithamin.ir"; // ← change to your domain
const LOCALES = ["en", "fa"] as const;

// List every route in your app here (the path after the locale segment).
// e.g. if you have /en/about and /fa/about, add "about" below.
const ROUTES = [
  "",          // home  → /en  and  /fa
  "about",
  "projects",
  "blog",
  "contact",
  // add more as needed
];

// Optional: give individual pages custom priorities / change frequencies
const ROUTE_META: Record<string, { priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = {
  "":         { priority: 1.0,  changeFrequency: "monthly" },
  about:      { priority: 0.8,  changeFrequency: "monthly" },
  projects:   { priority: 0.9,  changeFrequency: "weekly"  },
  blog:       { priority: 0.7,  changeFrequency: "weekly"  },
  contact:    { priority: 0.6,  changeFrequency: "yearly"  },
};
// ─────────────────────────────────────────────────────────────────────────────

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of ROUTES) {
    const meta = ROUTE_META[route] ?? { priority: 0.5, changeFrequency: "monthly" };

    // Build alternates (hreflang) for this route across all locales
    const alternates: Record<string, string> = {};
    for (const locale of LOCALES) {
      const path = route ? `/${locale}/${route}` : `/${locale}`;
      alternates[locale] = `${BASE_URL}${path}`;
    }
    // x-default points to the English version (change if preferred)
    alternates["x-default"] = alternates["en"];

    // Add one entry per locale (Google wants one <url> per locale URL)
    for (const locale of LOCALES) {
      const path = route ? `/${locale}/${route}` : `/${locale}`;
      entries.push({
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: meta.changeFrequency,
        priority: locale === "en" ? meta.priority : meta.priority - 0.05,
        alternates: {
          languages: alternates,
        },
      });
    }
  }

  return entries;
}

// ─── DYNAMIC PAGES (e.g. blog posts) ─────────────────────────────────────────
// If you have dynamic routes like /en/blog/[slug], create a separate
// app/blog/sitemap.ts and fetch your slugs there:
//
// import { getAllPosts } from "@/lib/posts";
// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const posts = await getAllPosts();
//   return posts.flatMap((post) =>
//     LOCALES.map((locale) => ({
//       url: `${BASE_URL}/${locale}/blog/${post.slug}`,
//       lastModified: post.updatedAt,
//       changeFrequency: "weekly",
//       priority: 0.7,
//       alternates: {
//         languages: Object.fromEntries(
//           LOCALES.map((l) => [l, `${BASE_URL}/${l}/blog/${post.slug}`])
//         ),
//       },
//     }))
//   );
// }
