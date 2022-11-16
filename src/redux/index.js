import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";
const reducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});
export const store = configureStore({ reducer });