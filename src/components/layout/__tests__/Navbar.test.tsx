import React from 'react';

import { cleanup, render } from '@testing-library/react';

import { Navigation } from '@/components/layout/Navigation';
import * as nextRouter from 'next/router';

afterEach(cleanup);

describe('<Navbar> component', () => {
  it('should display a navbar', () => {
    const useRouter = jest.spyOn(nextRouter, 'useRouter');
    useRouter.mockImplementation(() => {
      return {
        pathname: '',
      } as nextRouter.NextRouter;
    });

    const screen = render(<Navigation />);

    expect(screen.queryByRole('navigation')).not.toBeNull();
    expect(screen.getAllByRole('banner')).toHaveLength(2);
    expect(screen.getAllByRole('link')).toHaveLength(4);
    expect(screen.getByText(/beranda/i)).toBeInTheDocument();
    expect(screen.getByText(/tentang kami/i)).toBeInTheDocument();
    expect(screen.getByText(/referensi api/i)).toBeInTheDocument();
  });
});
