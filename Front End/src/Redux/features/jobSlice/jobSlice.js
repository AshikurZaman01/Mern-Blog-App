import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3000/api/v1/job";

export const getAllJobs = createAsyncThunk("jobs/getAllJobs", async ({ city, niche, searchKeywords }, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${URL}/getAllJobs`, {
            params: { city, niche, searchKeywords },
            headers: {
                'Content-Type': 'application/json'
            }, withCredentials: true
        });

        return response.data.jobs;

    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "An error occurred");
    }
});


const initialState = {
    jobs: [],
    isLoading: false,
    error: null,
    message: null,
    singleJob: {},
    myJobs: []
};

const jobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        clearAllErrors: (state) => {
            state.error = null;
        },
        resetJobslice: (state) => {
            state.isLoading = false;
            state.error = null;
            state.message = null;
            state.singleJob = {};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllJobs.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllJobs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.jobs = action.payload;
            })
            .addCase(getAllJobs.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { clearAllErrors, resetJobslice } = jobSlice.actions;
export default jobSlice.reducer;
