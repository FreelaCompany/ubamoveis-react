import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import TrabalheConoscoActions from "../ducks/trabalhe-conosco";

export function* trabalheConosco(action) {
  try {
    const { data: post } = action;
    const { data } = yield call(api.post, "/curriculos", post);
    yield put(TrabalheConoscoActions.trabalheConoscoSuccess(data));
  } catch (err) {
    yield put(TrabalheConoscoActions.trabalheConoscoFailure(err));
  }
}
