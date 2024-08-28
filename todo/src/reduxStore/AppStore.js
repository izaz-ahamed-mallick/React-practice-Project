import { configureStore } from "@reduxjs/toolkit";
import TodoSliceReducer from "./TodoSlice";

const AppStore = configureStore({
    reducer: {
        todo: TodoSliceReducer,
    },
});

export default AppStore;
