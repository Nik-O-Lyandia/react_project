import React from 'react';
import ChatItem from './ChatItem/ChatItem';
import style from './Chats.module.css';

const Chats = (props) => {
  const chatsElements = props.state.chats.map((d, i) => (
    <ChatItem name={d.name} id={d.id} key={d.id} />
  ));

  return (
    <div>
      <div className={style.dialogsItems}>{chatsElements}</div>
    </div>
  );
};

export default Chats;
