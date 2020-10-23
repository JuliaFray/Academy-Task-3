import React from 'react';
import { Route } from 'react-router-dom';
import AllTask from './AllTasks/AllTasks';
import Lists from './Lists/Lists';
import NavBar from './Nav/Nav';
import css from './ToDoList.module.css';
import { withRouter } from 'react-router-dom';
import LoginForm from './Login/LoginForm'
import Header from './Header/Header';

const ToDoList = () => {

    return (
        
            <div className={css.todo}>
                <Header />
                <h1>ToDoList</h1>
                {/* <NavBar /> */}
                <Route path='/taskList/:taskId' render={() => <AllTask />} />
                <Route exact path='/taskList' render={() => <Lists />} />

                <Route path='/login' render={() => <LoginForm /> } />
            </div>

    )
};

export default withRouter(ToDoList);
