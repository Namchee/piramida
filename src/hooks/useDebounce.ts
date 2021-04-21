import { useLayoutEffect, useRef, useMemo } from 'react';

function debounce(fn: Function, delay: number): Function {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export function useDebounce(callback: Function, delay: number) {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  return useMemo(
    () => debounce((...args) => callbackRef.current(...args), delay),
    [delay],
  );
}
