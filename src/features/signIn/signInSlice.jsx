import { createSlice } from "@reduxjs/toolkit";

export const signInSlice = createSlice({
    name: 'signIn',
    initialState: {
        isLogin: false,
        idToken: null
    },
    reducers: {
        signInRequest: state => {
            state.isLogin = true;
        }
    }
})

export const { signInRequest } = signInSlice.actions;


export default signInSlice.reducer;