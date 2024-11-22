import { createSlice } from '@reduxjs/toolkit';

import { InitialState, RegistrationUserData } from '@/types/reg';

export const initialState: InitialState = {
  user: null as RegistrationUserData | null,
  status: 'idle',
  error: null as string | null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
