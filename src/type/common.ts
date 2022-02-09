export interface IError {
  status: number;
  message: string;
}

export interface ICommonState {
  error: IError;
}

export enum ECommonAction {
  SET_ERROR = 'SET_ERROR',
}

export interface ICommonSetErrorAction {
  error: IError;
}

export type TCommonPayload =
  | ICommonSetErrorAction;

export interface ICommonAction {
  type: ECommonAction;
  payload: TCommonPayload;
}
