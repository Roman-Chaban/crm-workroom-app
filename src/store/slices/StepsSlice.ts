import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  currentStep: number;
}

const initialState: InitialState = {
  currentStep:
    typeof window !== 'undefined' && localStorage.getItem('currentStep')
      ? parseInt(localStorage.getItem('currentStep') || '1', 5)
      : 1,
};

export const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    handleNextStep: (state) => {
      state.currentStep = Math.min(state.currentStep + 1, 4);
      if (typeof window !== 'undefined') {
        localStorage.setItem('currentStep', String(state.currentStep));
      }
    },
    handlePrevStep: (state) => {
      state.currentStep = Math.max(state.currentStep - 1, 1);
      if (typeof window !== 'undefined') {
        localStorage.setItem('currentStep', String(state.currentStep));
      }
    },
    handleSetStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('currentStep', String(state.currentStep));
      }
    },
  },
});

export const { handleNextStep, handlePrevStep, handleSetStep } =
  stepsSlice.actions;

export default stepsSlice.reducer;
