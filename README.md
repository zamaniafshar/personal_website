# Personal Website (Next.js + TypeScript)

Modern bilingual personal brand website with Persian-first RTL support, animated sections, MDX articles, and a premium dark green visual style.

## Tech Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- next-intl locale routing (`/fa`, `/en`)
- MDX content files for onsite articles
- react-hook-form + zod for contact form validation

## Getting Started
### Prerequisites
- Node.js 20+
- npm 10+

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```
Open `http://localhost:3000`.

### Build
```bash
npm run build
npm run start
```

## Deployment (Vercel)
1. Push repository to GitHub.
2. Import project in Vercel.
3. Framework preset: **Next.js**.
4. Deploy.

### Custom domain
1. In Vercel Project Settings → Domains, add your domain.
2. Configure DNS records from your registrar based on Vercel instructions.
3. Wait for SSL provisioning.

## Where to edit content
- Translations and labels: `src/messages/fa.json`, `src/messages/en.json`
- Profile, bio, projects, social links, work settings: `src/data/site.ts`
- Onsite articles (MDX):
  - Persian: `src/content/articles/fa/*.mdx`
  - English: `src/content/articles/en/*.mdx`
- Profile image placeholder area: `src/components/sections/about.tsx`

## Structure
- `src/app/[locale]/page.tsx`: Single-page sections
- `src/app/[locale]/articles/[slug]/page.tsx`: Locale-aware article pages
- `src/components/sections/*`: Homepage sections
- `src/components/ui/*`: Reusable UI system components
- `src/lib/articles.ts`: MDX loading helpers
