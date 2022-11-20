import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false },
    reducers: {
        Login(state) {
            state.isLoggedIn = window.localStorage.setItem("isLoggedIn", true);
            state.isLoggedIn = true;
        },
        Logout(state) {
            state.isLoggedIn = false;
            state.isLoggedIn = window.localStorage.removeItem("isLoggedIn");
            window.localStorage.removeItem("userData");
        }
    }
});
export const authActions = authSlice.actions;
export default authSlice;
