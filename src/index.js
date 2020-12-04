import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './config/webStore';
import RouteConfig from './config/route';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouteConfig />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
