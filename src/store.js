import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import themeSlice from "./slices/themeSlice";


export const store = configureStore({
    reducer: {
        theme: themeSlice
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(

        ),
});
setupListeners(store.dispatch);
