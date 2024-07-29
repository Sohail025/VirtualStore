import { configureStore } from "@reduxjs/toolkit";
import LoginSliceHandler from "./Features/LoginSlice";
export const store = configureStore({
  reducer: {
    loginSlice: LoginSliceHandler,
  },
});
