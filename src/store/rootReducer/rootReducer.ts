import { combineReducers } from '@reduxjs/toolkit';

import stepsSlice from '../slices/StepsSlice';

export const rootReducer = combineReducers({
  steps: stepsSlice,
});
