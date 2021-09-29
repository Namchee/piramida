import * as React from 'react';

import { Box, Skeleton } from '@chakra-ui/react';

function SearchSkeleton() {
  return (
    <Box w="full" px={2} py={4}>
      <Skeleton h={3} maxW="xs" startColor="gray.100" endColor="gray.300" />
      <Skeleton mt={1} h={2} maxW="3xs" startColor="gray.100" endColor="gray.300" speed={0.9} />
    </Box>
  );
}

export default SearchSkeleton;
