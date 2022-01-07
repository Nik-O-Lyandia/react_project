import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.item}>
      <div className={style.post}>
        <div className={style.image}>
          <img src="https://html5css.ru/howto/img_avatar.png" alt="avatar" />
        </div>
        <div className={style.username}>
          <div>{props.users[0].username}</div>
        </div>
        <div className={style.message}>{props.message}</div>
      </div>
      <div>
        <div className={style.likes}>likes: {props.likesCount}</div>
      </div>
    </div>
  );
};

export default Post;
