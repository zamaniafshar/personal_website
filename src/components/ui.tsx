'use client';

import {motion, useReducedMotion} from 'framer-motion';
import {cn} from '@/lib/utils';

export function SectionHeader({title, subtitle}: {title: string; subtitle?: string}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-2xl text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

export function Button({className, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300 hover:bg-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-300',
        className
      )}
      {...props}
    />
  );
}

export function AnchorButton({className, ...props}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        'inline-flex rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300 hover:bg-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-emerald-300',
        className
      )}
      {...props}
    />
  );
}

export function Card({className, children}: {className?: string; children: React.ReactNode}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{opacity: 0, y: reduced ? 0 : 18}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.45}}
      className={cn('section-glow rounded-2xl bg-panel/80 p-5 backdrop-blur-sm', className)}
    >
      {children}
    </motion.div>
  );
}

export function Tag({children}: {children: React.ReactNode}) {
  return <span className="rounded-full border border-slate-600 px-3 py-1 text-xs text-slate-300">{children}</span>;
}
