import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { updateListsTC } from './../../Redux/listAction';
import css from './List.module.css';

const List = (props) => {
    // console.log(props)

    const taskName = useSelector(state => state.listPage.lists.taskListName)
    const [editMode, setEditMode] = useState(false);
    const [newTaskName, setNewTaskName] = useState(taskName);
    

    const dispatch = useDispatch();

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        let list = props.list
        list.taskListName = newTaskName;
        dispatch(updateListsTC(props.uid, list))
    };

    const onTaskNameChange = ({ target: { value } }) => {
        setNewTaskName(value)
    }


    return (
        <div>
            {!editMode
                ? <div  className={`${css.list}`}>
                    <NavLink className={`${css.link}`} to={`/taskList/${props.list.id}`} >
                        <div className={css.text}>{props.list.taskListName}</div>
                    </NavLink>
                    <div className={css.btns}>
                        <button className={css.updateBtn} onClick={() => activateEditMode()}>Rename</button>
                        <button className={css.deleteBtn} onClick={() => props.deleteList(props.list.id)}>Delete</button>
                    </div>
                </div>
                : <input className = {css.newName} onChange={onTaskNameChange} autoFocus={true} value={newTaskName} onBlur={deactivateEditMode} />
            }

        </div>
    )
};

export default List