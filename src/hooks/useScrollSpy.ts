import * as React from 'react';

/**
 * Scroll spy hook. Get the first [data-scrollspy] that intersects.
 *
 * @param {Element[]} els elements to be observed.
 * @return {string} value of the first [data-scrollspy] that intersects.
 */
export function useScrollSpy(els: Element[]): string {
  const [intersectingId, setIntersectingId] = React.useState('');

  const observer = React.useRef<IntersectionObserver>(
    new IntersectionObserver(
      (entries) => {
        const intersectorIndex = entries.findIndex((entry) => {
          return entry.isIntersecting &&
            entry.intersectionRatio >= 0.85;
        });

        if (intersectorIndex === -1) {
          return 0;
        }

        setIntersectingId(
          entries[intersectorIndex].target.getAttribute('data-scrollspy'),
        );
      },
    ),
  );

  React.useEffect(() => {
    const { current: obs } = observer;
    obs.disconnect();

    els.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  });

  return intersectingId;
}
