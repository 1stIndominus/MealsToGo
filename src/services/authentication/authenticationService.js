import * as firebase from "firebase/app";
// import { initializeApp } from "firebase/app";

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
