import * as React from 'react';

import { Button } from '@chakra-ui/button';

export type PaginationIndexProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function PaginationIndex(
  { onClick, children }: React.PropsWithChildren<PaginationIndexProps>,
) {
  return (
    <Button
      p={2}
      variant="ghost"
      onClick={onClick}>
      {children}
    </Button>
  );
}

export default PaginationIndex;
