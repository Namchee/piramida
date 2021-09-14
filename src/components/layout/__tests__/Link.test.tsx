
import React from 'react';

import { render, screen } from '@testing-library/react';

import Link from '@/components/layout/Navigation/Link';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('<Link> component', () => {
  test('should display a navigation link', () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: '/foo',
    }));

    render(<Link href="/">Foo</Link>);

    const el = screen.getByRole('link');

    expect(el).toHaveAttribute('href', '/');
    expect(el).toHaveClass('text-black');
  });

  test('should have primary text when route is current', () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: '/',
    }));

    render(<Link href="/">Foo</Link>);

    const el = screen.getByRole('link');

    expect(el).toHaveAttribute('href', '/');
    expect(el).toHaveClass('text-primary');
  });
});

