import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { updateListsTC } from './../../Redux/listAction';
import css from './List.module.css';

const showErrors = yup.object().shape({
    newText: yup.string().required(),
    newText: yup.string().max('64'),
    newText: yup.string().min('1'),
})

const List = (props) => {
    
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(showErrors),
        defaultValues: {
            newText: props.list.taskListName
        }
    })

    const taskName = useSelector(state => state.listPage.lists.taskListName)
    const [editMode, setEditMode] = useState(false);
    const [newTaskName, setNewTaskName] = useState(taskName);

    const dispatch = useDispatch();

    const onBlur = (data) => {
        let list = props.list;
        
        if (!newTaskName) {
            list.taskListName = data.newText;
        } else {
            list.taskListName = newTaskName;
        }
        dispatch(updateListsTC(props.uid, list))
    }

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
    };

    const onTaskNameChange = ({ target: { value } }) => {
        setNewTaskName(value)
    }


    return (
        <form onBlur = {handleSubmit(onBlur)}>
            {!editMode
                ? <div className={`${css.list}`}>
                    <NavLink className={`${css.link}`} to={`/taskList/${props.list.id}`} >
                        <div className={css.text}>{props.list.taskListName}</div>
                    </NavLink>
                    <div className={css.btns}>
                        <button className={css.updateBtn} onClick={() => activateEditMode(props.list.taskListName)}>Rename</button>
                        <button className={css.deleteBtn} onClick={() => props.deleteList(props.list.id)}>Delete</button>
                    </div>
                </div>
                :
                <input ref={register} name='newText' className={css.newName} onChange={onTaskNameChange} autoFocus={true} value={newTaskName} onBlur={deactivateEditMode} type='text' />

            }
        </form>
    )
};

export default List