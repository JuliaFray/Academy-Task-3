import React from 'react';
import { useForm } from 'react-hook-form';
import css from './InputForm.module.css';

const InputForm = (props) => {
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = (data) => {
        let newTask = {
            taskText: data.taskText,
            isNow: data.isNow,
            done: 'false'
        }
        props.useNewTask(newTask);
        setValue('taskText', '')
    }

    return (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>

            <input className={css.text} name='taskText'
                ref={register} placeholder={'enter your task'} />

            <label for = 'isNow'>Срочность</label>
            <input name = 'isNow' ref = {register} id = 'isNow' type = 'checkbox' />
            
            <input className={css.addBtn} value="ADD" type='submit'></input>
        </form>
    )
};

export default InputForm;