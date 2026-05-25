import { useEffect, useState } from 'react';

/**
 * useActiveSection — observes section ids and returns the one currently
 * in the user's viewport. Used by the navbar to highlight the active link.
 *
 * Uses IntersectionObserver with a rootMargin biased to the top third of
 * the viewport — this matches the user's reading focus more naturally
 * than a strict center heuristic.
 */
export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the entry with the highest intersection ratio among those visible.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        // Trigger as a section's top crosses ~30% from the top of the viewport.
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
