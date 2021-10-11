import * as React from 'react';

import { useAutoComplete } from '../context';

type SuggestionProps = {
  index: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Suggestions component. Represents a suggestion.
 *
 * @param {SuggestionProps} props suggestion props
 * @return {JSX.Element} suggestion component
 */
function Suggestion(
  { index, onClick, children }: React.PropsWithChildren<SuggestionProps>,
): JSX.Element {
  const { state, dispatch } = useAutoComplete();
  const { focusIndex } = state;

  const handleClick = (event) => {
    dispatch({ type: 'FOCUS', value: false });

    if (onClick) {
      onClick(event);
    }
  };

  const handleHover = () => {
    dispatch({ type: 'FOCUS_INDEX', value: index });
  };

  const styles = React.useMemo((): string => {
    const base = [
      'cursor-pointer',
      'flex',
      'justify-start',
      'items-center',
      'py-4',
      'px-5',
      'transition-colors',
    ];

    if (focusIndex === index) {
      base.push('bg-gray-100');
    }

    return base.join(' ');
  }, [index, focusIndex]);

  return (
    <li
      role="option"
      aria-selected={focusIndex === index}
      className={styles}
      onMouseEnter={handleHover}
      onClick={handleClick}>
      {children}
    </li>
  );
}

export default Suggestion;
