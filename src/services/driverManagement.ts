import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { toast } from 'react-toastify';

import { batch } from 'react-redux';
import { apiCall } from '.';
import { URL_REQUEST } from '../constants';
import { AppState } from '../redux';
import { setError } from '../redux/actions/common';
import { setData, setLoading, setPreview } from '../redux/actions/driverManagement';
import { IDriverResponse, PromiseVoid, TDriverManagementData } from '../type';
import { IError } from '../type/common';
import { IDriverManagementAction } from '../type/driverManagement';

export const getDriverData = ():
ThunkAction<
PromiseVoid,
AppState,
{},
IDriverManagementAction
> => async (d: Dispatch, state) => {
  const { data, previewDriver } = state().driverManagement;

  if (data.length > 0 || previewDriver.length > 0) {
    return;
  }

  try {
    d(setLoading(true));
    const response = await apiCall<IDriverResponse>(URL_REQUEST.get_driver, 'GET');
    const reformatDrivers = response.results.map((driver) => {
      const newDriver: TDriverManagementData = {
        name: driver.name,
        dob: driver.dob,
        email: driver.email,
        phone: driver.phone,
        login: driver.login,
      };
      return newDriver;
    });
    batch(() => {
      d(setData(reformatDrivers));
      d(setPreview(reformatDrivers));
    });
  } catch (error) {
    const { message } = error as IError;

    d(setError(error as IError));
    toast.error(message);
  } finally {
    d(setLoading(false));
  }
};
