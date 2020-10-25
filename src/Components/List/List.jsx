import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './List.module.css';

const List = (props) => {
    // console.log(props)

    return (
        <div className={`${css.list}`}>
            <NavLink className={`${css.link}`} to={`/taskList/${props.list.id}`} >
                <div className={css.text}>{props.list.taskListName}</div>
            </NavLink>
            <div className={css.btns}>
                <button className={css.update} onClick={() => props.updateList(props.list)} className={css.deleteBtn}>Update</button>
                <button className={css.delete} onClick={() => props.deleteList(props.list.id)} className={css.deleteBtn}>Delete</button>
            </div>
        </div>
    )
};

export default List