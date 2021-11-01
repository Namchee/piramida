import * as React from 'react';

import { setCDN, getHighlighter, Highlighter } from 'shiki';

/**
 * useSyntaxHighlighter is a hook to cache syntax Shiki
 *
 * @return {[]} useState-like values.
 */
export function useSyntaxHighlighter(): [Highlighter, () => Promise<void>] {
  const [highlighter, setHighlighter] = React.useState<Highlighter>(null);
  // singleflight
  const [isLoading, setIsLoading] = React.useState(false);

  const loadHighlighter = async () => {
    if (highlighter || isLoading) {
      return;
    }

    setIsLoading(true);

    setCDN('https://unpkg.com/shiki/');

    const hl = await getHighlighter({ theme: 'nord' });

    setHighlighter(hl);
    setIsLoading(false);
  };

  return [highlighter, loadHighlighter];
}
