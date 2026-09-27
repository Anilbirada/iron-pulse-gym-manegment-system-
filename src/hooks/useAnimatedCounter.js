import { useState, useEffect, useRef } from 'react';
import useReducedMotion from './useReducedMotion';

export default function useAnimatedCounter(target, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasAnimated.current) return;

    if (prefersReducedMotion) {
      setCount(target);
      hasAnimated.current = true;
      return;
    }

    hasAnimated.current = true;
    const startTime = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(animate);
  }, [target, duration, shouldStart, prefersReducedMotion]);

  return count;
}
