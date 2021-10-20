import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import packages
import { BrowserRouter as Router } from "react-router-dom";

// tailwind css import
import "./global.css";

// import context
import { ResultContextProvider } from "./contexts/ResultContextProvider";

ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>,
  document.getElementById("root")
);
