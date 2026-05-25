import { useEffect, useRef, useState } from 'react';

/**
 * useCountUp — animates a number from 0 to `target` once the element
 * enters the viewport. Uses requestAnimationFrame with an ease-out curve
 * so the count decelerates naturally as it lands.
 *
 * Returns: [value, ref]
 *   - value: current animated number (rounded)
 *   - ref:   attach to the element that triggers the animation when visible
 */
export function useCountUp(target, { duration = 1600, start = 0 } = {}) {
  const [value, setValue] = useState(start);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasRun.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || hasRun.current) return;
        hasRun.current = true;

        const prefersReduced = window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        ).matches;
        if (prefersReduced) {
          setValue(target);
          return;
        }

        const startTime = performance.now();
        const step = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Cubic ease-out — fast start, gentle landing.
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(start + (target - start) * eased));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration, start]);

  return [value, ref];
}
