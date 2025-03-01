import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice"; // Import job slice

const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});

export default store;
