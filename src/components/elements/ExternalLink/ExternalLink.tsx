import * as React from 'react';

import { Link, LinkProps } from '@chakra-ui/react';

function ExternalLink(props: LinkProps) {
  return (
    <Link
      color="primary.base"
      isExternal
      {...props}>
      {props.children}
    </Link>
  );
}

export default ExternalLink;
