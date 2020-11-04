import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTasksTC } from './../../Redux/taskAction';
import css from './Task.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const showErrors = yup.object().shape({
    newText: yup.string().required().min('1').max('10'),
})

const Task = (props) => {
    

    let task = props.task;
    // console.log(task)

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
        debugger
        dispatch(updateTasksTC(props.uid, listId, task))
        // dispatch(updateListsTC(props.uid, list))
    }



    if (!task.isDone) {
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
                    <div className={`${css.text}`}>{task.taskText}</div>
                    {task.isDone === 'true'
                        ? <div className={css.btns}>
                            <button className={css.checkBtn} onClick={() => activateEditMode()}>Rename</button>

                            <button className={css.changeBtn} onClick={() => props.changeIsDone(task)}>Check Undone</button>

                            <button onClick={() => props.deleteTask(task.id)} className={css.deleteBtn}>Delete</button>
                        </div>

                        : <div className={css.btns}>
                            <button className={css.checkBtn} onClick={() => activateEditMode()}>Rename</button>

                            <button className={css.changeBtn} onClick={() => props.changeIsNow(task)}>Change Priority</button>

                            <button onClick={() => changeTask(props.task)} className={css.checkBtn}>Check done</button>
                        </div>
                    }
                </div>
                : <form onBlur={handleSubmit(onBlur)}>
                    <input ref={register} name='newText' className={css.newName} onChange={onTaskNameChange} autoFocus={true} value={newTaskName} onBlur={deactivateEditMode} />
                </form>
            }
        </div>
    )
};

export default Task