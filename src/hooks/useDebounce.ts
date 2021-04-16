import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, duration: number) {
  const [debouncedValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const setValue = setTimeout(() => {
      setDebounceValue(value);
    }, duration);

    return () => {
      clearTimeout(setValue);
    };
  }, [value, duration]);

  return debouncedValue;
}
