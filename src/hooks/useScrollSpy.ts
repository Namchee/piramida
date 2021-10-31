import * as React from 'react';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

/**
 * Scroll spy hook. Get the first [data-scrollspy] that intersects.
 *
 * @param {Element[]} els elements to be observed.
 * @return {string} value of the first [data-scrollspy] that intersects.
 */
export function useScrollSpy(els: Element[]): string {
  const [intersectingId, setIntersectingId] = React.useState('');

  useIsomorphicLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersectorIndex = entries.findIndex((entry) => {
          return entry.isIntersecting;
        });

        if (intersectorIndex === -1) {
          return;
        }

        setIntersectingId(
          entries[intersectorIndex].target.id,
        );
      },
    );

    els.forEach((el) => observer.observe(el));

    return () => {
      // memory leak hack
      setIntersectingId('');
      observer.disconnect();
    };
  }, [els]);

  return intersectingId;
}
