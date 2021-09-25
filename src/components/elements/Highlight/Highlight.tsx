import * as React from 'react';

export type HighlightProps = {
  text: string;
  term: string;
  highlightStyle: string;
}

/**
 * Highlighter component. Usually used on autocomplete
 *
 * @param {HighlightProps} props highlighter props
 * @return {JSX.Element} highlighter component
 */
function Highlight(
  { text, term, highlightStyle }: React.PropsWithoutRef<HighlightProps>,
): JSX.Element {
  const children = [];

  let lastIdx = 0;
  let termIdx = text.toLowerCase().indexOf(term.toLowerCase());

  while (termIdx !== -1) {
    if (termIdx !== lastIdx) {
      children.push(text.slice(lastIdx, termIdx));
    }

    children.push(
      <span className={highlightStyle} key={termIdx}>
        {text.slice(termIdx, termIdx + term.length)}
      </span>,
    );

    lastIdx = termIdx + term.length;
    termIdx = text.toLowerCase().indexOf(term.toLowerCase(), lastIdx);
  }

  children.push(text.slice(lastIdx));

  return (
    <>
      {children}
    </>
  );
}

export default Highlight;
