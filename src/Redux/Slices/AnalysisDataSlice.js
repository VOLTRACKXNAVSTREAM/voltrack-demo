// src/Redux/Slices/AnalysisDataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching analysis data
export const fetchAnalysisData = createAsyncThunk(
  'analysisData/fetchData',
  async ({ timePeriod }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/analysis-data`, {
        params: { 
          timePeriod,
          deviceUid: 'voltrack20241019' 
        }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const analysisDataSlice = createSlice({
  name: 'analysisData',
  initialState: {
    data: null,
    loading: false,
    error: null,
    timePeriod: '1month' // Default time period
  },
  reducers: {
    setTimePeriod: (state, action) => {
      state.timePeriod = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnalysisData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnalysisData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAnalysisData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setTimePeriod } = analysisDataSlice.actions;
export default analysisDataSlice.reducer;