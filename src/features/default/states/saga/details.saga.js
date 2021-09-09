import { put, call } from "redux-saga/effects";
import { details as detailsService } from "../../domain/services";
import Actions from "../actions";
import * as strings from "../../constants/strings";

export function* detailsAsync(action) {
  yield put({ type: Actions.FEATURE_DETAILS_REQUEST });

  try {
    const id = action.payload.id;
    const response = yield call(detailsService, id);

    yield response
      .map((x) => x)
      .fold(
        (result) =>
          put({ type: Actions.FEATURE_DETAILS_SUCCESS, payload: result.data }),
        (result) =>
          put({ type: Actions.FEATURE_DETAILS_FAILURE, payload: result.data })
      );
  } catch (err) {
    yield put({
      type: Actions.FEATURE_DETAILS_FAILURE,
      payload: strings.ERROR_DEFAULT,
    });
  }
}
