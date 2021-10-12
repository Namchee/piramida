import * as React from 'react';

import { ProductData } from '@/common/types';
import { CompanyIcon, WebsiteIcon } from '@/components/elements/Icon';

import ProductSkeleton from './Skeleton';

export type ProductCardProps = {
  product: ProductData;
};

/**
 * Product card component.
 *
 * @param {Product} props product entity
 * @return {JSX.Element} product card
 */
function ProductCard({
  product,
}: React.PropsWithoutRef<ProductCardProps>): JSX.Element {
  return (
    <li
      className="py-4
      md:px-4
      w-full"
    >
      <p
        className="text-lg
            <md:text-xl
            text-2xl
            tracking-tight
            font-bold
            leading-loose
            text-gray-700
            <md:mb-2"
      >
        {product.name}
      </p>
      <div
        className="flex justify-start items-center
          space-x-4
          text-gray-500
          leading-loose
          <md:mb-1"
      >
        <CompanyIcon className="min-w-4 min-h-4
            max-h-4 max-w-4" />
        <p className="<md:text-sm">{product.owner}</p>
      </div>
      <div
        className="flex justify-start items-center
          space-x-4"
      >
        <WebsiteIcon
          className="min-w-4 min-h-4
            max-h-4 max-w-4
            text-gray-500"
        />
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary
            hover:text-primary-light
            transition-colors
            <md:text-sm
            truncate"
        >
          {product.url}
        </a>
      </div>
    </li>
  );
}

ProductCard.Skeleton = ProductSkeleton;

export default ProductCard;
