import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutTC } from '../../Redux/authReducer';
import css from './Header.module.css';

const Header = () => {

    const isAuth = useSelector(state => state.authPage.isAuth);
    const login = useSelector(state => state.authPage.login);

    const dispatch = useDispatch();

    return (
        <div className = {css.header}>
            {isAuth
            ? <div className = {css.logout}>{login}<button onClick = {() => dispatch(logoutTC())} >LogOut</button> </div>
            : <div className = {css.login}><NavLink to = {'/login'}>LogIn</NavLink></div>
            }
        </div>
    )
};

export default Header;