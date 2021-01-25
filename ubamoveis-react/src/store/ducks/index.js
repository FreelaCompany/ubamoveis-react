import { combineReducers } from "redux";
import { reducer as produtosList } from "./produtos-list";
import { reducer as newsletter } from "./newsletter";
import { reducer as trabalheConosco } from "./trabalhe-conosco";
import { reducer as banner } from "./banner";

const reducers = combineReducers({
  produtosList,
  newsletter,
  trabalheConosco,
  banner,
});

export default reducers;
