import { ERROR_MESSAGE } from '../constants';
import { EStatusErrorCode, THttpMethod } from '../type';

// generic function to do an api call
export const apiCall = <BodyResponse = any>(
  url: string,
  method: THttpMethod,
  body?: any,
): Promise<BodyResponse> => {
  const httpConfig = {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  return new Promise<BodyResponse>((resolve, reject) => {
    fetch(url, httpConfig)
      .then((response) => {
        if (!response.ok) {
          // send error status and error message that already mapped
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({
            status: response.status || 500,
            message: ERROR_MESSAGE[response.status] || ERROR_MESSAGE[EStatusErrorCode.GENERAL_ERROR],
          });
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
