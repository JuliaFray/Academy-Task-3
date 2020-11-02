import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import React from 'react';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import './App.css';
import store from './Redux/reduxStore';
import Header from './Components/Header/Header';
import AllTask from './Components/AllTasks/AllTasks';
import Lists from './Components/Lists/Lists';
import LoginForm from './Components/Login/LoginForm';
import RegForm from './Components/Registration/RegForm';
import css from './Components/ToDoList.module.css'

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

const ToDoList = () => {
  return (
    <div className = {css.todo}>
      <Header />
      <Route path='/taskList/:taskId' render={() => <AllTask />} />
      <Route exact path='/taskList' render={() => <Lists />} />
      <Route exact path='/' render={() => <LoginForm />} />
      <Route path='/registration' render={() => <RegForm />} />
    </div>
  )
}

const ToDoListWithRouter = withRouter(ToDoList);

const App = () => {

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider firebase={firebase} config={firebaseConfig} dispatch={store.dispatch}>
        <div className="App">
          <HashRouter>
            <ToDoListWithRouter />
          </HashRouter>
        </div>
      </ReactReduxFirebaseProvider>

    </Provider>
  );
}

export default App;
