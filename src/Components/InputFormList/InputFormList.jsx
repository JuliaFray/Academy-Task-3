import React from 'react';
import { useForm } from 'react-hook-form';
import css from './InputFormList.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const showErrors = yup.object().shape({
    taskText: yup.string().required(),
    taskText: yup.string().max('64'),
    taskText: yup.string().min('1'),
})

const InputForm = (props) => {
    const { register, handleSubmit, setValue, errors } = useForm({
        resolver: yupResolver(showErrors)
    });

    const onSubmit = (data) => {
        let newTask = {
            taskListName: data.taskText
        }
        props.useNewTask(newTask);
        setValue('taskText', '')
    }

    // console.log(errors.taskText?.message)

    return (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>

            <input className={css.text} name='taskText'
                ref={register} placeholder={'Enter your task'} />
            {errors.taskText?.message
                ? <p>{errors.taskText?.message}</p>
                : <input className={css.addBtn} value="ADD" type='submit' />}


        </form>
    )
};

export default InputForm;