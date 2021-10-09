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
      <div className="flex flex-col justify-between space-y-2">
        <Skeleton className="w-96 h-6
          rounded-md" />
        <Skeleton className="w-32 h-4
          rounded-md" />
        <Skeleton className="w-32 h-4
          rounded-md" />
      </div>
    </div>
  );
}

export default ProductSkeleton;
