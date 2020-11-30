import { all, takeLatest } from "redux-saga/effects";

//produtos
import { ListTypes } from "../ducks/produtos-list";
import { list } from "./produtos";

//newsletter
import { NewsTypes } from "../ducks/newsletter";
import { news } from "./newsletter";

//trabalhe-conosco
import { TrabalheConoscoTypes } from "../ducks/trabalhe-conosco";
import { trabalheConosco } from "./trabalhe-conosco";

export default function* rootSaga() {
  yield all([
    //produtos
    takeLatest(ListTypes.LIST_REQUEST, list),

    //newsletter
    takeLatest(NewsTypes.NEWS_REQUEST, news),

    //trabalhe-conosco
    takeLatest(TrabalheConoscoTypes.TRABALHE_CONOSCO_REQUEST, trabalheConosco),
  ]);
}
