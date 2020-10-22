import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTasksTC, checkTasksTC, deleteTasksTC, getTasksTC } from '../../Redux/taskReducer';
import InputForm from '../InputForm/InputForm';
import Task from './../Task/Task';
import css from './AllTasks.module.css';


const AllTasks = () => {

    const tasks = useSelector(state => state.taskPage.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasksTC());
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

    return (
        <div className={css.allTasks} >
            <div className={css.header}>
                <h2 >Active Tasks: {tasks.filter(task => task.done === 'false').length} </h2>
            </div>
            <div className = {css.inputForm}>
                <InputForm useNewTask={useNewTask} />
            </div>
            <div className = {css.tasks}>
                {tasks.map(t => <Task
                    task={t}
                    deleteTask={useDeleteTask}
                    checkTask={useCheckTask}
                />)}
            </div>


        </div>
    )
};

export default AllTasks;