import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";
import { ApiUrlProviderWrapper } from "./context/api.context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApiUrlProviderWrapper>
        <AuthProviderWrapper>
          <App />
        </AuthProviderWrapper>
      </ApiUrlProviderWrapper>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
