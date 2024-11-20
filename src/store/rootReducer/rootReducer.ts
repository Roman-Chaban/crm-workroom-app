import { combineReducers } from '@reduxjs/toolkit';

import AuthSlice from '../slices/AuthSlice';

export const rootReducer = combineReducers({
  auth: AuthSlice,
});
