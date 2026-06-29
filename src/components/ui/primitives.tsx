'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { Star } from 'lucide-react';
import { forwardRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/* ---------------------------------- Section --------------------------------- */
interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={cn('container-px scroll-mt-24 py-20 sm:py-24', className)}>
      {children}
    </section>
  );
}

/* ------------------------------- SectionHeader ------------------------------ */
interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'start';
  className?: string;
}

export function SectionHeader({ kicker, title, subtitle, align = 'center', className }: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        'mb-12 flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-start',
        className
      )}
    >
      {kicker && <span className="section-kicker">{kicker}</span>}
      <h2 className="heading text-3xl sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{subtitle}</p>}
      <span
        className={cn('mt-5 h-1 w-16 rounded-full bg-accent/80', align === 'center' ? 'self-center' : 'self-start')}
      />
    </Reveal>
  );
}

/* ----------------------------------- Card ----------------------------------- */
interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children?: ReactNode;
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, children, hover = true, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-line bg-card p-6 shadow-soft transition-all duration-300',
        hover && 'hover:-translate-y-1 hover:border-accent/40 hover:shadow-card',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
});
Card.displayName = 'Card';

/* ---------------------------------- Badge ----------------------------------- */
interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'soft' | 'outline';
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide',
        variant === 'default' && 'bg-accent/12 text-accent ring-1 ring-inset ring-accent/20',
        variant === 'soft' && 'bg-panel text-muted ring-1 ring-inset ring-line',
        variant === 'outline' && 'border border-line text-muted',
        className
      )}
    >
      {children}
    </span>
  );
}

/* ---------------------------------- Stars ----------------------------------- */
export function Stars({ rating = 5, className }: { rating?: number; className?: string }) {
  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'text-accent' : 'text-line'}
          fill={i < rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
}

/* ---------------------------------- Reveal ---------------------------------- */
interface RevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
}

export function Reveal({ children, delay = 0, className, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.6, 0.35, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
