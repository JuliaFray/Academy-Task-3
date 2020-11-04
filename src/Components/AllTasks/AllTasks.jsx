import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { addTasksTC, checkTasksTC, deleteTasksTC, getTasksTC,updateTasksTC } from '../../Redux/taskAction';
import InputForm from '../InputForm/InputForm';
import Task from './../Task/Task';
import css from './AllTasks.module.css';


const AllTasks = () => {

    const tasks = useSelector(state => state.taskPage.tasks);
    const uid = useSelector(state => state.authPage.userUid);
    const localIsAuth = localStorage.getItem('isAuth');

    const dispatch = useDispatch();

    useEffect(() => {
        let path = window.location.href;
        path = path.split('/');
        let listId = path[path.length - 1];
        dispatch(getTasksTC(uid, listId));
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

    function useChangeIsNow(task) {
        let newIsNow = !task.isNow
        task.isNow = newIsNow;

        let path = window.location.href;
        path = path.split('/');
        let listId = path[path.length - 1];

        dispatch(updateTasksTC(uid, listId, task))
    }

    function useChangeIsDone(task) {
        // console.log(task.isDone)

        let newIsDone = !task.isDone
        task.isDone = newIsDone;

        let path = window.location.href;
        path = path.split('/');
        let listId = path[path.length - 1];

        dispatch(updateTasksTC(uid, listId, task))

    }

    const history = useHistory();
    const isAuth = useSelector(state => state.authPage.isAuth);

    if (!isAuth) {
        history.push('/')
    }

    let tasksArray = [];
    if (tasks) {
        tasksArray = Object.values(tasks);
    } else {
        tasksArray = []
    };

    const onSubmit = (data) => {
        let newTask = {
            taskText: data.taskText,
            isNow: data.isNow,
            isDone: false
        }
        let path = window.location.href;
        path = path.split('/');
        let listId = path[path.length - 1];
        dispatch(addTasksTC(uid, listId, newTask))

    }

    return (
        <div className={css.allTasksWrapper}>
            {tasksArray.length > 0
                ? <div className={css.allTasks}>
                    <div className={css.header}>
                        <h2 className={css.headerText}>Active Tasks: {tasksArray.filter(task => task.isDone === 'false').length}
                            <NavLink className={css.headerLink} to={'/taskList'}>back</NavLink> </h2>

                        <div className={css.inputForm}>
                            <InputForm onSubmit={onSubmit} />
                        </div>
                    </div>

                    <div className={css.tasks}>
                        {tasksArray.map(t => <Task task={t} changeIsNow = {useChangeIsNow} deleteTask={useDeleteTask} checkTask={useCheckTask} changeIsDone={useChangeIsDone} uid={uid} />)}
                    </div>
                </div>
                : <div className={css.allTasks}>
                    <div className={css.header}>
                        <h2 className={css.headerText}> Active Tasks: 0<NavLink className={css.headerLink} to={'/taskList'}> back </NavLink>
                        </h2>
                        <div className={css.inputForm}>
                            <InputForm onSubmit={onSubmit} />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
};

export default AllTasks;