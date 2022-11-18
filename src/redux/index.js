import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";
import moneyReducer from "./moneySlice";;
const reducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  money: moneyReducer,
});
export const store = configureStore({ reducer });