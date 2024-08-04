import { configureStore } from "@reduxjs/toolkit";
import LoginSliceHandler from "./Features/LoginSlice";
import FetchDataHandler from "./Features/FetchDataSlice";
import LayoutSliceHandler from "./Features/LayoutSlice";
export const store = configureStore({
  reducer: {
    loginSlice: LoginSliceHandler,
    fetchData: FetchDataHandler,
    layoutSlice: LayoutSliceHandler,
  },
});
