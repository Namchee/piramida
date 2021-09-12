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
        <NavigationLink href="/">
          <Logo className="w-16 h-auto" />
        </NavigationLink>
      </nav>
    </header>
  );
}

export default Navbar;
