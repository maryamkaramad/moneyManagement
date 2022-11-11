import { configureStore } from "@reduxjs/toolkit";
import MonysSlice from './slice/MonysSlice';

export const store = configureStore({
    reducer: {
        mony: MonysSlice
    }
})