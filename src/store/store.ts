import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { createRootReducer } from "./Reducers";

import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { adminSaga, USER_LOGOUT } from "react-admin";

export const createCustomStore = ({ authProvider, dataProvider, history }) => {
  const reducer = createRootReducer({
    history: history,
  });

  const resettableAppReducer = (state, action) =>
    reducer(action.type !== USER_LOGOUT ? state : undefined, action);

  const saga = function* rootSaga() {
    yield all([adminSaga(dataProvider, authProvider)].map(fork));
  };
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    (process.env.NODE_ENV === "development" &&
      typeof window !== "undefined" &&
      window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] &&
      window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({
        trace: true,
        traceLimit: 25,
      })) ||
    compose;

  const store = createStore(
    resettableAppReducer,
    {
      /* set your initial state here */
    },
    composeEnhancers(
      applyMiddleware(sagaMiddleware, routerMiddleware(history), thunk)
    )
  );

  sagaMiddleware.run(saga);
  return store;
};
