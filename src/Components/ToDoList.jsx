import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import AllTask from './AllTasks/AllTasks';
import Header from './Header/Header';
import Lists from './Lists/Lists';
import LoginForm from './Login/LoginForm';
import css from './ToDoList.module.css';
import RegForm from './Registration/RegForm'

const ToDoList = () => {

    return (
        
            <div className={css.todo}>
                <Header />
                <Route path='/taskList/:taskId' render={() => <AllTask />} />
                <Route exact path='/taskList' render={() => <Lists />} />

                <Route exact path='/' render={() => <LoginForm /> } />

                <Route path='/registration' render={() => <RegForm /> } />
            </div>

    )
};

export default withRouter(ToDoList);
