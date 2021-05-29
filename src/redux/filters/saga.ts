import { all, fork, takeEvery } from "redux-saga/effects";
import { CHANGE_AGE_FILTER, CHANGE_COST_FILTER } from "../action-types";

function* fetchData(payload) {
  yield console.log("GEN PAYLOAD UPDATED for FETCH", payload);
}

export function* watchChangeAge(): any {
  yield takeEvery(CHANGE_AGE_FILTER, fetchData);
}

export function* watchChangeCost(): any {
  yield takeEvery(CHANGE_COST_FILTER, fetchData);
}

function* filtersSaga(): any {
  yield all([fork(watchChangeAge), fork(watchChangeCost)]);
}

export default filtersSaga;
