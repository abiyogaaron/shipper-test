import {
  IDriverManagementState,
  IDriverManagementAction,
  IDriverManagementSetDataAction,
  IDriverManagementSetLoadingAction,
  IDriverManagementSetCurrPageAction,
  EDriverManagementAction,
  IDriverManagementSetPreviewAction,
} from '../../type/driverManagement';

const INITIAL_STATE: IDriverManagementState = {
  data: [],
  isLoading: false,
  currentPage: 0,
  previewDriver: [],
};

const driverManagementReducer = (state = INITIAL_STATE, action: IDriverManagementAction): IDriverManagementState => {
  switch (action.type) {
    case EDriverManagementAction.SET_LOADING: {
      const { isLoading } = action.payload as IDriverManagementSetLoadingAction;
      return { ...state, isLoading };
    }
    case EDriverManagementAction.SET_DATA: {
      const { data } = action.payload as IDriverManagementSetDataAction;
      return { ...state, data };
    }
    case EDriverManagementAction.SET_PREVIEW: {
      const { previewDriver } = action.payload as IDriverManagementSetPreviewAction;
      return { ...state, previewDriver };
    }
    case EDriverManagementAction.SET_CURRPAGE: {
      const { currentPage } = action.payload as IDriverManagementSetCurrPageAction;
      return { ...state, currentPage };
    }
    default:
      return state;
  }
};

export default driverManagementReducer;
