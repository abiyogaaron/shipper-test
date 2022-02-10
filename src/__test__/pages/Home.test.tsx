import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Snapshot HomePage Testing', () => {
  test('Snapshot of HomePage', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
  afterEach(cleanup);
});
