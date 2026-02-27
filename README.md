# Personal Website (Next.js)

High-fidelity personal website implemented with **Next.js App Router**, TypeScript, Tailwind CSS, and Framer Motion.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod

## Run
```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build
```bash
npm run build
npm run start
```

## Project Structure
- `src/app/layout.tsx`: Root layout and global providers
- `src/app/page.tsx`: Landing page route
- `src/app/articles/[id]/page.tsx`: Article detail route
- `src/components/layout/*`: Navbar and footer
- `src/components/sections/*`: Homepage sections
- `src/components/pages/*`: Route-level page compositions
- `src/components/ui/primitives.tsx`: Shared UI primitives
- `src/context/language-context.tsx`: Language and direction state
- `src/data/content.ts`: Typed content source
- `src/lib/utils.ts`: Shared utility functions

## Notes
- Language toggle (`fa` / `en`) is handled on the client and persisted in `localStorage`.
- Build is configured to skip ESLint during `next build` due a local ESLint plugin resolution issue in this environment.
