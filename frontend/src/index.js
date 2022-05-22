import React from "react";
import { BrowserRouter } from "react-router-dom";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
