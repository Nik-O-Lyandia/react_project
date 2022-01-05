import React from 'react';
import ChatItem from './ChatItem/ChatItem';
import Message from './ChatItem/Message/Message';
import style from './Chats.module.css';

const Chats = (props) => {

  let ChatsElements = props.state.chats.map(d => <ChatItem name={d.name} id={d.id} />);
  let messagesElements = props.state.messages.map(m => <Message message={m.message} />);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {ChatsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Chats;