import { ERROR_MESSAGE } from '../constants';
import { THttpMethod } from '../type';

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
          const obj = {
            status: response.status || 500,
            message: ERROR_MESSAGE[response.status] || '',
          };
          reject(new Error(JSON.stringify(obj)));
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
