import React from 'react';
import css from './Task.module.css';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const Task = (props) => {

    let task = props.task;
    // console.log(task)

    if (task.isDone) {
        if (task.isNow) {
            var style = css.high
        } else if (!task.isNow) {
            var style = css.low
        }
    } else {
        var style = css.done
    }

    function changeTask(task) {
        task.isDone = 'true';
        props.checkTask(task.id, task)
    };

    const isAuth = useSelector(state => state.authPage.isAuth);
    if (!isAuth) {
        return <Redirect to = {'/login'} />
    }

    return (
        <div className={`${css.task} + ${style}`}>
            <div className={css.text}>{task.taskText}</div>

            {!task.isDone
                    ? <button onClick = {() => props.deleteTask(task.id)} className={css.deleteBtn}>Delete</button>
                    : <button onClick = {() => changeTask(props.task)} className={css.checkBtn}>Check done</button>}
        </div>
    )
};

export default Task