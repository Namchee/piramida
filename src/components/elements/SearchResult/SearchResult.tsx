import * as React from 'react';

import { Box, Link } from '@chakra-ui/react';

import ResultSkeleton from './Skeleton';

export type SearchResultProps = {
  to: string;
};

function SearchResult({ to, children }: React.PropsWithChildren<SearchResultProps>) {
  return (
    <Link
      w="full"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      href={to}
      py={4}
      px={6}
      backgroundColor="transparent"
      rounded="md"
      h="unset"
      role="group"
      isExternal
      _hover={{
        backgroundColor: 'gray.50',
      }}
      _active={{
        outline: 'none',
      }}
      _focus={{
        outline: 'none',
        backgroundColor: 'gray.50',
      }}>
      <Box>
        {children}
      </Box>
    </Link>
  );
}

SearchResult.Skeleton = ResultSkeleton;

export default SearchResult;
