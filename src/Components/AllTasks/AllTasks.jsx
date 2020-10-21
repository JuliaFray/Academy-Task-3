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
            <h2>Active Tasks: {tasks.filter(task => task.done == 'false').length} </h2>
            <InputForm useNewTask = {useNewTask}  />
            {tasks.map(t => <Task
                task={t}
                deleteTask={useDeleteTask}
                checkTask={useCheckTask}
            />)}
        </div>
    )
};

export default AllTasks;