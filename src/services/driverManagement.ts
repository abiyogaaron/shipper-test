import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { toast } from 'react-toastify';

import { apiCall } from '.';
import { MAX_DRIVER_PER_PAGE, URL_REQUEST } from '../constants';
import { AppState } from '../redux';
import { setError } from '../redux/actions/common';
import { setData, setLoading } from '../redux/actions/driverManagement';
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
  const { currentPage, data, previewDriver } = state().driverManagement;

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

    const offset = currentPage * MAX_DRIVER_PER_PAGE;
    d(setData({
      data: reformatDrivers,
      previewDriver: reformatDrivers.slice(offset, offset + MAX_DRIVER_PER_PAGE),
    }));
  } catch (error) {
    const { message } = error as IError;

    d(setError(error as IError));
    toast.error(message);
  } finally {
    d(setLoading(false));
  }
};
