import React from "react";
import { BrowserRouter } from "react-router-dom";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Style
import "./index.css";
//Pages

import App from "./App";

//Vitals
import reportWebVitals from "./reportWebVitals";

// Accessing root element by id
const rootElement = document.getElementById("root");
// Creating root element
const root = createRoot(rootElement);

// Rendering root
root.render(
  // Adding Strictmode
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
