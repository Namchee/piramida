import * as React from 'react';

import NavigationLink from '@/components/layout/Navigation/Link';
import Logo from '@/components/layout/Navigation/Logo';

const LINKS = [
  {
    name: 'Beranda',
    href: '/',
  },
  {
    name: 'Tentang',
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
 * @return {JSX.Element}
 */
function Navbar(): JSX.Element {
  return (
    <header className="flex justify-center">
      <nav className="w-full h-32 max-w-6xl
        flex justify-between items-center">
        <a href="/" rel="noopener noreferrer">
          <Logo className="w-16 h-auto" />
        </a>
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

export default Navbar;
