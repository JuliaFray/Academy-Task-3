import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { regTC } from '../../Redux/authAction';
import css from './RegForm.module.css';

const showErrors = yup.object().shape({
    login: yup.string().required().email().max('20'),
    password: yup.string().required().min('6').max('20'),
})

const LoginForm = () => {

    const isAuth = useSelector(state => state.authPage.isAuth);

    const dispatch = useDispatch();

    const { register, handleSubmit, setValue, errors } = useForm({
        resolver: yupResolver(showErrors)
    });

    const onSubmit = (data) => {
        dispatch(regTC(data.login, data.password));
    }

    const localIsAuth = localStorage.getItem('isAuth')

    if (isAuth || localIsAuth === 'true') {
        debugger
        return <Redirect to={`/taskList`} />
    }

    return (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)} >
            <div className={css.formWrapper}>
                <h2>Create account</h2>
                <input name='login' ref={register} className={css.text} type='text' placeholder='Enter login' />
                <p>{errors.login?.message}</p>
                <input name='password' ref={register} className={css.text} type='password' placeholder='Enter password' />
                <p>{errors.password?.message}</p>

                <input className={css.btn} type='submit' value='Create account' />

                <div className={css.linkWrapper}>
                    <NavLink className={css.link} to={'/'} >Login?</NavLink>
                </div>
            </div>

        </form>
    )
}

export default LoginForm;