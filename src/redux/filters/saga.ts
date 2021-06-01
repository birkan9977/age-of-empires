import { all, call, fork, takeEvery, select, put } from "redux-saga/effects";
import { CHANGE_AGE_FILTER, CHANGE_COST_FILTER } from "../action-types";
import getData from "../../services/service";
import filterData from "../../services/filter-data";
import { getFiltersState } from "../selectors";
import { updateData } from "../data/actions";

export function* fetchData(action) {
  //simulate an api call with delay in milliseconds if preferred: default '0'
  const delay = 0;
  const loadedData = yield call(getData, delay);
  const currentFiltersState = yield select(getFiltersState);
  const filteredData = yield call(filterData, loadedData, currentFiltersState);
  yield put(updateData(filteredData));
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
