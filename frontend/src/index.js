import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./App";
import { TaskProvider } from "./taskManager";

const root = ReactDOM.createRoot(document.getElementById("root"));
localStorage.setItem("localStorage", true);
if (localStorage.getItem("list") === "" || localStorage.getItem("list") === null) localStorage.setItem("list", JSON.stringify([]));



root.render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
);
