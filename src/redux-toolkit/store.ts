import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";
import { placesSlice } from "./slices/placesSlice";
import postsReduces from "./slices/postsSlice";
import counterReducer from "./slices/counterSlice";


export const store = configureStore({
    reducer: {
        user: userSlice,
        posts: postsReduces,
        counter: counterReducer,
    }
});