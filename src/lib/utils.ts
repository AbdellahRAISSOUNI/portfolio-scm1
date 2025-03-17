import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fadeInUpVariant(delay: number = 0) {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
}

export function staggerContainer(staggerChildren: number = 0.1, delayChildren: number = 0) {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  };
}

export function slideInFromLeft(delay: number = 0, duration: number = 0.5) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        duration,
        ease: "easeOut"
      }
    }
  };
}

export function slideInFromRight(delay: number = 0, duration: number = 0.5) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay,
        duration,
        ease: "easeOut"
      }
    }
  };
}

export function scaleIn(delay: number = 0, duration: number = 0.5) {
  return {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay,
        duration,
        ease: "easeOut"
      }
    }
  };
} 