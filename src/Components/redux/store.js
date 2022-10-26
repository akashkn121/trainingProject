import { legacy_createStore as createStore, combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducer/login";

const rootReducer = combineReducers({
  loginReducer: loginReducer,
});

const store = createStore(rootReducer);

export default store;
