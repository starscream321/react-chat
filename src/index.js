import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"


firebase.initializeApp({
    apiKey: "AIzaSyBGw-LLv4gRUEkygw5tw0xd6MYVCJUFTEM",
    authDomain: "chatvue-11996.firebaseapp.com",
    databaseURL: "https://chatvue-11996-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatvue-11996",
    storageBucket: "chatvue-11996.appspot.com",
    messagingSenderId: "27756453903",
    appId: "1:27756453903:web:65d0ac199feb8beb5bc37a"
});


export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value = {{
        firebase,
        firestore,
        auth
    }}>
        <App />
    </Context.Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
