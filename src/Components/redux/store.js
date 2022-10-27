import { legacy_createStore as createStore, combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducer/login";
import departmentReducer from "./reducer/deparment";

const rootReducer = combineReducers({
  loginReducer: loginReducer,
  departmentReducer: departmentReducer,
});

const store = createStore(rootReducer);

export default store;
