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
}

export interface IDriverManagementSetLoadingAction {
  isLoading: boolean;
}

export interface IDriverManagementSetDataAction {
  data: TDriverManagementData[];
  previewDriver: TDriverManagementData[];
}

export type TDriverManagementPayload =
  | IDriverManagementSetLoadingAction
  | IDriverManagementSetDataAction;

export interface IDriverManagementAction {
  type: EDriverManagementAction;
  payload: TDriverManagementPayload;
}
