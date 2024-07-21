import { tokenToCSSVar } from "@chakra-ui/react";
import { createSlice } from "@reduxjs/toolkit";

const userData = JSON.parse(localStorage.getItem("user"));
const initialState = { user: userData?.user, token: userData?.token };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state, action) {
      state.user = null;
      state.token = null;
    },
  },
});
export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
