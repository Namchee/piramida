import * as React from 'react';

import { Box, Skeleton } from '@chakra-ui/react';

function SearchSkeleton() {
  return (
    <Box>
      <Skeleton h={6}></Skeleton>
      <Skeleton h={2}></Skeleton>
    </Box>
  );
}

export default SearchSkeleton;
