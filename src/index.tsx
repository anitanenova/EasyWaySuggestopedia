import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createCustomStore } from "./store";
import { createHashHistory } from "history";

import { authProvider } from "./admin-panel/providers/ftirebase";

import { dataProvider } from "./admin-panel/providers/dataProvider";

import createSagaMiddleware from "redux-saga";

import { AppContext } from "./context/App";
const history = createHashHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createCustomStore({
        authProvider,
        dataProvider,
        history,
      })}
    >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
