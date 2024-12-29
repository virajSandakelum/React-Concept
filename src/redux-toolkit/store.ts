import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";
import { placesSlice } from "./slices/placesSlice";
import postsReduces from "../features/posts/postsSlice";


export const store = configureStore({
    reducer: {
        user: userSlice,
        posts: postsReduces,
    }
});