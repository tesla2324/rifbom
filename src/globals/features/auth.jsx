import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: "todo listo" };

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
});

export default authSlice.reducer;
