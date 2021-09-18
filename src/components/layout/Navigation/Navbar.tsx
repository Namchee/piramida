import * as React from 'react';

import Link from 'next/link';

import NavigationLink from '@/components/layout/Navigation/Link';
import Logo from '@/components/layout/Navigation/Logo';

const LINKS = [
  {
    name: 'Beranda',
    href: '/',
  },
  {
    name: 'Tentang Kami',
    href: '/about',
  },
  {
    name: 'Referensi API',
    href: '/docs',
  },
];

/**
 * Navigation Bar Component
 *
 * @return {JSX.Element} navbar component
 */
function Navigation(): JSX.Element {
  return (
    <header className="flex justify-center">
      <nav className="w-full h-24
        max-w-6xl
        flex justify-between items-center">
        <Link href="/">
          <a rel="noopener noreferrer">
            <Logo className="w-12 h-auto" />
          </a>
        </Link>
        <div className="flex space-x-4">
          {
            LINKS.map(({ name, href }) => {
              return (
                <NavigationLink href={href} key={href}>
                  {name}
                </NavigationLink>
              );
            })
          }
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
