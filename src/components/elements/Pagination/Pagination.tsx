import * as React from 'react';

import { CaretLeftIcon, CaretRightIcon } from '@/components/elements/Icon';

import PaginationIndex from './PaginationIndex';
import DotButton from './DotButton';

export type PaginationProps = {
  numPages: number;
  currentPage: number;
  neighbor?: number;
  onPageChange?: (page: number) => void;
};

/**
 * Pagination component. Used in search result
 *
 * @param {PaginationProps} props pagination props
 * @return {JSX.Element} pagination component
 */
function Pagination(
  {
    numPages,
    currentPage,
    neighbor,
    onPageChange,
  }: React.PropsWithoutRef<PaginationProps>,
): JSX.Element {
  const neighborCount = neighbor || 1;

  const pages = [];

  for (
    let itr = Math.max(currentPage - neighborCount, 1);
    itr <= currentPage && itr <= numPages;
    itr++
  ) {
    pages.push(itr);
  }

  for (
    let itr = currentPage + 1;
    itr <= numPages && itr <= currentPage + neighborCount;
    itr++
  ) {
    pages.push(itr);
  }

  const paginationClass = (page: number) => {
    return page === currentPage ?
      'text-primary font-bold' :
      'text-gray-700';
  };

  const navigationClass = (page: number) => {
    const base = [
      'w-8',
      'h-8',
      'md:w-12',
      'md:h-12',
      'grid',
      'place-items-center',
      'rounded-md',
      'transition-colors',
      'stroke-current',
    ];

    if (currentPage !== page) {
      base.push('hover:bg-gray-100');
    } else {
      base.push('text-gray-400', 'cursor-not-allowed');
    }

    return base.join(' ');
  };

  return (
    <div className="flex items-center
      space-x-4">
      <button
        className={navigationClass(1)}
        aria-label="previous-page"
        disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : 0}
        onClick={() => onPageChange(currentPage - 1)}>
        <CaretLeftIcon className="w-4 h-4 stroke-2" />
      </button>
      <div className="flex space-x-2">
        {
          pages[0] !== 1 &&
          <PaginationIndex onClick={() => onPageChange(1)}>
            <span className={paginationClass(1)}>
              1
            </span>
          </PaginationIndex>
        }
        {pages[0] - 1 >= 2 && <DotButton />}
        {
          pages.map((page: number) => {
            return (
              <PaginationIndex
                key={page}
                onClick={() => onPageChange(page)}>
                <span className={paginationClass(page)}>
                  {page}
                </span>
              </PaginationIndex>
            );
          })
        }
        {numPages - pages[pages.length - 1] >= 2 && <DotButton />}
        {
          pages[pages.length - 1] !== numPages &&
          <PaginationIndex
            onClick={() => onPageChange(numPages)}>
            <span
              className={paginationClass(numPages)}>
              {numPages}
            </span>
          </PaginationIndex>
        }
      </div>
      <button
        className={navigationClass(numPages)}
        aria-label="next-page"
        disabled={currentPage === numPages}
        tabIndex={currentPage === numPages ? -1 : 0}
        onClick={() => onPageChange(currentPage + 1)}>
        <CaretRightIcon className="w-4 h-4" />
      </button>
    </div>
  );
}

export default Pagination;
