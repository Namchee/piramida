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

  const observer = React.useRef<IntersectionObserver>(null);

  useIsomorphicLayoutEffect(() => {
    if (!observer.current) {
      observer.current = new IntersectionObserver(
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
    }
    const { current: obs } = observer;
    obs.disconnect();

    els.forEach((el) => obs.observe(el));

    return () => {
      // memory leak hack
      setIntersectingId('');
      obs.disconnect();
    };
  }, [els]);

  return intersectingId;
}
