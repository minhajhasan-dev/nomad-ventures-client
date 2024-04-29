import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import "./index.css";
import Routes from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={Routes} />
    </AuthContextProvider>
  </React.StrictMode>
);
