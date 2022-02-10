import React from 'react';
import {
  render, cleanup, waitFor, screen, within,
} from '@testing-library/react';
import { Provider } from 'react-redux';

import { setupServer } from 'msw/node';
import { requestHandlers } from '../mocks/handlers';
import { driverManagementResponse } from '../mocks/mock/driverManagement';

import DriverManagement from '../../pages/DriverManagement';
import store from '../../redux';
import { reformatDate } from '../../utils';

const mswServer = setupServer(...requestHandlers);
beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());

describe('---Mounting DriverManagement Page----', () => {
  afterEach(cleanup);

  test('DriverManagementPage call API', async () => {
    render(
      <Provider store={store}>
        <DriverManagement />
      </Provider>,
    );
    const { getByText } = within(screen.getByRole('heading', { name: /loading/i }));
    expect(getByText('Loading')).toBeInTheDocument();

    const DivDriverCards = await waitFor(() => screen.getAllByTestId('driver-card'));
    expect(DivDriverCards.length).toBe(driverManagementResponse.results.length);

    const driverData = driverManagementResponse.results;
    DivDriverCards.forEach((DivDriverCard, index) => {
      const { getByText } = within(DivDriverCard);

      const driverId = driverData[index].login.uuid.split('-')[0];
      expect(getByText(driverId)).toBeInTheDocument();

      const driverFrstName = driverData[index].name.first;
      const driverLastName = driverData[index].name.last;
      expect(getByText(`${driverFrstName} ${driverLastName}`)).toBeInTheDocument();

      const driverPhone = driverData[index].phone;
      expect(getByText(driverPhone)).toBeInTheDocument();

      const driverEmail = driverData[index].email;
      expect(getByText(driverEmail)).toBeInTheDocument();

      const driverDOB = reformatDate(driverData[index].dob.date);
      expect(getByText(driverDOB)).toBeInTheDocument();
    });
  });
});
