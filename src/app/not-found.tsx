import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-100">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="mb-2 text-sm uppercase tracking-widest text-emerald-400">404</p>
        <h1 className="mb-4 text-2xl font-bold">Page not found</h1>
        <p className="mb-6 text-slate-400">The page you requested does not exist.</p>
        <Link href="/" className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950">
          Back to home
        </Link>
      </div>
    </main>
  );
}
