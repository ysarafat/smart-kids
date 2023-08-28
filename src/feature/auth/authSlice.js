import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    success: undefined,
    message: undefined,
    access_token: undefined,
    data: undefined,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userSignin: (state, action) => {
            state.success = action.payload.success;
            state.message = action.payload.message;
            state.data = action.payload.data;
            state.access_token = action.payload.access_token;
        },
        userSignOut: (state) => {
            state.success = undefined;
            state.message = undefined;
            state.access_token = undefined;
            state.data = undefined;
        },
    },
});

export const { userSignOut, userSignin } = authSlice.actions;
export default authSlice.reducer;
