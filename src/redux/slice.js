import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operation';

const handlePenging = state => {
  state.isLoader = true;
};
const handleRejected = (state, action) => {
  state.isLoader = false;
  state.error = action.payload;
};
const initialState = {
  items: [],
  isLoader: false,
  error: null,
};
const campersSlice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePenging)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        (state.isLoader = false),
          (state.error = null),
          (state.items = action.payload);
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});
const campersReducer = campersSlice.reducer;
export default campersReducer;
