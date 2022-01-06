import React from 'react';
import style from './ChatItem.module.css';
import { NavLink } from 'react-router-dom';

const ChatItem = (props) => {
  const path = '/chats/' + props.id;

  return (
    <div className={style.userName}>
      <NavLink to={path}>{props.name}</NavLink>
      {/* <div className={style.lastMessage}></div> */}
    </div>
  );
};

export default ChatItem;
