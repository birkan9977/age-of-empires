import { all, call, fork, takeEvery, select, put } from "redux-saga/effects";
import { ROW_ID } from "../action-types";
import refineUnitDetail from "../../data/unit-detail";
import { setUnitDetail } from "../data/actions";
import { getDataState } from "../selectors";

function* updateUnitDetail(action) {
  const id = action.payload;
  const dataState = yield select(getDataState);
  const selectedRow = yield dataState.find((item) => item.id === id);
  const refinedTable = yield call(refineUnitDetail, selectedRow);
  yield put(setUnitDetail(refinedTable));
}

export function* watchChangeRowId(): any {
  yield takeEvery(ROW_ID, updateUnitDetail);
}

function* dataSaga(): any {
  yield all([fork(watchChangeRowId)]);
}

export default dataSaga;
