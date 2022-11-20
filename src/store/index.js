import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Auth-slice";
import cartSlice from "./Cart-slice";
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer
    }
});
export default store;