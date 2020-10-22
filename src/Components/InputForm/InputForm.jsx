import React from 'react';
import { useForm } from 'react-hook-form';
import css from './InputForm.module.css';

const InputForm = (props) => {
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = (data) => {
        let newTask = {
            taskText: data.taskText,
            priority: data.priority,
            done: 'false'
        }
        props.useNewTask(newTask);
        setValue('taskText', '')
    }

    return (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>

            <input className={css.text} name='taskText'
                ref={register} placeholder={'enter your task'} />

            <select className={css.select} name='priority' ref={register}>
                <option value='high'>high</option>
                <option value='medium'>medium</option>
                <option value='low'>low</option>
            </select>
            <input className={css.addBtn} value="ADD" type='submit'></input>
        </form>
    )
};

export default InputForm;