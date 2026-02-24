import type { Variants } from 'framer-motion';

const smoothEase = [0.22, 1, 0.36, 1] as const;

export const sectionContainer: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: smoothEase,
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
};

export const itemStagger: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.42, ease: smoothEase }
  }
};

export const maskRevealHeading: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(0 100% 0 0 round 0.75rem)' },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0% 0 0 round 0.75rem)',
    transition: { duration: 0.56, ease: [0.19, 1, 0.22, 1] }
  }
};

export const scanlineReveal: Variants = {
  hidden: { opacity: 0, x: '-110%' },
  visible: {
    opacity: [0, 0.25, 0],
    x: '110%',
    transition: { duration: 0.72, ease: 'easeInOut' }
  }
};
