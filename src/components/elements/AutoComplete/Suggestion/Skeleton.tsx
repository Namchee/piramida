import * as React from 'react';

import { Box, Skeleton } from '@chakra-ui/react';

function SuggestionSkeleton() {
  return (
    <Box
      cursor="not-allowed"
      p={4}>
      <Skeleton height={3} startColor="gray.100" endColor="gray.300" />
    </Box>
  );
}

export default SuggestionSkeleton;
