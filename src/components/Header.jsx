import React from 'react';
import style from './Header.module.css';
import logo from '../imgs/flat_pink_logo.png';

const Header = () => {
    return <header className={style.header}>
        <img src={logo} />
    </header>
}

export default Header;