import React from "react";
import ReactDOM from "react-dom/client";
import STUDENTS from './data/data.json'
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App STUDENTS={STUDENTS}/>
  </React.StrictMode>
);
