'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

export function Toast({ show, text }: { show: boolean; text: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-7 right-5 z-50 rounded-xl border border-panelBorder/45 bg-panel/80 px-4 py-2 text-sm text-text shadow-glow backdrop-blur"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, filter: 'blur(6px)' }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, filter: 'blur(6px)' }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
