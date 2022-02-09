import { ECommonAction, IError } from '../../type/common';

export const setError = (error: IError) => ({
  type: ECommonAction.SET_ERROR,
  payload: { error },
});
