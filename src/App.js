import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import './App.css';
import ToDoList from './Components/ToDoList';
import store from './Redux/reduxStore'

function App() {
  return (
    <HashRouter>
      <Provider store = {store}>
        <div className="App">
          <ToDoList />
        </div>
      </Provider>
    </HashRouter>

  );
}

export default App;
