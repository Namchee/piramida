import * as React from 'react';

/**
 * Dot button, an unclickable button
 *
 * @return {JSX.Element} dot button
 */
function DotButton(): JSX.Element {
  return <button
    disabled={true}
    aria-hidden={true}
    className="w-8 h-12 cursor-not-allowed text-gray-500">
      ...
  </button>;
}

export default DotButton;
