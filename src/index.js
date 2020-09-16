import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";

import App from "./App";

import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyCkA9OektEfh3BieddvMfy9MU5adpdshw8",
  authDomain: "gc-manage-b2659.firebaseapp.com",
  databaseURL: "https://gc-manage-b2659.firebaseio.com",
  projectId: "gc-manage-b2659",
  storageBucket: "gc-manage-b2659.appspot.com",
  messagingSenderId: "970930725089",
  appId: "1:970930725089:web:7052e1dea14372dfee97a0",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
