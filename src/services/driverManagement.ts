import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { toast } from 'react-toastify';

import { apiCall } from '.';
import { MAX_DRIVER_PER_PAGE, URL_REQUEST } from '../constants';
import { AppState } from '../redux';
import { setError } from '../redux/actions/common';
import { setData, setLoading } from '../redux/actions/driverManagement';
import { IDriverResponse, PromiseVoid } from '../type';
import { IError } from '../type/common';
import { IDriverManagementAction } from '../type/driverManagement';

export const getDriverData = ():
ThunkAction<
PromiseVoid,
AppState,
{},
IDriverManagementAction
> => async (d: Dispatch, state) => {
  const { currentPage } = state().driverManagement;

  try {
    d(setLoading(true));
    const response = await apiCall<IDriverResponse>(URL_REQUEST.get_driver, 'GET');
    d(setData({
      data: response.results,
      previewDriver: response.results.slice(0, MAX_DRIVER_PER_PAGE * currentPage),
    }));
  } catch (err) {
    const error = JSON.parse(err as string);
    const { message } = error as IError;

    d(setError(err as IError));
    toast.error(message);
  } finally {
    d(setLoading(false));
  }
};
