import * as React from 'react';

import Link from 'next/link';

import NavigationLink from './Link';
import Logo from './Logo';

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
    <header className="flex flex-col md:flex-row md:justify-between items-center
      md:h-24
      w-full max-w-6xl mx-auto
      px-2 py-6
      md:p-0">
      <Link href="/">
        <a rel="noopener noreferrer">
          <Logo className="<md:w-10 w-12 h-auto mr-auto" />
        </a>
      </Link>

      <nav className="flex
        md:space-x-4
        <md:mt-4">
        {
          LINKS.map(({ name, href }) => {
            return (
              <NavigationLink href={href} key={href}>
                {name}
              </NavigationLink>
            );
          })
        }
      </nav>
    </header>
  );
}

export default Navigation;
