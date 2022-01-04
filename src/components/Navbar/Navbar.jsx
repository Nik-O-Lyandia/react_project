import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from "react-router-dom";


const Navbar = (props) => {
    return <nav className={style.nav}>
        <div className={style.item}>
            <NavLink to='/' activeClassName={style.activeLink}>Main page</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/friends' activeClassName={style.activeLink}>Friends</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/chats' activeClassName={style.activeLink}>Chats</NavLink>
        </div>
    </nav>
}

export default Navbar;