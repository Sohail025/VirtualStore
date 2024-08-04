import { createSlice } from "@reduxjs/toolkit";
import { fakeData } from "../Variables/FakeData";

const initialState = {
  MobileBarStatus: false,
  fakeData,
};
const LayoutSlice = createSlice({
  name: "Account",
  initialState,
  reducers: {
    MobileBarStatusHandler: (state) => {
      state.MobileBarStatus = !state.MobileBarStatus;
    },
  },
});
export const { MobileBarStatusHandler } = LayoutSlice.actions;
export default LayoutSlice.reducer;
