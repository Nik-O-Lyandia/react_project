import style from './MessageList.module.css';
import Message from './Message/Message';
import { useEffect, useRef } from 'react';

const MessageList = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={style.messageList}>
      {messages.map((m) => (
        <Message
          userName={m.userName}
          message={m.message}
          own={m.own}
          key={m.id}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
