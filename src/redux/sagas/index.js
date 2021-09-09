import { all } from "redux-saga/effects";
import { watchFeature as watchTodo } from "../../features/default/states/saga";

export default function* rootSaga() {
  yield all([watchTodo()]);
}
