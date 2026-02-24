'use client';

import {useMemo, useState} from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {motion} from 'framer-motion';
import {externalArticles, highlights, nowSection, profile, projects, skills, socialLinks, workWithMe} from '@/content/siteData';
import {AnchorButton, Button, Card, SectionHeader, Tag} from './ui';
import {Navbar} from './navbar';
import Link from 'next/link';
import {ArticleMeta} from '@/lib/articles';

const categories = ['all', 'mobile', 'backend', 'experiments'] as const;

type Category = (typeof categories)[number];

export function HomePage({
  locale,
  t,
  onsiteArticles
}: {
  locale: 'fa' | 'en';
  t: (key: string) => string;
  onsiteArticles: ArticleMeta[];
}) {
  const [category, setCategory] = useState<Category>('all');
  const [articleTab, setArticleTab] = useState<'onSite' | 'external'>('onSite');
  const [toast, setToast] = useState('');

  const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(8)
  });

  const {register, handleSubmit, formState: {errors}, reset} = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema)
  });

  const filteredProjects = useMemo(
    () => (category === 'all' ? projects : projects.filter((item) => item.category === category)),
    [category]
  );

  const onSubmit = (values: z.infer<typeof schema>) => {
    const mailto = `mailto:${workWithMe.ctas.email}?subject=${encodeURIComponent(values.name)}&body=${encodeURIComponent(values.message + '\n\n' + values.email)}`;
    window.location.href = mailto;
    setToast(t('form.success'));
    reset();
    setTimeout(() => setToast(''), 3000);
  };

  const navItems = [
    {href: '#hero', label: t('nav.home')},
    {href: '#about', label: t('nav.about')},
    {href: '#now', label: t('nav.now')},
    {href: '#skills', label: t('nav.skills')},
    {href: '#projects', label: t('nav.projects')},
    {href: '#articles', label: t('nav.articles')},
    {href: '#highlights', label: t('nav.highlights')},
    {href: '#work', label: t('nav.work')},
    {href: '#contact', label: t('nav.contact')}
  ];

  return (
    <>
      <Navbar locale={locale} navItems={navItems} switchLabel={locale === 'fa' ? 'EN' : 'فا'} themeLabel={{dark: t('theme.dark'), light: t('theme.light')}} />
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-4 py-8">
        <section id="hero" className="pt-10">
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-transparent to-slate-900/70 p-8 shadow-glowSoft">
            <h1 className="text-4xl font-black leading-tight md:text-6xl">{profile.role[locale]} · {profile.name}</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">{profile.shortTagline[locale]}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <AnchorButton href="#projects">{t('hero.ctaProjects')}</AnchorButton>
              <AnchorButton href="#articles">{t('hero.ctaArticles')}</AnchorButton>
              <AnchorButton href="#contact">{t('hero.ctaContact')}</AnchorButton>
            </div>
          </motion.div>
        </section>

        <section id="about">
          <SectionHeader title={t('sections.about')} />
          <Card>
            <div className="grid gap-4 md:grid-cols-[140px,1fr]">
              <div className="h-36 w-36 rounded-full border border-emerald-300/40 bg-slate-800" aria-label="Profile image placeholder" />
              <div>
                <p className="text-slate-200">{profile.bio[locale]}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Tag>{locale === 'fa' ? `${profile.years}+ سال تجربه` : `${profile.years}+ years`}</Tag>
                  <Tag>{locale === 'fa' ? 'تمرکز: اپ موبایل' : 'Focus: Mobile apps'}</Tag>
                  <Tag>{locale === 'fa' ? 'مکان: قابل تنظیم' : 'Location: configurable'}</Tag>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section id="now">
          <SectionHeader title={t('sections.now')} />
          <Card className="space-y-3">
            <p>{nowSection.workingOn[locale]}</p>
            <p>{nowSection.learning[locale]}</p>
            <p>{nowSection.goal[locale]}</p>
          </Card>
        </section>

        <section id="skills">
          <SectionHeader title={t('sections.skills')} />
          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((skill) => (
              <Card key={skill.id} className="hover:shadow-glow">
                <h3 className="font-semibold text-emerald-300">{skill.title[locale]}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skill.items.map((item) => <Tag key={item}>{item}</Tag>)}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects">
          <SectionHeader title={t('sections.projects')} />
          <div className="mb-4 flex flex-wrap gap-2">
            {categories.map((key) => (
              <Button key={key} onClick={() => setCategory(key)} className={category === key ? 'bg-emerald-500/30' : ''}>{t(`projects.${key}`)}</Button>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <Card key={project.name}>
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="mt-2 text-slate-300">{project.description[locale]}</p>
                <div className="mt-3 flex flex-wrap gap-2">{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
              </Card>
            ))}
          </div>
        </section>

        <section id="articles">
          <SectionHeader title={t('sections.articles')} />
          <div className="mb-4 flex gap-2">
            <Button onClick={() => setArticleTab('onSite')}>{t('articles.onSite')}</Button>
            <Button onClick={() => setArticleTab('external')}>{t('articles.external')}</Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {articleTab === 'onSite'
              ? onsiteArticles.map((article) => (
                  <Card key={article.slug}>
                    <p className="text-xs text-slate-400">{article.date}</p>
                    <h3 className="mt-1 text-lg font-semibold">{article.title}</h3>
                    <p className="mt-2 text-slate-300">{article.excerpt}</p>
                    <div className="mt-3 flex flex-wrap gap-2">{article.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
                    <Link href={`/${locale}/articles/${article.slug}`} className="mt-4 inline-block text-sm text-emerald-300">Read</Link>
                  </Card>
                ))
              : externalArticles.map((article) => (
                  <Card key={article.title.en}>
                    <p className="text-xs text-slate-400">{article.date}</p>
                    <h3 className="mt-1 text-lg font-semibold">{article.title[locale]}</h3>
                    <p className="mt-2 text-slate-300">{article.excerpt[locale]}</p>
                    <a href={article.href} className="mt-4 inline-block text-sm text-emerald-300">Open</a>
                  </Card>
                ))}
          </div>
        </section>

        <section id="highlights">
          <SectionHeader title={t('sections.highlights')} />
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.value}>
                <p className="text-3xl font-bold text-emerald-300">{item.value}</p>
                <p className="mt-2 text-slate-300">{item.label[locale]}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="work">
          <SectionHeader title={t('sections.work')} />
          <Card className="animate-pulseGlow border border-emerald-400/30">
            <p>{workWithMe.accepted[locale]}</p>
            <p className="mt-2 text-slate-300">{workWithMe.helpWith[locale]}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <AnchorButton href={`mailto:${workWithMe.ctas.email}`}>Email me</AnchorButton>
              <AnchorButton href={workWithMe.ctas.cv}>Download CV</AnchorButton>
              <AnchorButton href={workWithMe.ctas.call}>Book a call</AnchorButton>
            </div>
          </Card>
        </section>

        <section id="contact" className="pb-12">
          <SectionHeader title={t('sections.contact')} />
          <Card>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <input className="w-full rounded-xl border border-white/15 bg-slate-900/70 p-3" placeholder={t('form.name')} {...register('name')} />
              <input className="w-full rounded-xl border border-white/15 bg-slate-900/70 p-3" placeholder={t('form.email')} {...register('email')} />
              <textarea className="w-full rounded-xl border border-white/15 bg-slate-900/70 p-3" rows={5} placeholder={t('form.message')} {...register('message')} />
              {(errors.name || errors.email || errors.message) ? <p className="text-sm text-rose-400">Please fill all fields correctly.</p> : null}
              <div className="flex flex-wrap items-center gap-2">
                <Button type="submit">{t('form.send')}</Button>
                <Button type="button" onClick={async () => { await navigator.clipboard.writeText(workWithMe.ctas.email); setToast(t('form.emailCopied')); setTimeout(() => setToast(''), 2400); }}>
                  {t('form.copyEmail')}
                </Button>
              </div>
            </form>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((link) => <a key={link.name} href={link.href} className="text-sm text-emerald-300">{link.name}</a>)}
            </div>
          </Card>
        </section>
      </main>
      <footer className="border-t border-white/10 py-5 text-center text-sm text-slate-400">© {new Date().getFullYear()} {profile.name}</footer>
      {toast ? <div className="fixed bottom-6 start-6 rounded-xl border border-emerald-400/40 bg-panel px-4 py-2 text-sm shadow-glow">{toast}</div> : null}
    </>
  );
}
