import { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './Chat.module.css';
import MessageList from './MessageList/MessageList';
import Inputs from './Inputs/Inputs';

const Chat = () => {
  const initMessages = [
    {
      id: 1,
      userId: 2,
      userName: 'Kek',
      message: 'Hi there',
    },
    {
      id: 2,
      userId: 1,
      userName: 'Me',
      message: 'General Kenobi',
    },
    {
      id: 3,
      userId: 3,
      userName: 'Chillb',
      message: 'flexb',
    },
    {
      id: 4,
      userId: 2,
      userName: 'Kek',
      message: 'Hi there',
    },
    {
      id: 5,
      userId: 1,
      userName: 'Me',
      message: 'General Kenobi',
    },
    {
      id: 6,
      userId: 3,
      userName: 'Chillb',
      message:
        'flexbssssssssssssssssssssssdddddddddddddddddddddddddddddfffffffffffffffffffffffffff',
    },
    {
      id: 8,
      userId: 1,
      userName: 'Me',
      message: 'General Kenobi',
    },
    {
      id: 7,
      userId: 3,
      userName: 'Chillb',
      message:
        'flexbssssssssssssssssssssssdddddddddddddddddddddddddddddfffffffffffffffffffffffffff',
    },
  ];

  const [messages, setMessages] = useState(initMessages);

  const sendMsgBtnOnClick = (msg) => {
    const newMsg = {
      id: messages.length + 1,
      userId,
      userName: 'Me',
      message: msg,
    };

    setMessages([...messages, newMsg]);
  };

  const userId = useSelector((state) => state.user.id);

  return (
    <div className={style.container}>
      <MessageList
        messages={messages.map((m) => ({ ...m, own: m.userId === userId }))}
      />
      <Inputs onMsgSubmit={sendMsgBtnOnClick} />
    </div>
  );
};

export default Chat;
