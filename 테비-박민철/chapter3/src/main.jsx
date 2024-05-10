import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToggleProvider } from "./utils/contexts/ToggleContext.jsx";
import { LoginProvider } from "./utils/contexts/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToggleProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </ToggleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
