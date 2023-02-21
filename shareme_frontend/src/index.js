import React from "react";
import ReactDOM from "react-dom"; //what is react-dom
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
//^ here we are hooking the app  with the real project id 'root'
