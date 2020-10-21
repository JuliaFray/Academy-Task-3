import React from 'react';
import { addTaskTC } from './../../Redux/taskReducer';
import { useForm} from 'react-hook-form';
import { connect } from 'react-redux';
import css from './InputForm.module.css'
import { useEffect } from 'react';

const InputForm = (props) => {
    const { register, handleSubmit, getValues, setValue } = useForm();

    const onSubmit = (data) => {
        let newTask = {
            taskText : data.taskText,
            priority: data.priority,
            done: 'false'
        }
        props.useNewTask(newTask);
        setValue('taskText', '')
    }

    return (
        <form className = {css.form} onSubmit = {handleSubmit(onSubmit)}>

            <input  className = {css.text} name = 'taskText' 
                    ref = {register} placeholder = {'enter your task'} />

            <select className = {css.select} name = 'priority' ref = {register}>
                <option value = 'high'>high</option>
                <option value = 'medium'>medium</option>
                <option value = 'low'>low</option>
            </select>
            <input className = {css.btn} type = 'submit' />
        </form>
    )
};

export default InputForm;