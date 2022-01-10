import React from 'react';
import style from './Post.module.css';

const Post = ({ userName, text, likesCount }) => {
  return (
    <div className={style.item}>
      <div className={style.post}>
        <div className={style.image}>
          <img src="https://html5css.ru/howto/img_avatar.png" alt="avatar" />
        </div>
        <div className={style.username}>
          <div>{userName}</div>
        </div>
        <div className={style.message}>{text}</div>
      </div>
      <div>
        <div className={style.likes}>likes: {likesCount}</div>
      </div>
    </div>
  );
};

export default Post;
