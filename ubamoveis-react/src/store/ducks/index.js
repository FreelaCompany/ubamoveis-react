import { combineReducers } from "redux";
import { reducer as produtosList } from "./produtos-list";
import { reducer as newsletter } from "./newsletter";
import { reducer as trabalheConosco } from "./trabalhe-conosco";

const reducers = combineReducers({
  produtosList,
  newsletter,
  trabalheConosco,
});

export default reducers;
