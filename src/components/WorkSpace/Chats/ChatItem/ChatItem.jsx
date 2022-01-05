import React from 'react';
import style from './ChatItem.module.css';
import { NavLink } from 'react-router-dom';

const ChatItem = (props) => {
  let path = "/chats/" + props.id;

  return <div className={style.dialog + ' ' + style.active}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
}

export default ChatItem;