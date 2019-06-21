import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCRmA-vTxn_YH3AwIjIm8yl4Dbwm_5t21w",
    authDomain: "catch-of-the-day-ab-41334.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-ab-41334.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
