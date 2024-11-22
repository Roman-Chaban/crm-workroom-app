import { combineReducers } from '@reduxjs/toolkit';

import authSlice from '../slices/AuthSlice';
import stepsSlice from '../slices/StepsSlice';

export const rootReducer = combineReducers({
  auth: authSlice,
  steps: stepsSlice,
});
