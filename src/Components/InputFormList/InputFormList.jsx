import React from 'react';
import { useForm } from 'react-hook-form';
import css from './InputFormList.module.css';

const InputForm = (props) => {
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = (data) => {
        let newTask = {
            taskListName: data.taskText
        }
        props.useNewTask(newTask);
        setValue('taskText', '')
    }

    return (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>

            <input className={css.text} name='taskText'
                ref={register} placeholder={'enter your task'} />
                
            <input className={css.addBtn} value="ADD" type='submit' />
        </form>
    )
};

export default InputForm;