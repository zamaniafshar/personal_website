'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { scanlineReveal, sectionContainer } from '@/lib/motion';

type MotionSectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
  disableScanline?: boolean;
  viewportAmount?: number;
};

export function MotionSection({ id, className, children, disableScanline = false, viewportAmount = 0.18 }: MotionSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={cn('section relative overflow-hidden', className)}
      initial={reduceMotion ? undefined : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: viewportAmount }}
      variants={reduceMotion ? undefined : sectionContainer}
    >
      {!reduceMotion && !disableScanline && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-x-8 top-1 h-px bg-gradient-to-r from-transparent via-glow/65 to-transparent"
          variants={scanlineReveal}
        />
      )}
      {children}
    </motion.section>
  );
}
