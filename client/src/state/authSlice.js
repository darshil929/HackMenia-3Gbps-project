import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api/index.js";

const initialState = {
  user: null,
  token: null,
  role: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
    setLogout: (state, action) => {
      state.user = null;
      state.token = null;
      state.role = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export const logIn = (formData) => async (dispatch) => {
  try {
    const { data } = await api.logIn(formData);
    console.log(data)
    dispatch(setLogin(data));
  } catch (error) {
    console.log("Something went wrong");
  }
};

export const logOut = () => async (dispatch) => {
  try {
    dispatch(setLogout());
  } catch (error) {
    console.log("Something went wrong");
  }
};

export default authSlice.reducer;
