import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import socialSlice from "./features/socialSlice";
import personalizedSlice from "./features/personalizedSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    social: socialSlice,
    personalized: personalizedSlice,
  },
});

store.subscribe(() => console.log(store.getState()));
