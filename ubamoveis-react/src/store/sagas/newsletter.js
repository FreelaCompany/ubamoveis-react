import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import NewsActions from "../ducks/newsletter";

export function* news(action) {
  try {
    const { data: post } = action;
    const { data } = yield call(api.post, "/newsletter", post);
    yield put(NewsActions.newsSuccess(data));
  } catch (err) {
    yield put(NewsActions.newsFailure(err));
  }
}
