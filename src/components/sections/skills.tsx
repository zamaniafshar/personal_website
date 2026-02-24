'use client';

import { skills } from '@/data/site';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export function SkillsSection() {
  const t = useTranslations('sections');
  const groups = [
    { title: 'Mobile (Primary)', items: skills.mobile },
    { title: 'Backend (.NET)', items: skills.backend },
    { title: 'Other / Learning', items: skills.learning }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="mb-6 text-3xl font-bold">{t('skillsTitle')}</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {groups.map((group, idx) => (
          <motion.article key={group.title} whileHover={{ y: -4 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="card hover:shadow-glow">
            <h3 className="mb-3 font-semibold text-emerald-300">{group.title}</h3>
            <ul className="space-y-2 text-sm text-zinc-300">{group.items.map((item) => <li key={item}>• {item}</li>)}</ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
