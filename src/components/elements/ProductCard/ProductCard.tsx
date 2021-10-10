import * as React from 'react';

import { ProductData } from '@/common/types';

import { CompanyIcon, WebsiteIcon } from '@/components/elements/Icon';

import ProductSkeleton from './Skeleton';

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
    <li className="flex flex-col
      p-4
      w-full">
      <p className="text-xl
        tracking-tight
        font-bold
        leading-loose
        text-gray-700">
        {product.name}
      </p>
      <div className="flex justify-start items-center
        space-x-4
        text-gray-500
        leading-loose">
        <CompanyIcon className="w-4 h-4" />
        <p>{product.owner}</p>
      </div>
      <div className="flex justify-start items-center
        space-x-4">
        <WebsiteIcon className="w-4 h-4
          text-gray-500" />
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary
          hover:text-primary-dark
          visited:text-primary-light
          transition-colors
          max-w-lg
          truncate">
          {product.url}
        </a>
      </div>
    </li>
  );
}

ProductCard.Skeleton = ProductSkeleton;

export default ProductCard;
