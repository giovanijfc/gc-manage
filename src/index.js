import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";

import App from "./App";

import "./index.css";

import firebaseConfig from "constants/firebaseConfig";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
