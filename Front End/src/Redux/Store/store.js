import { configureStore } from '@reduxjs/toolkit';
import jobSlice from '../features/jobSlice/jobSlice';

const store = configureStore({
    reducer: {
        jobSlice: jobSlice,
    },
});

export default store;
