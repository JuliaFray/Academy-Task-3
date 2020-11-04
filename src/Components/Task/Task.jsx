import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTasksTC } from './../../Redux/taskAction';
import css from './Task.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const showErrors = yup.object().shape({
    newText: yup.string().required(),
    newText: yup.string().max('64'),
    newText: yup.string().min('1'),
})

const Task = (props) => {

    let task = props.task;

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(showErrors),
        defaultValues: {
            newText: task.taskText
        }
    })

    const [editMode, setEditMode] = useState(false);
    const [newTaskName, setNewTaskName] = useState(props.taskName);

    const dispatch = useDispatch();

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);

        
        
        
        // task.taskText = newTaskName;
        
    };

    const onTaskNameChange = ({ target: { value } }) => {
        setNewTaskName(value)
    };

    const onBlur = (data) => {
        let task = props.task;

        let path = window.location.href;
        path = path.split('/');
        let listId = path[path.length - 1];
        
        if (!newTaskName) {
            task.taskText = data.newText;
        } else {
            task.taskText = newTaskName;
        }

        dispatch(updateTasksTC(props.uid, listId, task))
        // dispatch(updateListsTC(props.uid, list))
    }

    

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
        <form onBlur = {handleSubmit(onBlur)}>
            {!editMode
                ? <div className={`${css.task} + ${style}`}>
                    <div className={css.text}>{task.taskText}</div>
                    <button className={css.checkBtn} onClick={() => activateEditMode()}>Rename</button>
                    {task.isDone === 'true'
                        ? <button onClick={() => props.deleteTask(task.id)} className={css.deleteBtn}>Delete</button>
                        : <button onClick={() => changeTask(props.task)} className={css.checkBtn}>Check done</button>
                    }
                </div>
                : <input ref = {register} name = 'newText' className={css.newName} onChange={onTaskNameChange} autoFocus={true} value={newTaskName} onBlur={deactivateEditMode} />
            }
        </form>
    )
};

export default Task