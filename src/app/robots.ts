// app/robots.ts
// Next.js App Router — MetadataRoute.Robots
// This file is automatically served at /robots.txt

import { MetadataRoute } from "next";

const BASE_URL = "https://devwithamin.ir"; // ← change to your domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all crawlers full access
        userAgent: "*",
        allow: "/",
        // Block any private routes you don't want indexed
        disallow: [
          "/api/",       // API routes — never index these
          "/admin/",     // admin panel if you have one
          "/_next/",     // Next.js internals
          "/private/",   // any private pages
        ],
      },
      {
        // Specifically allow Googlebot (redundant but explicit)
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    // Point to your sitemap
    sitemap: `${BASE_URL}/sitemap.xml`,
    // Optional: if you have a host canonical
    // host: BASE_URL,
  };
}
