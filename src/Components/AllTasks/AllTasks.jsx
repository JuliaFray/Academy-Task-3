import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { addTasksTC, checkTasksTC, deleteTasksTC, getTasksTC } from '../../Redux/taskAction';
import InputForm from '../InputForm/InputForm';
import Task from './../Task/Task';
import css from './AllTasks.module.css';


const AllTasks = () => {

    const tasks = useSelector(state => state.taskPage.tasks);
    const isAuth = useSelector(state => state.authPage.isAuth);
    const uid = useSelector(state => state.authPage.userUid);
    const localIsAuth = localStorage.getItem('isAuth');
    // const uid = localStorage.getItem('uid')

    const dispatch = useDispatch();

    useEffect(() => {
        let path = window.location.href;
        // console.log(path)
        path = path.split('/');
        let listId = path[path.length - 1];
        // localStorage.setItem('listId', listId)
       dispatch( getTasksTC(uid, listId));
    }, []);

    function useDeleteTask(id) {
        let path = window.location.href;
        path = path.split('/');
        let listId = path[path.length - 1];
        dispatch(deleteTasksTC(uid, listId, id))
    };

    function useCheckTask(id, task) {
        dispatch(checkTasksTC(uid, id, task))
    }

    function useNewTask(task) {
        let path = window.location.href;
        path = path.split('/');
        let listId = path[path.length - 1];
        dispatch(addTasksTC(uid, listId, task))
    }

    const history = useHistory();
    

    if (localIsAuth === 'false') {
        history.push('/')
    }

    let tasksArray = [];
    if (tasks) {
        tasksArray = Object.values(tasks);
    } else {
        tasksArray = []
    };

    return (
        <div className={css.allTasksWrapper}>
            {tasksArray.length > 0
                ? <div className={css.allTasks}>
                    <div className={css.header}>
                    <h2 className={css.headerText}>Active Tasks: {tasksArray.filter(task => task.isDone === 'false').length}
                                <NavLink className={css.headerLink} to={'/taskList'}>back</NavLink> </h2>

                        <div className={css.inputForm}>
                            <InputForm useNewTask={useNewTask} />
                        </div>
                    </div>

                    <div className={css.tasks}>
                        {tasksArray.map(t => <Task task={t} deleteTask={useDeleteTask} checkTask={useCheckTask} uid = {uid}/>)}
                    </div>
                </div>
                : <div className={css.allTasks}>
                    <div className={css.header}>
                        <h2 className={css.headerText}>Active Tasks: 0<NavLink className={css.headerLink} to={'/taskList'}> back </NavLink>
                        </h2>
                        <div className={css.inputForm}>
                            <InputForm useNewTask={useNewTask} />
                        </div>
                    </div>

                </div>
            }
        </div>
    )
};

export default AllTasks;