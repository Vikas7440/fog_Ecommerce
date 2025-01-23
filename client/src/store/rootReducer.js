import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import filterReducer from "./filterSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  filters: filterReducer,
  // Add more reducers here if needed
});

export default rootReducer;
