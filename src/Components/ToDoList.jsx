import React  from 'react';
import AllTask from './AllTasks/AllTasks'
import NavBar from './Nav/Nav';
import css from './ToDoList.module.css'


const ToDoList = () => {
    return (
        <div className = {css.todo}>
            <h1>ToDoList</h1>
            <NavBar />
            <AllTask />
        </div>
    )
};

export default ToDoList;