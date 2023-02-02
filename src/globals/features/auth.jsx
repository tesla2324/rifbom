import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: "" };

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    editToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export default authSlice.reducer;
