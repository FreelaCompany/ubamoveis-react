import { all, takeLatest } from "redux-saga/effects";

//produtos
import { ListTypes } from "../ducks/produtos-list";
import { list } from "./produtos";

export default function* rootSaga() {
  yield all([
    //produtos
    takeLatest(ListTypes.LIST_REQUEST, list),
  ]);
}
