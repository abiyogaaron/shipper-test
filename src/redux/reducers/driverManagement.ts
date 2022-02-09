import {
  IDriverManagementState,
  IDriverManagementAction,
  IDriverManagementSetDataAction,
  IDriverManagementSetLoadingAction,
  EDriverManagementAction,
} from '../../type/driverManagement';

const INITIAL_STATE: IDriverManagementState = {
  data: [],
  isLoading: false,
  currentPage: 1,
  previewDriver: [],
};

const driverManagementReducer = (state = INITIAL_STATE, action: IDriverManagementAction): IDriverManagementState => {
  switch (action.type) {
    case EDriverManagementAction.SET_LOADING: {
      const { isLoading } = action.payload as IDriverManagementSetLoadingAction;
      return { ...state, isLoading };
    }
    case EDriverManagementAction.SET_DATA: {
      const { data, previewDriver } = action.payload as IDriverManagementSetDataAction;
      return { ...state, data, previewDriver };
    }
    default:
      return state;
  }
};

export default driverManagementReducer;
