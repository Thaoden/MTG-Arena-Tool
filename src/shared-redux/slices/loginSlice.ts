import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { LOGIN_AUTH } from "../../shared/constants";

const initialLoginState = {
  canLogin: true,
  loginForm: {
    email: "",
    pass: "",
    rememberme: false
  },
  loginState: LOGIN_AUTH
};

type Login = typeof initialLoginState;

const loginSlice = createSlice<Login, SliceCaseReducers<Login>>({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    setLoginState: (state: Login, action): void => {
      state.loginState = action.payload;
    },
    setLoginPassword: (state: Login, action): void => {
      state.loginForm.pass = action.payload;
    },
    setLoginEmail: (state: Login, action): void => {
      state.loginForm.email = action.payload;
    },
    setLoginRemember: (state: Login, action): void => {
      state.loginForm.rememberme = action.payload;
    },
    setLoginForm: (state: Login, action): void => {
      state.loginForm = action.payload;
    },
    setCanLogin: (state: Login, action): void => {
      state.canLogin = action.payload;
    }
  }
});

export default loginSlice;
