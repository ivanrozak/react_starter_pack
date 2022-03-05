import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducers';

const persistConfig = {
  key: 'auth-persist',
  storage,
  whitelist:['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

const Persistor = persistStore(store)

export { Persistor };
export default store;