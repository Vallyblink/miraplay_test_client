import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import authSlice from './authSlice';
import authAPI from 'services/api_auth/api_auth';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(authPersistConfig, authSlice);


export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    })
      .concat([authAPI.middleware])
   
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);