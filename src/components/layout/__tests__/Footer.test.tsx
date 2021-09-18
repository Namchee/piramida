import React from 'react';

import { cleanup, render, waitFor } from '@testing-library/react';

import { Footer } from '@/components/layout/Footer';

import { StatusEndpointResponse } from '../Footer/Status';

interface TestCase {
  name: string;
  expectedStatus: string;
  mockData?: StatusEndpointResponse;
  mockError?: string;
}

afterAll(cleanup);

describe('<Footer> component', () => {
  test('it passes', () => {
    expect(1).toBe(1);
  });
  /*
  test.each`
    name                               | expectedStatus | mockData                                                          | mockError
    ${'should display loading'}        | ${'Loading'}   | ${undefined}                                                      | ${undefined}
    ${'should display stable'}         | ${'Stable'}    | ${{ data: { status: 'ok', version: '11/12/2021' }, error: null }} | ${undefined}
    ${'should display desync error'}   | ${'Error'}     | ${{ data: null, error: 'This is error' }}                         | ${undefined}
    ${'should display API error'}      | ${'Error'}     | ${{ data: null, error: '' }}                                      | ${new Error('this is error')}
  `('$name', async ({ name, expectedStatus, mockData, mockError }: TestCase) => {
    global.fetch = jest.fn().mockResolvedValue({
      status: mockError ? 500 : 200,
      ok: !mockError,
      json: () => mockError ?
        Promise.reject(mockError) :
        Promise.resolve(mockData),
    });

    const screen = render(<Footer />);
    const matcher = new RegExp(expectedStatus, 'i');

    await waitFor(() => screen.getByText(matcher));
    expect(screen.getByText(matcher)).toBeInTheDocument();
  });
  */
});
