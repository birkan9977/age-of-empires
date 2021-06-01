import { all } from "redux-saga/effects";
import filtersSaga from "./filters/saga";
import dataSaga from "./data/saga";

export default function* rootSaga(getState) {
  yield all([filtersSaga(), dataSaga()]);
}
