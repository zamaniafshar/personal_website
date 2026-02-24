# Personal Website (Next.js + TypeScript)

A production-ready personal brand website with a modern dark design, bilingual Persian/English support, RTL/LTR switching, animated sections, editable data files, and MDX articles.

## Tech Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- next-intl (locale routing)
- MDX (local content)
- react-hook-form + zod

## Prerequisites
- Node.js 18+
- npm 9+

## Setup
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build & Start
```bash
npm run build
npm run start
```

## Deploy on Vercel
1. Push repository to GitHub.
2. Import project in Vercel.
3. Framework preset: Next.js.
4. Deploy.

### Custom Domain (Vercel)
1. Go to Project → Settings → Domains.
2. Add your domain.
3. Configure DNS records per Vercel instructions.
4. Wait for SSL issuance.

## Routes
- `/fa` Persian RTL homepage (default)
- `/en` English LTR homepage
- `/{locale}/articles/{slug}` localized MDX article pages

## Where to edit content
- Profile, hero text, skills, projects, highlights, hire-me, socials:
  - `src/content/siteData.ts`
- UI label translations:
  - `src/messages/fa.json`
  - `src/messages/en.json`
- On-site MDX articles:
  - `src/content/articles/*.fa.mdx`
  - `src/content/articles/*.en.mdx`
- Profile image placeholder:
  - `src/components/home-page.tsx` (replace placeholder `div` with `Image`)

## Notes
- Dark mode is default, and user preference is persisted in localStorage.
- Language switcher toggles between Persian and English routes.
- Contact form validates fields client-side and uses mailto fallback.
