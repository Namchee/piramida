import * as React from 'react';

import { useWindowEvent } from '@/hooks/useWindowEvent';
import { useAutoComplete } from '../context';

import { StyleProps } from '@/common/types';

/**
 * Suggestions container element.
 *
 * @param {StyleProps} props style props
 * @return {JSX.Element} suggestions container element
 */
function SuggestionsContainer(
  { className, children }: React.PropsWithChildren<StyleProps>,
): JSX.Element {
  const containerRef = React.useRef(null);

  const { state, dispatch } = useAutoComplete();
  const { focus, focusIndex } = state;

  useWindowEvent('keydown', (event: KeyboardEvent) => {
    if (!focus) {
      return;
    }

    const childElements = React.Children
      .toArray(children) as React.ReactElement[];
    const childrenAsHtml = Array.from(
      (containerRef.current as HTMLElement).children,
    );

    switch (event.key) {
      case 'ArrowUp': {
        event.preventDefault();

        if (focusIndex > 0) {
          dispatch({ type: 'FOCUS_INDEX', value: focusIndex - 1 });
        } else {
          dispatch({ type: 'FOCUS_INDEX', value: 0 });
        }

        break;
      }
      case 'ArrowDown': {
        event.preventDefault();

        if (focusIndex < childElements.length - 1) {
          dispatch({ type: 'FOCUS_INDEX', value: focusIndex + 1 });
        } else {
          dispatch({ type: 'FOCUS_INDEX', value: childElements.length - 1 });
        }

        break;
      }
      case 'Enter': {
        event.preventDefault();

        if (focusIndex === -1) {
          return;
        }

        if (childElements[focusIndex].type['name'] === 'Suggestion') {
          (childrenAsHtml[focusIndex] as HTMLButtonElement).click();
        }

        break;
      }
    }
  });

  if (!focus) {
    return <></>;
  }

  return (
    <ul
      ref={containerRef}
      role="listbox"
      aria-live="polite"
      aria-label="Daftar nama investasi"
      className={className}>
      {children}
    </ul>
  );
}

export default SuggestionsContainer;
