import * as React from 'react';

export type PaginationIndexProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * Pagination index component. Allows user to jump straight to a certain
 * page.
 *
 * @param {PaginationIndexProps} props pagination index props
 * @return {JSX.Element} pagination index element
 */
function PaginationIndex(
  { onClick, children }: React.PropsWithChildren<PaginationIndexProps>,
): JSX.Element {
  return (
    <button
      className="w-12 h-12
        text-lg
        rounded-md
        transition-colors
        hover:bg-gray-100"
      onClick={onClick}>
      {children}
    </button>
  );
}

export default PaginationIndex;
