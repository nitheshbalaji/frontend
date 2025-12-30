import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { ComplaintProvider } from "./context/ComplaintContext";
import "./styles.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <ComplaintProvider>
          <App />
        </ComplaintProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
