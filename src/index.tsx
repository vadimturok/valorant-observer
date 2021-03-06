import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import Layout from "./components/Layout/Layout";
import {HashRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </HashRouter>
);
