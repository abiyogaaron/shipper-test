import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import driverManagementReducer from './reducers/driverManagement';
import commonReducer from './reducers/common';

import { IDriverManagementAction } from '../type/driverManagement';
import { ICommonAction } from '../type/common';

const rootReducer = combineReducers({
  driverManagement: driverManagementReducer,
  common: commonReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppAction =
 | IDriverManagementAction
 | ICommonAction;

let composeEnhancer = compose;
if (process.env.NODE_ENV !== 'production') {
  composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const middleware = composeEnhancer(
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>),
);

export default createStore(rootReducer, middleware);
