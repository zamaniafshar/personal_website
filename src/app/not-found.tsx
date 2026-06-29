import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-4 text-ink">
      <div className="rounded-3xl border border-line bg-card p-10 text-center shadow-card">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">404</p>
        <h1 className="heading mb-3 text-2xl">Page not found</h1>
        <p className="mb-6 text-muted">The page you requested does not exist.</p>
        <Link href="/" className="btn-accent">
          Back to home
        </Link>
      </div>
    </main>
  );
}
