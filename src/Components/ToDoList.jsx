import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import AllTask from './AllTasks/AllTasks';
import Header from './Header/Header';
import Lists from './Lists/Lists';
import LoginForm from './Login/LoginForm';
import css from './ToDoList.module.css';

const ToDoList = () => {

    return (
        
            <div className={css.todo}>
                <Header />
                <h1>ToDoList</h1>
                <Route path='/taskList/:taskId' render={() => <AllTask />} />
                <Route exact path='/taskList' render={() => <Lists />} />

                <Route path='/login' render={() => <LoginForm /> } />
            </div>

    )
};

export default withRouter(ToDoList);
