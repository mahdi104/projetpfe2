import { combineReducers } from "redux";
import productReducer from "../Reducer/productReducer";
import userReducer from "./user";
import adminReducer from "./admin";
import cartReducer from "./Cart"

const rootReducer = combineReducers({
  productReducer,
  userReducer,
  adminReducer,
  cartReducer,
});

export default rootReducer;