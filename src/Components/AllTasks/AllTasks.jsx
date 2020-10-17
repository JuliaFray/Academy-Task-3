import React from 'react';
import Task from './../Task/Task';
import css from './AllTasks.module.css'
import InputForm from '../InputForm/InputForm';


const AllTasks = (props) => {
    return (
        <div className = {css.allTasks} >
            <InputForm />
            <Task />
        </div>
    )
};

export default AllTasks;