import * as React from 'react';

/**
 * useWindowEffect is a hook that allows you to listen to window events
 *
 * @param {string} name event name
 * @param {Function} callback function to be fired
 * @param {AddEventListenerOptions} options listener options
 */
export function useWindowEvent(
  name: keyof WindowEventMap,
  callback: (event: Event) => unknown,
  options?: boolean | AddEventListenerOptions,
): void {
  React.useEffect(() => {
    window.addEventListener(name, callback, options);

    return () => {
      window.removeEventListener(name, callback);
    };
  }, [name, callback, options]);
}
