import style from './Message.module.css';

const Message = ({ userName, message, own }) => {
  return (
    <div className={`${style.container} ${own ? style.own : ''}`}>
      <div className={style.userName}>{userName}</div>
      <div className={style.message}>{message}</div>
    </div>
  );
};

export default Message;
