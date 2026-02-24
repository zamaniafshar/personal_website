'use client';

import { MouseEvent, ReactNode, useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({ children, className, strength = 12 }: MagneticProps) {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 230, damping: 22, mass: 0.25 });
  const smoothY = useSpring(y, { stiffness: 230, damping: 22, mass: 0.25 });

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!enabled || reduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);

    x.set((offsetX / rect.width) * strength);
    y.set((offsetY / rect.height) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={cn('inline-flex', className)}
      style={enabled && !reduceMotion ? { x: smoothX, y: smoothY } : undefined}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onBlur={reset}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
