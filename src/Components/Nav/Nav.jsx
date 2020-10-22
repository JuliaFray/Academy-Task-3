import React from 'react';
import css from './Nav.module.css';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className = {css.links} >
            <NavLink className = {css.navLink} to = '/AllTasks' >AllTasks</NavLink>
            <NavLink className = {css.navLink} to = '/AllLists' >AllLists</NavLink>
        </div>
    )
};

export default NavBar;