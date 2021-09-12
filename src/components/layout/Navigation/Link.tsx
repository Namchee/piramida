import * as React from 'react';

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
      px-4 py-2
      rounded-md
      transition-colors
      hover:bg-gray-100
      ${color}`;
  }, [href]);

  return (
    <a
      href={href}
      className={classes}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default NavigationLink;
