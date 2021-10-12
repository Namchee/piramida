import * as React from 'react';

/**
 * Empty suggestion component. Shown when there's no suggestions
 * at all.
 *
 * @return {JSX.Element} empty suggestion component
 */
function EmptySuggestion(): JSX.Element {
  return (
    <div className="py-8 px-6
      text-center
      w-full h-full
      flex flex-col justify-center items-center
      cursor-not-allowed
      text-gray-400
      text-lg">
      <p>
        Tidak ada data investasi yang sesuai
      </p>
    </div>
  );
}

export default EmptySuggestion;
