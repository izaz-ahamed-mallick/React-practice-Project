import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./CartSlice";

const AppStore = configureStore({
    reducer: {
        cart: CartSliceReducer,
    },
});

export default AppStore;
