import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ServiceSelectionState {
  usagePurpose: string;
  personBestDescriptor: string;
}

const initialState: ServiceSelectionState = {
  usagePurpose: '',
  personBestDescriptor: '',
};

const serviceSelectionSlice = createSlice({
  name: 'serviceSelection',
  initialState,
  reducers: {
    setUsagePurpose: (state, action: PayloadAction<string>) => {
      state.usagePurpose = action.payload;
    },
    setPersonDescriptor: (state, action: PayloadAction<string>) => {
      state.personBestDescriptor = action.payload;
    },
  },
});

export const { setUsagePurpose, setPersonDescriptor } =
  serviceSelectionSlice.actions;

export default serviceSelectionSlice.reducer;
