import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Theme from "./Styles/Theme.js";
import { ThemeProvider } from "styled-components";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
