import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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

const _setLoginState = (state: Login, action: PayloadAction<number>): void => {
  state.loginState = action.payload;
};

const _setLoginPassword = (
  state: Login,
  action: PayloadAction<string>
): void => {
  state.loginForm.pass = action.payload;
};

const _setLoginEmail = (state: Login, action: PayloadAction<string>): void => {
  state.loginForm.email = action.payload;
};

const _setLoginRemember = (
  state: Login,
  action: PayloadAction<boolean>
): void => {
  state.loginForm.rememberme = action.payload;
};

const _setLoginForm = (
  state: Login,
  action: PayloadAction<Login["loginForm"]>
): void => {
  state.loginForm = action.payload;
};

const _setCanLogin = (state: Login, action: PayloadAction<boolean>): void => {
  state.canLogin = action.payload;
};

type SetCanLoginArg = {
  type: "SET_CAN_LOGIN";
  arg: Parameters<typeof _setCanLogin>[1]["payload"];
};

type SetLoginEmailArg = {
  type: "SET_LOGIN_EMAIL";
  arg: Parameters<typeof _setLoginEmail>[1]["payload"];
};

type SetLoginFormArg = {
  type: "SET_LOGIN_FORM";
  arg: Parameters<typeof _setLoginForm>[1]["payload"];
};

type SetLoginPasswordArg = {
  type: "SET_LOGIN_PASSWORD";
  arg: Parameters<typeof _setLoginPassword>[1]["payload"];
};

type SetLoginRememberArg = {
  type: "SET_LOGIN_REMEMBER";
  arg: Parameters<typeof _setLoginRemember>[1]["payload"];
};

type SetLoginStateArg = {
  type: "SET_LOGIN_STATE";
  arg: Parameters<typeof _setLoginState>[1]["payload"];
};

export type LoginReducerArgs =
  | SetCanLoginArg
  | SetLoginEmailArg
  | SetLoginFormArg
  | SetLoginPasswordArg
  | SetLoginRememberArg
  | SetLoginStateArg;

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    setLoginState: _setLoginState,
    setLoginPassword: _setLoginPassword,
    setLoginEmail: _setLoginEmail,
    setLoginRemember: _setLoginRemember,
    setLoginForm: _setLoginForm,
    setCanLogin: _setCanLogin
  }
});

export const {
  setCanLogin,
  setLoginEmail,
  setLoginForm,
  setLoginPassword,
  setLoginRemember,
  setLoginState
} = loginSlice.actions;

export default loginSlice;
