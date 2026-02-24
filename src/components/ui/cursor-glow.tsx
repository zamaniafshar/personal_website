'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

export function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-999);
  const y = useMotionValue(-999);

  const smoothX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setEnabled(media.matches);
    update();

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const onLeave = () => {
      x.set(-999);
      y.set(-999);
    };

    if (media.matches) {
      window.addEventListener('pointermove', onMove, { passive: true });
      window.addEventListener('pointerleave', onLeave, { passive: true });
    }

    media.addEventListener('change', update);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      media.removeEventListener('change', update);
    };
  }, [x, y]);

  if (!enabled || reduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
      style={{
        x: smoothX,
        y: smoothY,
        background:
          'radial-gradient(circle, rgba(52,211,153,0.15) 0%, rgba(20,184,166,0.09) 25%, rgba(4,10,9,0) 70%)'
      }}
    />
  );
}
