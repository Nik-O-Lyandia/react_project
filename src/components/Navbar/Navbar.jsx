import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/" className={style.activeLink}>
          Main page
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/profile" className={style.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/friends" className={style.activeLink}>
          Friends
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/chats" className={style.activeLink}>
          Chats
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
