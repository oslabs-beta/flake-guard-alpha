import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from './store';

interface User {
  username: string | null;
};

const initialState: User = {
  username: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // add reducer functions here
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
export type {User};
