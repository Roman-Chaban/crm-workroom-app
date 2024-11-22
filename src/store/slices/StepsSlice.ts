import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  currentStep: number;
}

const initialState: InitialState = {
  currentStep: 1,
};

export const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    handleNextStep: (state) => {
      state.currentStep = Math.min(state.currentStep + 1, 4);
    },
    handlePrevStep: (state) => {
      state.currentStep = Math.max(state.currentStep - 1, 1);
    },
    handleSetStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
  },
});

export const { handleNextStep, handlePrevStep, handleSetStep } =
  stepsSlice.actions;

export default stepsSlice.reducer;
