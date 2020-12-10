import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './config/store';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Root} from 'native-base';
import RouteConfig from './config/route';
import {SafeAreaView} from 'react-native';

const App: () => React$Node = () => {
  return (
    <Root>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <RouteConfig />
            </PersistGate>
          </Provider>
        </SafeAreaView>
      </SafeAreaProvider>
    </Root>
  );
};

export default App;
