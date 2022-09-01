import React from "react";
import ReactDOM from "react-dom/client";
import { General } from "./General/General";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <General />
  </React.StrictMode>
);
