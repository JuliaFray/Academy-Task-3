import React from 'react';
import { useForm } from 'react-hook-form';
import css from './InputForm.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const showErrors = yup.object().shape({
    taskText: yup.string().required().max('20').min('1'),
})

const InputForm = (props) => {
    const { register, handleSubmit, setValue, errors } = useForm({
        resolver: yupResolver(showErrors)
    });

    const onSubmit = (data) => {
        props.onSubmit(data)
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

            {errors.taskText?.message
                ? <p>{errors.taskText?.message}</p>
                : <input className={css.addBtn} value="ADD" type='submit' />}

            {/* <input className={css.addBtn} type='submit' value='ADD' /> */}

        </form>
    )
};

export default InputForm;