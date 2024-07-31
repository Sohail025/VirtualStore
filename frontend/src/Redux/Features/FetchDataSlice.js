import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const PostData = createAsyncThunk(
  "dataPosting",
  async (userdata, thunkAPI) => {
    try {
      const res = fetch("http://localhost:3000/createUser", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });
      if (!res.ok) {
        const error = await res.json();
        return thunkAPI.rejectWithValue(error);
      }
      return await res.json();
    } catch (error) {
      thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);
const FetchData = createSlice({
  name: "FetchData",
  initialState: { data: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder.addCase(PostData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(PostData.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.data.push(action.payload);
    });
    builder.addCase(PostData.rejected, (state) => {
      state.loading = false;
      state.error = null;
    });
  },
});
export default FetchData.reducer;
