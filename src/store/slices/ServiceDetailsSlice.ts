import { ServicesOption } from '@/interfaces/servicesSelect';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ServiceDetailsState {
  companyName: string;
  selectedTeamSize: string;
  selectedBusinessDirection: ServicesOption;
}

const initialState: ServiceDetailsState = {
  companyName: '',
  selectedTeamSize: '',
  selectedBusinessDirection: { value: '', label: '' },
};

const serviceDetailsSlice = createSlice({
  name: 'serviceDetails',
  initialState,
  reducers: {
    setCompanyName: (state, action: PayloadAction<string>) => {
      state.companyName = action.payload;
    },
    setSelectedTeamSize: (state, action: PayloadAction<string>) => {
      state.selectedTeamSize = action.payload;
    },
    setSelectedBusinessDirection: (
      state,
      action: PayloadAction<ServicesOption>
    ) => {
      state.selectedBusinessDirection = action.payload;
    },
  },
});

export const {
  setCompanyName,
  setSelectedTeamSize,
  setSelectedBusinessDirection,
} = serviceDetailsSlice.actions;

export default serviceDetailsSlice.reducer;
