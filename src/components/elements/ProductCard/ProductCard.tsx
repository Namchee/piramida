import * as React from 'react';

import { ProductData } from '@/common/types';

import ProductSkeleton from './Skeleton';
import ProductAvatar from './ProductAvatar';

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
    <ProductAvatar alt={product.name} page={product.url} />
  );
}

ProductCard.Skeleton = ProductSkeleton;

export default ProductCard;
