import React from 'react';
import css from './Task.module.css'

const Task = (props) => {
    return (
        <div className={css.task}>
            <div className = {css.state} >
                <div className={css.status}>status</div>
                <div className={css.collection}>collection</div>
            </div>

            <span>TaskName</span>
            <div className={css.control} >
                <div className={css.deleteBtn} >DeleteTask</div>
                <div className={css.collectionBtn} >AddToCollection</div>
            </div>

        </div>
    )
};

export default Task