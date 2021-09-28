import * as React from 'react';

import { IconButton, Text, HStack } from '@chakra-ui/react';

import { CaretLeftIcon, CaretRightIcon } from '../Icon';

import PaginationIndex from './PaginationIndex';
import DotButton from './DotButton';

export type PaginationProps = {
  numPages: number;
  currentPage: number;
  neighbor?: number;
  onPageChange?: (page: number) => void;
};

function Pagination(
  { numPages, currentPage, neighbor, onPageChange }: React.PropsWithoutRef<PaginationProps>,
): JSX.Element {
  const neighborCount = neighbor || 1;

  const pages = [];

  for (let itr = Math.max(currentPage - neighborCount, 1); itr <= currentPage && itr <= numPages; itr++) {
    pages.push(itr);
  }

  for (let itr = currentPage + 1; itr <= numPages && itr <= currentPage + neighborCount; itr++) {
    pages.push(itr);
  }

  return (
    <HStack
      display="flex"
      alignItems="center"
      spacing={4}>
      <IconButton
        variant="ghost"
        aria-label="previous-page"
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={currentPage === 1}>
        <CaretLeftIcon stroke="gray.400" w={5} h={5} />
      </IconButton>

      <HStack spacing={2}>
        {
          pages[0] !== 1 &&
          <PaginationIndex
            onClick={() => onPageChange(1)}>
            <Text color={currentPage === 1 ? 'primary.base' : 'gray.600'} fontWeight={500}>
              1
            </Text>
          </PaginationIndex>
        }
        {pages[0] - 1 >= 2 && <DotButton />}
        {
          pages.map((page: number) => {
            return (
              <PaginationIndex
                key={`pager-${page}`}
                onClick={() => onPageChange(page)}>
                <Text color={currentPage === page ? 'primary.base' : 'gray.600' } fontWeight={500}>
                  {page}
                </Text>
              </PaginationIndex>
            );
          })
        }
        {numPages - pages[pages.length - 1] >= 2 && <DotButton />}
        {
          pages[pages.length - 1] !== numPages &&
          <PaginationIndex
            onClick={() => onPageChange(numPages)}>
            <Text fontWeight={500} color={currentPage === numPages ? 'primary.base' : 'gray.600'}>
              {numPages}
            </Text>
          </PaginationIndex>
        }
      </HStack>

      <IconButton
        variant="ghost"
        aria-label="next-page"
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage === numPages}>
        <CaretRightIcon stroke="gray.400" w={5} h={5} />
      </IconButton>
    </HStack>
  );
}

export default Pagination;
