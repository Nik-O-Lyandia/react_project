import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from './Chat.module.css';
import MessageList from './MessageList/MessageList';
import Inputs from './Inputs/Inputs';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Chat = () => {
  // const initMessages = [
  //   {
  //     id: 1,
  //     userId: 2,
  //     userName: 'Kek',
  //     message: 'Hi there',
  //   },
  //   {
  //     id: 2,
  //     userId: 1,
  //     userName: 'Me',
  //     message: 'General Kenobi',
  //   },
  //   {
  //     id: 3,
  //     userId: 3,
  //     userName: 'Chillb',
  //     message: 'flexb',
  //   },
  //   {
  //     id: 4,
  //     userId: 2,
  //     userName: 'Kek',
  //     message: 'Hi there',
  //   },
  //   {
  //     id: 5,
  //     userId: 1,
  //     userName: 'Me',
  //     message: 'General Kenobi',
  //   },
  //   {
  //     id: 6,
  //     userId: 3,
  //     userName: 'Chillb',
  //     message:
  //       'flexbssssssssssssssssssssssdddddddddddddddddddddddddddddfffffffffffffffffffffffffff',
  //   },
  //   {
  //     id: 8,
  //     userId: 1,
  //     userName: 'Me',
  //     message: 'General Kenobi',
  //   },
  //   {
  //     id: 7,
  //     userId: 3,
  //     userName: 'Chillb',
  //     message:
  //       'flexbssssssssssssssssssssssdddddddddddddddddddddddddddddfffffffffffffffffffffffffff',
  //   },
  // ];

  const userId = useSelector((state) => state.user.id);
  const { chatId: friendId } = useParams();

  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/chats/${friendId}`, {
        headers: { token: userId },
      })
      .then((res) => {
        console.log({ res: res.data });
        setChatId(res.data.id);
        setMessages(
          res.data.messages.map((m) => ({
            ...m,
            userName: m.userId === userId ? 'Me' : m.userName,
          }))
        );
      });
  }, [userId, friendId]);

  useEffect(() => {
    console.log('creating new connection');
    const sock = new WebSocket(`ws://localhost:8000/chats/channel/${userId}`);

    sock.onopen = (ev) => {
      ev.target.onmessage = (ev) => {
        console.log({ message: ev.data.toString() });
        setMessages((msgs) => [
          ...msgs,
          JSON.parse(ev.data.toString()).message,
        ]);
      };
      setSocket(ev.target);
    };

    return () => sock.close();
  }, []);

  // useEffect(() => {
  //   socket &&
  //     socket.send(
  //       JSON.stringify({
  //         chatId: chatId,
  //         userId,
  //         targetUserId: friendId,
  //         message: 'test',
  //       })
  //     );
  // }, [socket, chatId, userId]);

  console.log({ messages });

  const sendMsgBtnOnClick = (msg) => {
    const newMsg = {
      id: messages.length + 1,
      userId,
      userName: 'Me',
      message: msg,
    };

    setMessages([...messages, newMsg]);
    socket &&
      socket.send(
        JSON.stringify({
          chatId: chatId,
          userId,
          targetUserId: friendId,
          message: msg,
        })
      );
  };

  // const userId = useSelector((state) => state.user.id);

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
