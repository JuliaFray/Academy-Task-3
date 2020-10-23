import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBwbpTx7d1a0DUP2jHqAaKkZhl7sjW6QPA",
  authDomain: "todolist-3009f.firebaseapp.com",
  databaseURL: "https://todolist-3009f.firebaseio.com",
  projectId: "todolist-3009f",
  storageBucket: "todolist-3009f.appspot.com",
  messagingSenderId: "907810208879",
  appId: "1:907810208879:web:6d6bd6059a7bb44c3ce19a"
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
