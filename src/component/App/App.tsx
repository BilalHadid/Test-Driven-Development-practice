import React from "react";
import "./App.css";
import Timer from "../timer/Timer";
import firebase from "../../firebase";

const App = () => {
  const messaging = firebase.messaging();
  messaging
    .requestPermission()
    .then(() => {
      return messaging.getToken();
    })
    .then((token) => {
      console.log("My token is", token);
    });
  return (
    <div className="container">
      <Timer />
    </div>
  );
};
export default App;
