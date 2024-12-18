import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../Slices/dataSlice";

export const Store= configureStore({
    reducer:{
        data:dataReducer,
    }
})