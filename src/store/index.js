import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { authReducer } from "./authSlice";
import { tourReducer } from "./tours/tourSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tours: tourReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
