import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutTC } from '../../Redux/authReducer';
import css from './Header.module.css';

const Header = () => {

    const isAuth = useSelector(state => state.authPage.isAuth);
    const login = useSelector(state => state.authPage.login);

    const dispatch = useDispatch();

    return (
        <div className={css.header}>
            <div className={css.headerText}>
                <h1>ToDoList</h1>
            </div>
            <div className={css.logoutBlock}>
                {isAuth
                    ? <div className={css.logout}>
                        <p className={css.logoutText}>
                            {login}
                        </p>
                        <div>
                            <button className={css.logoutBtn} onClick={() => dispatch(logoutTC())} >LogOut</button>
                        </div>

                    </div>
                    : <p></p>
                }
            </div>
        </div>
    )
};

export default Header;