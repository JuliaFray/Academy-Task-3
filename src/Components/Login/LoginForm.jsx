import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import * as yup from 'yup';
import { loginTC } from './../../Redux/authReducer';
import css from './LoginForm.module.css';

const showErrors = yup.object().shape({
    login: yup.string().required(),
    password: yup.string().required(),
})

const LoginForm = () => {

    const isAuth = useSelector(state => state.authPage.isAuth);
    // console.log(isAuth)
    

    const dispatch = useDispatch();

    const { register, handleSubmit, setValue, errors } = useForm({
        resolver: yupResolver(showErrors)
    });

    const onSubmit = (data) => {
        dispatch(loginTC(data.login, data.password, data.rememberme));
        setValue('login', '');
        setValue('password', '')
    }

    if (isAuth) {
        return <Redirect to = {'/taskList'} />
    }

    return (
        <form className={css.form} onSubmit={handleSubmit(onSubmit)} >
            <p>login : mail@mail.mail</p>
            <p>password : password</p>
            <input name='login' ref={register} className={css.text} type='text' placeholder='Enter login' />
            <p>{errors.login?.message}</p>
            <input name='password' ref={register} className={css.text} type='password' placeholder='Enter password' />
            <p>{errors.password?.message}</p>

            <div className={css.checkbox}>
                <label for='rememberme'>Remember me</label>
                <input name='rememberme' ref={register} className={css.check}
                    type='checkbox' id='rememberme' />
            </div>

            <input className={css.btn} type='submit' value='Login' />
        </form>
    )
}

export default LoginForm;