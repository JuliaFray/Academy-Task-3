import React from 'react';
import css from './Task.module.css'

const Task = (props) => {

    if (props.task.done == 'false') {
        if (props.task.priority == 'high') {
            var style = css.high
        } else if (props.task.priority == 'medium') {
            var style = css.medium
        } else {
            var style = css.low
        }
    } else {
        var style = css.done
    }

    

    function changeTask(task) {
        task.done = 'true';
        props.checkTask(props.task.id, props.task)
    }

    return (
        <div className={`${css.task} + ${style}`}>
            <div className={css.text}>{props.task.taskText}</div>

            {props.task.done == 'true'
                    ? <button onClick = {() => props.deleteTask(props.task.id)} className={css.deleteBtn}>Delete</button>
                    : <button onClick = {() => changeTask(props.task)} className={css.checkBtn}>Check done</button>}
        </div>
    )
};

export default Task