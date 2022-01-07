import React from 'react';
import style from './Header.module.css';

const Header = (props) => {
    return <header className={style.header}>
        <img src={props.logo} />
        <div className={style.webName}>Nuf-Nuf Web</div>
    </header>
}

export default Header;