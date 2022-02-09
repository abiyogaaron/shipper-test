import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store, { persistor } from './redux';
import 'semantic-ui-css/semantic.min.css';
import PageLoader from './components/PageLoader';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={<PageLoader />} persistor={persistor}>
        <Route component={App} />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
