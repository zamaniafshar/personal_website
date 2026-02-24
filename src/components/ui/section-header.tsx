export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-zinc-300">{subtitle}</p>}
    </div>
  );
}
