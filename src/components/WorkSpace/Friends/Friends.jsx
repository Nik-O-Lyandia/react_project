import React, { useEffect } from 'react';
import style from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';
import { useDispatch } from 'react-redux';
import { set } from '../../../redux/actions/friends';

const Friends = ({ friends }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(set());
  // }, [dispatch]);

  const friendsElements = friends.map((f) => (
    <FriendItem
      id={f.id}
      userId={5}
      name={f.name}
      surname={f.surname}
      key={f.id}
    />
  ));

  return <div className={style.content}>{friendsElements}</div>;
};

export default Friends;
