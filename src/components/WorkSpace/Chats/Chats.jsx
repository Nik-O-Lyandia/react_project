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

const Chats = () => {

  let chats = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' }
  ]

  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra?' },
    { id: 3, message: 'Yo 3' },
    { id: 4, message: 'Yo 4' },
    { id: 5, message: 'Yo 5' }
  ]

  let ChatsElements = chats.map(d => <ChatItem name={d.name} id={d.id} />);
  let messagesElements = messages.map(m => <Message message={m.message} />);

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