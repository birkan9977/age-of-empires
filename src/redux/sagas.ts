import { all } from "redux-saga/effects";
import filtersSaga from "./filters/saga";
import dataSaga from "./data/saga";

export default function* rootSaga() {
  yield all([filtersSaga(), dataSaga()]);
}
