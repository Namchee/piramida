import * as React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

type NavigationLinkProps = {
  href: string;
};

/**
 * Navigation link component. Used exclusively in navbar
 *
 * @param {NavigationLinkProps} props navigation link props
 * @return {JSX.Element} navigation link element
 */
function NavigationLink({
  children,
  href,
}: React.PropsWithChildren<NavigationLinkProps>): JSX.Element {
  const { pathname } = useRouter();
  const isCurrentPath = pathname === href;

  const classes = React.useMemo((): string => {
    const color = isCurrentPath ? 'text-primary' : 'text-black';

    return `flex items-center justify-center
      px-4 py-2
      rounded-md
      transition-colors
      hover:bg-gray-50
      ${color}`;
  }, [isCurrentPath]);

  return (
    <Link href={href} passHref={true}>
      <a className={classes}>
        {children}
      </a>
    </Link>
  );
}

export default NavigationLink;
