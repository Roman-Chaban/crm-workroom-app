import { combineReducers } from '@reduxjs/toolkit';

import stepsSlice from '../slices/StepsSlice';
import serviceDetailsSlice from '../slices/ServiceDetailsSlice';
import serviceSelectionSlice from '../slices/ServiceSelectionSlice';

export const rootReducer = combineReducers({
  steps: stepsSlice,
  serviceDetails: serviceDetailsSlice,
  serviceSelection: serviceSelectionSlice,
});
