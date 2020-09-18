import * as firebase from "firebase/app";
import "firebase/messaging";
import { configFirebase } from "./context/Typeo";

const config: configFirebase = {
  apiKey: "AIzaSyB1sUfcWrqOK6lT9QPfGVYvp0aojzONpMs",
  authDomain: "timer-app-18620.firebaseapp.com",
  databaseURL: "https://timer-app-18620.firebaseio.com",
  projectId: "timer-app-18620",
  storageBucket: "timer-app-18620.appspot.com",
  messagingSenderId: "34658892662",
  appId: "1:34658892662:web:c1a9fc7c8ee9041d451857",
};
firebase.initializeApp(config);
export default firebase;
