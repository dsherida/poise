import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAAH82uDeXtWdLJe5OjCgcthKXIn5WhFWU",
  authDomain: "poise-firebase.firebaseapp.com",
  databaseURL: "https://poise-firebase.firebaseio.com",
  storageBucket: "poise-firebase.appspot.com"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
