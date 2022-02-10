import {
  ICommonAction,
  ICommonSetErrorAction,
  ICommonState,
  ECommonAction,
} from '../../type/common';

export const INITIAL_STATE: ICommonState = {
  error: {
    status: -1,
    message: '',
  },
};

const commonReducer = (state = INITIAL_STATE, action: ICommonAction): ICommonState => {
  switch (action.type) {
    case ECommonAction.SET_ERROR: {
      const { error } = action.payload as ICommonSetErrorAction;
      return { ...state, error };
    }
    default:
      return state;
  }
};

export default commonReducer;
