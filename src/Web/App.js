import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './config/store';
import RouteConfig from './config/route';

const App = () => {
  return (
    <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouteConfig />
      </PersistGate>
    </Provider>
  </React.StrictMode>
  );
};

export default App;
