import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutTC } from '../../Redux/authAction';
import css from './Header.module.css';
import { useSelector } from 'react-redux';

const Header = () => {

    const localIsAuth = localStorage.getItem('isAuth');
    const isAuth = useSelector(state => state.authPage.isAuth);
    const login = localStorage.getItem('login')

    const dispatch = useDispatch();

    const onLogOutClick = () => {
        dispatch(logoutTC())
    }

    return (
        <div className={css.header}>
            <div className={css.headerText}>
                <h1>ToDoList</h1>
            </div>
            <div className={css.logoutBlock}>
                {isAuth || localIsAuth === "true"
                    ? <div className={css.logout}>
                        <p className={css.logoutText}>
                            {login}
                        </p>
                        <div>
                            <button className={css.logoutBtn} onClick={() => onLogOutClick()} >LogOut</button>
                        </div>

                    </div>
                    : <p></p>
                }
            </div>
        </div>
    )
};

export default Header;