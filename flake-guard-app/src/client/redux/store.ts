import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import fgSlice from './fgSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    fg: fgSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
