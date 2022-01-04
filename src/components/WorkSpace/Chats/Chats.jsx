import React from 'react';
import style from './Chats.module.css';
import { NavLink } from 'react-router-dom';

const ChatItem = (props) => {
  let path = "/chats/" + props.id;

  return <div className={style.dialog + ' ' + style.active}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
}

const Message = (props) => {
  return <div className={style.dialog}>{props.message}</div>
}

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