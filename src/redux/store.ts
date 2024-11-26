import { configureStore } from '@reduxjs/toolkit';
import regionStoreSlice from './slices/regionSlice';

export const store = configureStore({
  reducer: {
    region: regionStoreSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
