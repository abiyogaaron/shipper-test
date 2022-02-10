// eslint-disable-next-line import/no-extraneous-dependencies
import { setupWorker } from 'msw';
import { requestHandlers } from './handlers';

export const worker = setupWorker(...requestHandlers);
