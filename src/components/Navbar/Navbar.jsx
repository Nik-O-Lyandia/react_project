import React from 'react';
import style from './Navbar.module.css';


const Navbar = () => {
    return <nav className={style.nav}>
        <div className={style.item}>
            <a>Main page</a>
        </div>
        <div className={style.item}>
            <a>Profile</a>
        </div>
        <div className={`${style.item} ${style.active}`}>
            <a>Friends</a>
        </div>
        <div className={style.item}>
            <a>Chats</a>
        </div>
    </nav>
}

export default Navbar;