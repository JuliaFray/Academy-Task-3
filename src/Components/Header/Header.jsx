import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutTC } from '../../Redux/authReducer';

const Header = () => {

    const isAuth = useSelector(state => state.authPage.isAuth);
    // const isAuth = 'true'

    const dispatch = useDispatch();

    return (
        <div>
            {isAuth
            ? <div><button onClick = {() => dispatch(logoutTC())} >LogOut</button> </div>
            : <NavLink to = {'/login'}>LogIn</NavLink>
            }
        </div>
    )
};

export default Header;