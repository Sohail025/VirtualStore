import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: 0,
};
const LoginSlice = createSlice({
  name: "Account",
  initialState,
  reducers: {
    LoginStatusChanger: (state, action) => {
      state.status = action.payload;
    },
  },
});
export const { LoginStatusChanger } = LoginSlice.actions;
export default LoginSlice.reducer;
