import { takeEvery } from "redux-saga/effects";
import { listAsync } from "./list.saga";
import { detailsAsync } from "./details.saga";
import Actions from "../actions"

export function* watchFeature() {
  yield takeEvery(Actions.FEATURE_LIST, listAsync);
  yield takeEvery(Actions.FEATURE_DETAILS, detailsAsync);
}

export default watchFeature;
