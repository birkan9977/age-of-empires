import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export function configureStore() {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga, null);
  return store;
}
