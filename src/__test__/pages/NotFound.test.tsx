import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NotFound from '../../pages/NotFound';

describe('Snapshot NotFoundPage Testing', () => {
  test('Snapshot of NotFoundPage', () => {
    const { asFragment } = render(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
  });
  afterEach(cleanup);
});
