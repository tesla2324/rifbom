import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: "" };

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
});

export default authSlice.reducer;
