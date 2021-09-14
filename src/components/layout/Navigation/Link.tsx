import * as React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

type NavigationLinkProps = {
  href: string;
}

function NavigationLink({ children, href }: React.PropsWithChildren<NavigationLinkProps>): JSX.Element {
  const { pathname } = useRouter();
  const isCurrentPath = pathname === href;

  const classes = React.useMemo((): string => {
    const color = isCurrentPath ? 'text-primary' : 'text-black';

    return `flex items-center justify-center
      text-lg
      px-4 py-2
      rounded-md
      transition-colors
      hover:bg-gray-100
      ${color}`;
  }, [href]);

  return (
    <Link href={href}>
      <a className={classes} rel="noopener noreferrer">{children}</a>
    </Link>
  );
}

export default NavigationLink;
