import { combineReducers } from "redux";
import filterReducer from "./filters/reducer";
import dataReducer from "./data/reducer";

export default combineReducers({
  filterReducer,
  dataReducer,
});
