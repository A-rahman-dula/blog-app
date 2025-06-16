// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, type PersistConfig } from 'redux-persist';

// Import your slices (example, actual slices will come later)
import authReducer from '../features/auth/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  // add other slices like posts, comments, etc. later
});

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'root',
  storage,
  whitelist: ['auth'], // only persist auth slice for now
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
