import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./store";
// Style
import "./index.css";
//Pages

import App from "./App";

// Accessing root element by id
const rootElement = document.getElementById("root");
// Creating root element
const root = createRoot(rootElement);

// Rendering root
root.render(
  // Adding Strictmode
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
