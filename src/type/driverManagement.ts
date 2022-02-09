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
  SET_PREVIEW = 'SET_PREVIEW',
}

export interface IDriverManagementSetLoadingAction {
  isLoading: boolean;
}

export interface IDriverManagementSetDataAction {
  data: TDriverManagementData[];
  previewDriver: TDriverManagementData[];
}

export interface IDriverManagementSetPreviewAction {
  previewDriver: TDriverManagementData[];
  currentPage: number;
}

export type TDriverManagementPayload =
  | IDriverManagementSetLoadingAction
  | IDriverManagementSetDataAction
  | IDriverManagementSetPreviewAction;

export interface IDriverManagementAction {
  type: EDriverManagementAction;
  payload: TDriverManagementPayload;
}
