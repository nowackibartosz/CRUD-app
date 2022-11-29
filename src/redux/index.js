import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";
import moneyReducer from "./moneySlice";
import selectedOrderReducer from "./orderSlice";


const reducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  money: moneyReducer,
  selectedOrder: selectedOrderReducer,
});
export const store = configureStore({ reducer });