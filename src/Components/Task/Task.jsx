import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTasksTC } from './../../Redux/taskAction';
import css from './Task.module.css';

const Task = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [newTaskName, setNewTaskName] = useState(props.taskName);

    const dispatch = useDispatch();

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);

        let path = window.location.href;
        path = path.split('/');
        let listId = path[path.length - 1];
        
        let task = props.task
        task.taskText = newTaskName;
        dispatch(updateTasksTC(props.uid, listId, task))
    };

    const onTaskNameChange = ({ target: { value } }) => {
        setNewTaskName(value)
    }

    let task = props.task;

    if (task.isDone === 'false') {
        if (task.isNow) {
            var style = css.high
        } else if (!task.isNow) {
            var style = css.low
        }
    } else {
        var style = css.done
    }

    function changeTask(task) {
        let path = window.location.href;
        path = path.split('/');
        let listId = path[path.length - 1];
        task.isDone = 'true';
        props.checkTask(listId, task)
    };

    return (
        <div>
            {!editMode
                ? <div className={`${css.task} + ${style}`}>
                    <div className={css.text}>{task.taskText}</div>
                    <button className={css.checkBtn} onClick={() => activateEditMode()}>Rename</button>
                    {task.isDone === 'true'
                        ? <button onClick={() => props.deleteTask(task.id)} className={css.deleteBtn}>Delete</button>
                        : <button onClick={() => changeTask(props.task)} className={css.checkBtn}>Check done</button>
                    }
                </div>
                : <input className={css.newName} onChange={onTaskNameChange} autoFocus={true} value={newTaskName} onBlur={deactivateEditMode} />
            }
        </div>
    )
};

export default Task