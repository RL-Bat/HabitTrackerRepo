import { combineReducers } from "redux";
import habitsReducer from "./habitsReducers";

const reducers = combineReducers({
  habits: habitsReducer
})

export default reducers;