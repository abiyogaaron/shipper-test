import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import driverManagementReducer from './reducers/driverManagement';
import commonReducer from './reducers/common';

import { IDriverManagementAction } from '../type/driverManagement';
import { ICommonAction } from '../type/common';

const rootReducer = combineReducers({
  driverManagement: driverManagementReducer,
  common: commonReducer,
});

let composeEnhancer = compose;
if (process.env.NODE_ENV !== 'production') {
  composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const middleware = composeEnhancer(
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>),
);

const persistConfig = {
  key: 'driverManagement',
  storage,
  whitelist: ['driverManagement'],
};
const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);

export type AppState = ReturnType<typeof rootReducer>;
export type AppAction =
 | IDriverManagementAction
 | ICommonAction;

export { persistor };
export default store;
