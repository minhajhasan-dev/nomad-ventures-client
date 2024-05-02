import { DarkModeProvider } from "@rbnd/react-dark-mode";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";
import AuthContextProvider from "./context/AuthContextProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <AuthContextProvider>
        <RouterProvider router={Routes} />
      </AuthContextProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
