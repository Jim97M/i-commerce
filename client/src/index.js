import "core-js/stable";
import "regenerator-runtime/runtime";
require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {store, persistor} from './redux/store.js';
import { Provider } from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

const appElement = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider> , appElement);
