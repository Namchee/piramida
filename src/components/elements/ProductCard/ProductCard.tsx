import * as React from 'react';

import { ProductData } from '@/common/types';

import { Box, Link } from '@chakra-ui/react';

import ResultSkeleton from './Skeleton';

export type ProductCardProps = {
  product: ProductData;
}

/**
 * Product card component.
 *
 * @param {Product} props product entity
 * @return {JSX.Element} product card
 */
function ProductCard(
  { product }: React.PropsWithoutRef<ProductCardProps>
): JSX.Element {
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

ProductCard.Skeleton = ResultSkeleton;

export default ProductCard;
