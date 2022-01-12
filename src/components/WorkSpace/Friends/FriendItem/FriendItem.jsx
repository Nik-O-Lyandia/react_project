import React from 'react';
import style from './FriendItem.module.css';
import { NavLink } from 'react-router-dom';

const FriendItem = (props) => {
  let path = '/friends/' + props.userId;

  return (
    <div className={style.item}>
      <img src="https://html5css.ru/howto/img_avatar.png" alt="avatar" />
      <NavLink className={style.name} to={path}>
        {props.name + ' ' + props.surname}
      </NavLink>
      <div>
        <NavLink to={'/chats/' + props.id}>
          <button type="button" className={style.sendMsgBtn}>
            Send message
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default FriendItem;
