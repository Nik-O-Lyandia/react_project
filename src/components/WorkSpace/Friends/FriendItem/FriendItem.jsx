import React from 'react';
import style from './FriendItem.module.css';
import { NavLink } from 'react-router-dom';

const FriendItem = (props) => {
  let path = "/friends/" + props.id;

  return <div className={style.item}>
    <img src='https://html5css.ru/howto/img_avatar.png' />
    <NavLink to={path}>{props.name + ' ' + props.surname}</NavLink>
  </div>
}

export default FriendItem;