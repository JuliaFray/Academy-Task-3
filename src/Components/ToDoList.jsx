import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import AllTask from './AllTasks/AllTasks';
import Lists from './Lists/Lists';
import NavBar from './Nav/Nav';
import css from './ToDoList.module.css';

const ToDoList = () => {
    return (
        
            <div className={css.todo}>
                <h1>ToDoList</h1>
                <NavBar />
                <Route path='/allTasks' render={() => <AllTask />} />
                <Route path='/allLists' render={() => <Lists />} />

            </div>

    )
};

export default ToDoList;