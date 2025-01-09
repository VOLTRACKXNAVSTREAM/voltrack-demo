// File: /Users/sujeevgyawali/Desktop/voltrack-client/src/Redux/Store/store.js
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../Slices/dataSlice";
import authReducer from "../Slices/authSlice";
import analysisDataReducer from "../Slices/AnalysisDataSlice";
import deviceReducer from "../Slices/deviceSlice";

export const Store = configureStore({
    reducer: {
        data: dataReducer,
        auth: authReducer,
        analysisData: analysisDataReducer,
        device: deviceReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
          serializableCheck: {
            // Ignore these action types
            ignoredActions: ['device/setSelectedDevice'],
            // Ignore these field paths in all actions
            ignoredActionPaths: ['payload'],
          }
        })
});