import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import AppStore from "./store";
import AuthWrapper from "./auth/auth-wrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={AppStore.store}>
      <AuthWrapper>
        <App />
      </AuthWrapper>
    </Provider>
  </React.StrictMode>
);
