import * as React from 'react';

import { Box, Link } from '@chakra-ui/react';

import { ExternalIcon } from '@/components/elements/Icon';

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

      <Box>
        <ExternalIcon
          _groupHover={{
            textColor: 'gray.400',
          }}
          _groupActive={{
            textColor: 'gray.400',
          }}
          _groupFocus={{
            textColor: 'gray.400',
          }}
          textColor="transparent"
          w={5}
          h={5} />
      </Box>
    </Link>
  );
}

SearchResult.Skeleton = ResultSkeleton;

export default SearchResult;
