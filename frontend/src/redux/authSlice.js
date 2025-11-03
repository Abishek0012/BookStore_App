import { createSlice } from "@reduxjs/toolkit";

const initialAuthUser = localStorage.getItem("Users")
  ? JSON.parse(localStorage.getItem("Users"))
  : null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: initialAuthUser,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload; //it updates the slice so that the app “knows” which user is logged in
      localStorage.setItem("Users", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("Users");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
