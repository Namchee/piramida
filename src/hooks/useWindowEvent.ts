import * as React from 'react';

export function useWindowEvent(
  name: keyof WindowEventMap,
  callback: (event: Event) => any,
  options?: boolean | AddEventListenerOptions,
) {
  React.useEffect(() => {
    window.addEventListener(name, callback, options);

    return () => {
      window.removeEventListener(name, callback);
    };
  }, [name, callback, options]);
}
