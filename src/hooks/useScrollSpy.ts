import { useEffect, useState } from 'react';

const DEFAULT_ROOT_MARGIN = '-45% 0px -50% 0px';

/**
 * Highlights the section currently in view. Mirrors the IntersectionObserver
 * setup of the design reference (rootMargin narrows the viewport to a band
 * around the middle so only one section is active at a time).
 */
export function useScrollSpy(sectionIds: string[], rootMargin: string = DEFAULT_ROOT_MARGIN): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    if (sectionIds.length === 0) return;
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin, threshold: 0 },
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
}
