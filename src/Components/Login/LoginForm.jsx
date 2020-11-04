import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { loginTC } from './../../Redux/authAction';
import css from './LoginForm.module.css';

const showErrors = yup.object().shape({
    login: yup.string().required().email().max('20'),
    password: yup.string().required().min('6').max('20'),
})

const LoginForm = () => {

    const localIsAuth = localStorage.getItem('isAuth')

    const dispatch = useDispatch();

    const { register, handleSubmit, setValue, errors } = useForm({
        resolver: yupResolver(showErrors)
    });

    const onSubmit = (data) => {
        dispatch(loginTC(data.login, data.password, data.rememberme));
        setValue('login', '');
        setValue('password', '')
    }

    if (localIsAuth === 'true') {
        return <Redirect to={`/taskList`} />
    }

    return (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)} >
            <div className={css.formWrapper}>
                <h2>Login</h2>
                <input name='login' ref={register} className={css.text} type='text' placeholder='Enter login' />
                <p>{errors.login?.message}</p>
                <input name='password' ref={register} className={css.text} type='password' placeholder='Enter password' />
                <p>{errors.password?.message}</p>

                <input className={css.btn} type='submit' value='Login' />

                <div className={css.linkWrapper}>
                <NavLink className={css.link} to={'/registration'} >Create account?</NavLink>
            </div>
            </div>


            
        </form>
    )
}

export default LoginForm;