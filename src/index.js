import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import "./assets/styles/style.scss";
import AuthProvider from "./hooks/useAuthContext";
import LoginProvider from "./hooks/useLoginContext";
import SidebarProvider from "./hooks/useSidebarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <SidebarProvider>
      <LoginProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LoginProvider>
    </SidebarProvider>
  </Router>
);
