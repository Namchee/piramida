import * as React from 'react';

/**
 * Scroll spy hook. Get the first [data-scrollspy] that is visible
 * in the viewport.
 *
 * @param {Element[]} els elements to be observed.
 * @return {string} value of the first [data-scrollspy] that intersects.
 */
export function useScrollSpy(els: Element[]): string {
  const [intersectingId, setIntersectingId] = React.useState<string>('');
  const observer = React.useRef<IntersectionObserver>(null);

  React.useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        const intersector = entries.find((entry) => {
          return entry.isIntersecting;
        });

        if (intersector) {
          setIntersectingId(intersector.target.id);
        }
      },
      {
        root: document,
      }
    );

    const { current: obs } = observer;

    console.log(els.length);
    els.forEach((el) => obs.observe(el));

    return () => {
      setIntersectingId('');
      obs.disconnect();
    };
  }, [els]);

  return intersectingId;
}
