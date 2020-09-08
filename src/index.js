import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

const ReactApp = process.env.NODE_ENV === "development" ? hot(App) : App;
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ReactApp />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
