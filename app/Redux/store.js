"use client";
import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./Features/coins/coinSlice";

export const store = configureStore({
    reducer: {
        coin: coinReducer,
    },
});

export default store;
