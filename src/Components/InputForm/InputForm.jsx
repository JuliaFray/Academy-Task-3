import React from 'react';
import { useForm } from 'react-hook-form';
import css from './InputForm.module.css';

const InputForm = (props) => {
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = (data) => {
        let newTask = {
            taskText: data.taskText,
            isNow: data.isNow,
            isDone: 'false'
        }
        props.useNewTask(newTask);
        setValue('taskText', '')
    }

    return (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>

            <input className={css.text} name='taskText'
                ref={register} placeholder={'Enter your task'} />
            <div className = {css.isNow}>
                <label for='isNow'>Срочность</label>
                <input name='isNow' ref={register} id='isNow' type='checkbox' />
            </div>

            <input className={css.addBtn} type='submit' value='ADD' />

        </form>
    )
};

export default InputForm;