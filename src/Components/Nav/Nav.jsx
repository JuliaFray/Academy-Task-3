import React from 'react';
import css from './Nav.module.css'


const NavBar = (props) => {
    return (
        <div className = {css.links} >
            <a className = {css.navLink} href = '/AllTasks' >AllTasks</a>
            <a className = {css.navLink} href = '/AllCollections' >AllCollections</a>
        </div>
    )
};

export default NavBar;