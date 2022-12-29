import { createSlice } from "@reduxjs/toolkit";

const tourSlice = createSlice({
  name: "tour",
  initialState: { tours: null },
  reducers: {
    addTours: (state, action) => {
      // state.push(action.payload);
      // state.tours = action.payload;
      return { ...state.tours, ...action.payload };
    },
  },
});

export const { addTours } = tourSlice.actions;
export const tourReducer = tourSlice.reducer;

export const selectAllTours = (state) => state.tours;
export const selectTour = (state, id) =>
  state?.tours?.data?.data?.find((tour) => tour.slug === id);
