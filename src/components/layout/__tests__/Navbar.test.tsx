/* eslint-disable max-len */
import React from 'react';

import { render } from '@testing-library/react';

import { Navigation } from '@/components/layout/Navigation';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementation(() => ({
  pathname: '/',
}));

describe('<Navbar> component', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  test('should display a navbar', () => {
    const { container } = render(<Navigation />);

    expect(container.firstChild).toMatchInlineSnapshot(`
    <header
      class="flex justify-center"
    >
      <nav
        class="w-full h-24 max-w-6xl
     flex justify-between items-center"
      >
        <a
          href="/"
          rel="noopener noreferrer"
        >
          <svg
            class="w-12 h-auto"
            fill="none"
            role="banner"
            viewBox="0 0 192 192"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="96"
              cy="96"
              fill="#121212"
              r="96"
            />
            <path
              d="M96.3776 42L114.982 74.2238H77.7732L96.3776 42Z"
              fill="#F5F5F4"
            />
            <path
              d="M53.4126 117.189H139.343L150.755 138H42L53.4126 117.189Z"
              fill="white"
              fill-opacity="0.7"
            />
            <path
              d="M120.545 84.965H72.2098L60.1259 106.448H132.629L120.545 84.965Z"
              fill="white"
              fill-opacity="0.85"
            />
          </svg>
        </a>
        <div
          class="flex space-x-4"
        >
          <a
            class="flex items-center justify-center
          text-lg
          px-4 py-2
          rounded-md
          transition-colors
          hover:bg-gray-100
          text-primary"
            href="/"
            rel="noopener noreferrer"
          >
            Beranda
          </a>
          <a
            class="flex items-center justify-center
          text-lg
          px-4 py-2
          rounded-md
          transition-colors
          hover:bg-gray-100
          text-black"
            href="/about"
            rel="noopener noreferrer"
          >
            Tentang Kami
          </a>
          <a
            class="flex items-center justify-center
          text-lg
          px-4 py-2
          rounded-md
          transition-colors
          hover:bg-gray-100
          text-black"
            href="/docs"
            rel="noopener noreferrer"
          >
            Referensi API
          </a>
        </div>
      </nav>
    </header>
    `);
  });
});
