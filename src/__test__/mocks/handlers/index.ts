// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { URL_REQUEST } from '../../../constants';
import * as driverManagement from '../mock/driverManagement';

export const requestHandlers = [
  rest.get(
    URL_REQUEST.get_driver_mock,
    driverManagement.driverManagement,
  ),
];
