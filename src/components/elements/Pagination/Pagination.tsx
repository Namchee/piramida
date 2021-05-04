import * as React from 'react';

import { Button, Text, HStack } from '@chakra-ui/react';

import { ChevronLeftIcon, ChevronRightIcon } from '../Icon';

import PaginationIndex from './PaginationIndex';

export type PaginationProps = {
  numPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

function Pagination(
  { numPages, currentPage, onPageChange }: React.PropsWithoutRef<PaginationProps>,
) {
  return (
    <HStack
      display="flex"
      alignItems="center"
      spacing="8px">
      <Button
        variant="ghost"
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={currentPage === 1}>
        <ChevronLeftIcon w={5} h={5} />
      </Button>

      <HStack
        spacing="4px">
        {
          numPages > 1 &&
          <PaginationIndex>
            <Text textColor={currentPage === 1 ? 'primary' : 'black'}>
              1
            </Text>
          </PaginationIndex>
        }
        <PaginationIndex>
          {numPages}
        </PaginationIndex>
      </HStack>

      <Button
        variant="ghost"
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage === numPages}>
        <ChevronRightIcon w={5} h={5} />
      </Button>
    </HStack>
  );
}

export default Pagination;
