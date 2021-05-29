import { all } from "redux-saga/effects";
import filtersSaga from "./filters/saga";

export default function* rootSaga(getState) {
  yield all([filtersSaga()]);
}
