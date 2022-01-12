import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import style from './Chat.module.css';
import ChatItem from './ChatItem';

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
  const msgRef = useRef();
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  const sendMsgBtnOnClick = () => {
    const newMsg = {
      id: messages.length + 1,
      userId,
      userName: 'Me',
      message: msgRef.current.value,
    };
    console.log(newMsg);

    setMessages([...messages, newMsg]);
    msgRef.current.value = '';
  };

  const userId = useSelector((state) => state.user.id);

  return (
    <div className={style.container}>
      <div className={style.messageList}>
        {messages.map((m) => (
          <ChatItem
            userName={m.userName}
            message={m.message}
            own={userId === m.userId}
            key={m.id}
          />
        ))}
      </div>
      <div className={style.inputs}>
        <textarea
          className={style.msgField}
          placeholder="message..."
          ref={msgRef}
          onKeyDown={(e) =>
            e.key === 'Enter' && e.ctrlKey && sendMsgBtnOnClick()
          }
        ></textarea>
        <button
          type="button"
          className={style.sendBtn}
          onClick={sendMsgBtnOnClick}
        >
          {/* Send &#10004; */}
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
