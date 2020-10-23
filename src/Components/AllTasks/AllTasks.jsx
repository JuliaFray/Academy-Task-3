import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import { addTasksTC, checkTasksTC, deleteTasksTC, getTasksTC } from '../../Redux/taskReducer';
import InputForm from '../InputForm/InputForm';
import Task from './../Task/Task';
import css from './AllTasks.module.css';


const AllTasks = () => {

    const tasks = useSelector(state => state.taskPage.tasks);
    const isAuth = useSelector(state => state.authPage.isAuth);

    const dispatch = useDispatch();

    useEffect(() => {
        let path = window.location.href;
        path = path.split('/');
        let listId = path[path.length - 1];
        dispatch(getTasksTC(listId));
    }, []);

    function useDeleteTask(id) {
        dispatch(deleteTasksTC(id))
    };

    function useCheckTask(id, task) {
        dispatch(checkTasksTC(id, task))
    }

    function useNewTask(task) {
        dispatch(addTasksTC(task))
    }

    if (!isAuth) {
        return <Redirect to={'/login'} />
    }

    return (
        <div className={css.allTasks} >
            <div className={css.header}>
                {tasks
                    ? <h2 className={css.headerText}>Active Tasks: {tasks.filter(task => !task.isDone).length}
                        <NavLink className={css.headerLink} to={'/taskList'}>back</NavLink> </h2>
                    : <h2 className={css.headerText}>Подзадач нет<NavLink className={css.headerLink} to={'/taskList'}> back </NavLink></h2>

                }

            </div>
            <div className={css.inputForm}>
                <InputForm useNewTask={useNewTask} />
            </div>
            <div className={css.tasks}>
                {tasks
                    ? tasks.map(t => <Task task={t} deleteTask={useDeleteTask} checkTask={useCheckTask} />)
                    : <p></p>}
            </div>


        </div>
    )
};

export default AllTasks;