import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import BannerActions from "../ducks/banner";

export function* banner() {
  try {
    const { data } = yield call(api.get, `/banner`);
    yield put(BannerActions.bannerSuccess(data));
  } catch (err) {
    yield put(BannerActions.bannerFailure(err.response.data.error.message));
  }
}
