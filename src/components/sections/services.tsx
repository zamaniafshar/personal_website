'use client';

import { Brain, Server, Smartphone } from 'lucide-react';
import { useLanguage } from '@/context/language-context';
import { content } from '@/data/content';
import { GlassCard, Section } from '@/components/ui/primitives';

export function Skills() {
  const { language } = useLanguage();
  const t = content[language].services;

  const itemGroups = [
    {
      title: t.mobile,
      desc: t.mobile_desc,
      icon: <Smartphone size={24} />,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: t.web,
      desc: t.web_desc,
      icon: <Server size={24} />,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: t.desktop,
      desc: t.desktop_desc,
      icon: <Brain size={24} />,
      color: 'from-fuchsia-500 to-pink-600'
    }
  ];

  return (
    <Section id="skills" className="relative py-24">
      <div className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">
          <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">{t.title}</span>
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {itemGroups.map((group) => (
          <GlassCard
            key={group.title}
            className="group relative overflow-hidden border-slate-800 transition-all duration-500 hover:-translate-y-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative z-10 mb-6 flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${group.color} text-white shadow-lg`}
              >
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{group.title}</h3>
            </div>

            <span className="relative pr-5 inline-block group-hover:text-white">
              <span
                className={`absolute right-0 top-1 h-full w-0.5 rounded-sm bg-gradient-to-b ${group.color}`}
              />
              {group.desc}
            </span>


            <div
              className={`absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${group.color} opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
            />
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
