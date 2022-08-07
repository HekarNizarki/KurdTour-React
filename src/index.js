import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ResponsiveAppBar from "./components/Appbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <ResponsiveAppBar />
  </>
);
