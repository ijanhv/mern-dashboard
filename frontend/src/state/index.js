 import { createSlice } from "@reduxjs/toolkit";
 
 const initialState = {
    mode: "dark",
    userId: "63701cc1f03239b7f700000e"
};

export const global = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
});

export const { setMode } = global.actions;
export default global.reducer;