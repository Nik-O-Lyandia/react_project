import React from 'react';
import style from './Header.module.css';

const Header = (props) => {
    return <header className={style.header}>
        <img src={props.logo} />
    </header>
}

export default Header;