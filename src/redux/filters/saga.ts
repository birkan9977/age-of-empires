import { all, call, fork, takeEvery } from "redux-saga/effects";
import { CHANGE_AGE_FILTER, CHANGE_COST_FILTER } from "../action-types";
import { FilterAction } from "../../types/general-types";
import getData from "../../services/service"
import filterData from "../../services/filter-data"

function* fetchData(action:FilterAction) {
  yield console.log("GEN PAYLOAD UPDATED for FETCH", action);
  //simulate an api call with delay in milliseconds
  const delay = 1000
  const loadedData = yield call(getData,delay)
  //yield console.log(loadedData)
  yield console.log('loaded in ' + delay + ' ms')
  //yield console.log(loadedData[loadedData.length-1])
  const filteredData = yield call(filterData,loadedData,action.payload)
  yield console.log(filteredData)

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
