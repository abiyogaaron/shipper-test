import {
  EDriverManagementAction,
  IDriverManagementAction,
  IDriverManagementSetDataAction,
} from '../../type/driverManagement';

export const setLoading = (isLoading: boolean): IDriverManagementAction => ({
  type: EDriverManagementAction.SET_LOADING,
  payload: { isLoading },
});

export const setData = (obj: IDriverManagementSetDataAction): IDriverManagementAction => ({
  type: EDriverManagementAction.SET_DATA,
  payload: {
    data: obj.data,
    previewDriver: obj.previewDriver,
  },
});
