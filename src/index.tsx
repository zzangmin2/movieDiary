// src/index.tsx

import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";

const root: HTMLElement | null = document.getElementById("root");

if (root) {
  const rootElement = createRoot(root);

  rootElement.render(
    <React.StrictMode>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </React.StrictMode>
  );
}
