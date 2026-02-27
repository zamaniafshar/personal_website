'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { forwardRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children?: ReactNode;
  hoverEffect?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, hoverEffect = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300',
          hoverEffect && 'hover:border-emerald-500/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
          className
        )}
        {...props}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'glow';
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'rounded-full px-3 py-1 text-xs font-medium tracking-wide',
        variant === 'default' && 'border border-emerald-500/20 bg-emerald-500/10 text-emerald-400',
        variant === 'outline' && 'border border-white/20 text-slate-400',
        variant === 'glow' && 'border border-emerald-500/30 bg-emerald-500/20 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)]',
        className
      )}
    >
      {children}
    </span>
  );
}

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={cn('relative mx-auto max-w-7xl px-4 py-20 md:px-8', className)}>
      {children}
    </section>
  );
}
