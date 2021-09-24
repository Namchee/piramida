import * as React from 'react';

import { StyleProps } from '@/common/types';

/**
 * Generic skeleton loader component. Useful to show loading state.
 *
 * @param {StyleProps} props style props
 * @return {JSX.Element} skeleton loader component.
 */
function Skeleton(
  { className }: React.PropsWithoutRef<StyleProps>,
): JSX.Element {
  const style = React.useMemo((): string => {
    return `animate-pulse bg-gray-300 ${className}`;
  }, [className]);

  return (
    <div
      aria-hidden="true"
      className={style}>
    </div>
  );
}

export default Skeleton;
