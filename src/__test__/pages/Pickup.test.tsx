import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Pickup from '../../pages/Pickup';

describe('Snapshot PickupPage Testing', () => {
  test('Snapshot of PickupPage', () => {
    const { asFragment } = render(<Pickup />);
    expect(asFragment()).toMatchSnapshot();
  });
  afterEach(cleanup);
});
