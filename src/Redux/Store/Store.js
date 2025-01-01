// File: /Users/sujeevgyawali/Desktop/voltrack-client/src/Redux/Store/store.js
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../Slices/dataSlice";
import authReducer from "../Slices/authSlice";

export const Store = configureStore({
    reducer: {
        data: dataReducer,
        auth: authReducer,
    }
});