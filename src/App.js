import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import './App.css';
import ToDoList from './Components/ToDoList';
import store from './Redux/reduxStore';

const App = () => {

  return (
    <Provider store={store}>
      <div className="App">
        <HashRouter>
          <ToDoList />
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
