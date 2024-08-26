import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { api } from './services/api';
import data from '../../../entities/Data/model/slice/dataSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath] : api.reducer,
    data
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware)
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
