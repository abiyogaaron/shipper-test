import { TDriverManagementData } from '../../type';
import {
  EDriverManagementAction,
  IDriverManagementAction,
} from '../../type/driverManagement';

export const setLoading = (isLoading: boolean): IDriverManagementAction => ({
  type: EDriverManagementAction.SET_LOADING,
  payload: { isLoading },
});

export const setData = (data: TDriverManagementData[]): IDriverManagementAction => ({
  type: EDriverManagementAction.SET_DATA,
  payload: { data },
});

export const setCurrPage = (currPage: number): IDriverManagementAction => ({
  type: EDriverManagementAction.SET_CURRPAGE,
  payload: {
    currentPage: currPage,
  },
});

export const setPreview = (previewDriver: TDriverManagementData[]): IDriverManagementAction => ({
  type: EDriverManagementAction.SET_PREVIEW,
  payload: { previewDriver },
});
