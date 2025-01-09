import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedDevice: null,
  shouldRefreshData: false,
  isDataLoading: false  // Add this new state
};

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    safeSetSelectedDevice: (state, action) => {
      state.selectedDevice = action.payload;
      state.shouldRefreshData = true;
      state.isDataLoading = true;  // Set loading to true when device changes
    },
    resetRefreshFlag: (state) => {
      state.shouldRefreshData = false;
      state.isDataLoading = false;  // Reset loading when data is received
    },
    setDataLoading: (state, action) => {
      state.isDataLoading = action.payload;
    }
  }
});

export const { 
  safeSetSelectedDevice, 
  resetRefreshFlag, 
  setDataLoading 
} = deviceSlice.actions;

export default deviceSlice.reducer;