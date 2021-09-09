import { put, call } from "redux-saga/effects";
import { list as listService } from "../../domain/services";
import Actions from "../actions";
import * as strings from "../../constants/strings";

export function* listAsync(action) {
  yield put({ type: Actions.FEATURE_LIST_REQUEST });

  try {
    const response = yield call(listService, action.payload);

    yield response
      .map((x) => x)
      .fold(
        (result) =>
          put({ type: Actions.FEATURE_LIST_SUCCESS, payload: result.data }),
        (result) =>
          put({ type: Actions.FEATURE_LIST_FAILURE, payload: result.data })
      );
  } catch (err) {
    yield put({
      type: Actions.FEATURE_LIST_FAILURE,
      payload: strings.ERROR_DEFAULT,
    });
  }
}
