'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { itemStagger, maskRevealHeading } from '@/lib/motion';
import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
  divider?: boolean;
};

function SigilDivider() {
  return (
    <div className="mt-6 flex items-center gap-3 text-glow/35">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-glow/30" />
      <svg viewBox="0 0 120 18" className="h-[14px] w-28" aria-hidden>
        <path d="M4 9h36" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M80 9h36" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <circle cx="60" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M60 4v10M55 9h10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-glow/30" />
    </div>
  );
}

export function SectionHeader({ title, subtitle, className, divider = true }: SectionHeaderProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={cn('mb-10', className)}>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-text md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-3xl text-sm text-muted md:text-base">{subtitle}</p>}
        {divider && <SigilDivider />}
      </div>
    );
  }

  return (
    <div className={cn('mb-10', className)}>
      <motion.h2 variants={maskRevealHeading} className="text-balance text-3xl font-semibold tracking-tight text-text md:text-4xl">
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={itemStagger} className="mt-3 max-w-3xl text-sm text-muted md:text-base">
          {subtitle}
        </motion.p>
      )}
      {divider && (
        <motion.div variants={itemStagger}>
          <SigilDivider />
        </motion.div>
      )}
    </div>
  );
}
