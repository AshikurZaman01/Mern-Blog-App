import { configureStore } from '@reduxjs/toolkit';
import jobReducer from '../features/jobSlice/jobSlice';

const store = configureStore({
    reducer: {
        jobSlice: jobReducer,
    },
});

export default store;
