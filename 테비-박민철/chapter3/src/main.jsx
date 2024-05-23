import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToggleProvider } from "./utils/contexts/toggleContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToggleProvider>
        <App />
      </ToggleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
