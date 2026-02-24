import { socials, workWithMe } from '@/data/site';

export function WorkSection({ locale }: { locale: 'fa' | 'en' }) {
  return (
    <section id="work" className="section py-10">
      <div className="card border-emerald-400/40 shadow-glow">
        <h2 className="text-3xl font-bold">{locale === 'fa' ? 'همکاری با من' : 'Work with me'}</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <p className="mb-2 font-semibold text-emerald-300">{locale === 'fa' ? 'نوع همکاری' : 'I accept'}</p>
            <ul className="space-y-1 text-zinc-300">{workWithMe.accepts[locale].map((item) => <li key={item}>• {item}</li>)}</ul>
          </div>
          <div>
            <p className="mb-2 font-semibold text-emerald-300">{locale === 'fa' ? 'کمکی که می‌تونم بکنم' : 'I can help with'}</p>
            <ul className="space-y-1 text-zinc-300">{workWithMe.helps[locale].map((item) => <li key={item}>• {item}</li>)}</ul>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-black" href={`mailto:${socials.email}`}>Email me</a>
          <a className="rounded-xl border border-zinc-600 px-5 py-2.5 text-sm" href={socials.cv}>Download CV</a>
          <a className="rounded-xl border border-zinc-600 px-5 py-2.5 text-sm" href={socials.call}>Book a call</a>
        </div>
      </div>
    </section>
  );
}
