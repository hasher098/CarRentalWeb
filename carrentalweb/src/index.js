import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import mainPage from "./components/mainPage/MainPage";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import * as serviceWorker from "./serviceWorker";
import MainPage from "./components/mainPage/MainPage";
import { Provider as ReduxProvider } from "react-redux";

ReactDOM.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
  <React.StrictMode>
  <MainPage/>
  </React.StrictMode>
  </PersistGate>
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
