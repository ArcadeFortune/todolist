import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./App";

import { TaskProvider } from "./taskManager";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
);