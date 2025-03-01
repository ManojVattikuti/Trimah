import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch jobs
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async (_, { rejectWithValue }) => {
  try {
    const cachedJobs = localStorage.getItem("jobData");

    if (cachedJobs) {
      return JSON.parse(cachedJobs); // Return cached data immediately
    }

    const response = await axios.get("http://localhost:8000/api/admin/getJobs");
    localStorage.setItem("jobData", JSON.stringify(response.data.data)); // Cache data
    return response.data.data;
  } catch (error) {
    return rejectWithValue("Failed to load jobs. Please try again later.");
  }
});

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobData: [],
    loading: false,
    error: null,
  },
  reducers: {}, // No manual reducers needed

  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobData = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default jobSlice.reducer;
