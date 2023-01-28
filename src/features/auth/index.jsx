import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: "" };

export const authSlice = createSlice({
  name: "token",
  initialState: initialState,
  reducers: {},
});

export default authSlice.reducer;
