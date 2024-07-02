import {createSlice} from '@reduxjs/toolkit';
import {supabaseClient} from '../supabaseClient';
// import type {RootState} from './store';

interface User {
  id: string | null;
  aud: string | null;
  role: string | null;
  email: string | null;
}

const initialState: User = {
  id: null,
  aud: null,
  role: null,
  email: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // add reducer functions here
    // assignUser: async (state: User): Promise<> => {
    //   try {
    //     const {data, error} = await supabaseClient.auth.getUser();
    //     state.id = data.user?.id;
    //     state.aud = data.user?.aud;
    //     state.role = data.user?.role;
    //     state.email = data.user?.email;
    //   } catch (error) {
    //     console.log('Error Fetching User:', error);
    //   }
    // },
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = userSlice.actions;
export default userSlice.reducer;
export type {User};
