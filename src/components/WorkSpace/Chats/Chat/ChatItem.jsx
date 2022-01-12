import style from './ChatItem.module.css';

const ChatItem = ({ userName, message, own }) => {
  return (
    <div className={`${style.container} ${own ? style.own : ''}`}>
      <div className={style.userName}>{userName}</div>
      <div className={style.message}>{message}</div>
    </div>
  );
};

export default ChatItem;
