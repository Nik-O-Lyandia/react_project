import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ChatItem from './ChatItem/ChatItem';
import style from './Chats.module.css';

const Chats = ({ friends }) => {
  const [chats, setChats] = useState([]);
  const userId = useSelector((state) => state.user.id);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/chats/`, { headers: { token: userId } })
      .then((res) => {
        console.log(res.data);
        setChats(res.data);
      });
  }, [userId]);

  const chatsElements = chats.map((d, i) => (
    <ChatItem name={d.user.name} id={d.user.id} key={d.id} />
  ));

  return (
    <div>
      <div className={style.dialogsItems}>{chatsElements}</div>
    </div>
  );
};

export default Chats;
