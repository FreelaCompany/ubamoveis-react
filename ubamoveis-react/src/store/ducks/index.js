import { combineReducers } from "redux";
import { reducer as produtosList } from "./produtos-list";

const reducers = combineReducers({
  produtosList,
});

export default reducers;
