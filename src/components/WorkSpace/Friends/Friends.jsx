import React from 'react';
import style from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';

const Friends = ({ friends }) => {
  const friendsElements = friends.map((f) => (
    <FriendItem id={f.id} name={f.name} surname={f.surname} />
  ));

  return <div className={style.content}>{friendsElements}</div>;
};

export default Friends;
