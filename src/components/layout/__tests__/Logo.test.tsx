
import React from 'react';

import { render, screen } from '@testing-library/react';

import Logo from '@/components/layout/Navigation/Logo';

describe('<Logo> component', () => {
  test('should display a logo', () => {
    render(<Logo />);

    expect(screen.queryByRole('banner')).not.toBeNull();
  });
});

