import driverManagementReducer, { INITIAL_STATE as DriverInitState } from '../../redux/reducers/driverManagement';
import commonReducer, { INITIAL_STATE as CommonInitState } from '../../redux/reducers/common';
import { EDriverManagementAction, IDriverManagementAction } from '../../type/driverManagement';
import { ECommonAction, ICommonAction } from '../../type/common';

describe('Driver Management Reducer', () => {
  it('DriverManagement Reducer -- INIT STATE', () => {
    expect(driverManagementReducer(undefined, {} as IDriverManagementAction)).toEqual(DriverInitState);
  });

  it('DriverManagement Reducer -- Should handle isLoading', () => {
    const action: IDriverManagementAction = {
      type: EDriverManagementAction.SET_LOADING,
      payload: { isLoading: true },
    };
    const reducerReturnVal = driverManagementReducer(DriverInitState, action);
    expect(reducerReturnVal.isLoading).toBe(true);
  });
});

describe('Common Reducer', () => {
  it('Common Reducer -- INIT STATE', () => {
    expect(commonReducer(undefined, {} as ICommonAction)).toEqual(CommonInitState);
  });

  it('Common Reducer -- should handle error', () => {
    const action: ICommonAction = {
      type: ECommonAction.SET_ERROR,
      payload: { error: { status: 500, message: 'Internal Server Error' } },
    };
    const reducerReturnVal = commonReducer(CommonInitState, action);
    expect(reducerReturnVal.error).toMatchObject(action.payload.error);
  });
});
