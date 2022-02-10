import { TDriverManagementData } from '.';

export interface IDriverManagementState {
  data: TDriverManagementData[];
  isLoading: boolean;
  currentPage: number;
  previewDriver: TDriverManagementData[];
}

export enum EDriverManagementAction {
  SET_LOADING = 'SET_LOADING',
  SET_DATA = 'SET_DATA',
  SET_CURRPAGE = 'SET_CURRPAGE',
  SET_PREVIEW = 'SET_PREVIEW',
}

export interface IDriverManagementSetLoadingAction {
  isLoading: boolean;
}

export interface IDriverManagementSetDataAction {
  data: TDriverManagementData[];
}

export interface IDriverManagementSetCurrPageAction {
  currentPage: number;
}

export interface IDriverManagementSetPreviewAction {
  previewDriver: TDriverManagementData[];
}

export type TDriverManagementPayload =
  | IDriverManagementSetLoadingAction
  | IDriverManagementSetDataAction
  | IDriverManagementSetPreviewAction
  | IDriverManagementSetCurrPageAction;

export interface IDriverManagementAction {
  type: EDriverManagementAction;
  payload: TDriverManagementPayload;
}
