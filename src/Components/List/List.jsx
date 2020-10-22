import React from 'react';
import { useDispatch } from 'react-redux';
import { checkTasksTC, deleteTasksTC } from './../../Redux/taskReducer';
import Task from './../Task/Task';
import css from './List.module.css';

const List = (props) => {

    const dispatch = useDispatch();

    function useDeleteTask(id) {
        dispatch(deleteTasksTC(id))
    };

    function useCheckTask(id, task) {
        dispatch(checkTasksTC(id, task))
    }

    return (
        <div className={`${css.list}`}>
            <div className={css.text}>{props.list.taskListName}</div>
            <div>
                {props.list.task.map(t => <Task
                    task={t}
                    deleteTask={useDeleteTask}
                    checkTask={useCheckTask}
                />)}
            </div>
        </div>
    )
};

export default List