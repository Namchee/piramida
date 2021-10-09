import * as React from 'react';

import { Skeleton } from '@/components/elements/Skeleton';

/**
 * Product card skeleton loader
 *
 * @return {JSX.Element} skeleton loader for product card
 */
function ProductSkeleton(): JSX.Element {
  return (
    <div className="flex
      space-x-4
      w-full
      p-6">
      <Skeleton className="w-8 h-8
        rounded-md" />
      <div className="flex flex-col justify-between space-y-2">
        <Skeleton className="w-64 h-6
          rounded-sm" />
        <Skeleton className="w-32 h-4
          rounded-sm" />
        <Skeleton className="w-32 h-4
          rounded-sm" />
      </div>
    </div>
  );
}

export default ProductSkeleton;
