import { useRef, useMemo } from 'react';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

/**
 * Debounce function. Stolen.
 *
 * @param {Function} fn function to debounce
 * @param {number} delay execution delay in seconds
 * @return {Function} debounced function
 */
function debounce(fn: Function, delay: number): Function {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export function useDebounce(
  callback: Function,
  delay: number,
): Function {
  const callbackRef = useRef(callback);

  useIsomorphicLayoutEffect(() => {
    callbackRef.current = callback;
  });

  return useMemo(
    () => debounce((...args) => callbackRef.current(...args), delay),
    [delay],
  );
}
