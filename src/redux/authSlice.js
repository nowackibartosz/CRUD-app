import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authToken: "",
  },
  reducers: {
    login: (state, action) => {
      console.log(action);
      state.authToken = action.payload;
    },
    logout: (state) => {
      state.authToken = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;