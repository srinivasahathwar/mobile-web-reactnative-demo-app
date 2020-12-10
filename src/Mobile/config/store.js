import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';
import rootReducer from '../reducers';
//import apiMiddleware from '../api/apiMiddleware';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};
const middlewares = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export {store, persistor};
