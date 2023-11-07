import { configureStore } from "@reduxjs/toolkit";
import CarReducer from "../features/car/CarSlice";


export const Store = configureStore({
    reducer: {
        car: CarReducer,
    },
});