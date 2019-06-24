import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  	apiKey: "AIzaSyBair7Ls8dzAbEJfKZMqg7Q_U8vgtgc73E",
    authDomain: "catchy-cb843.firebaseapp.com",
    databaseURL: "https://catchy-cb843.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
