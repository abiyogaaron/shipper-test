import {
  EDriverManagementAction,
  IDriverManagementAction,
  IDriverManagementSetDataAction,
  IDriverManagementSetPreviewAction,
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

export const setPreviewAndPage = (obj: IDriverManagementSetPreviewAction): IDriverManagementAction => ({
  type: EDriverManagementAction.SET_PREVIEW,
  payload: {
    previewDriver: obj.previewDriver,
    currentPage: obj.currentPage,
  },
});
