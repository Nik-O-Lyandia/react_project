import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src='https://html5css.ru/howto/img_avatar.png' />
      <div>
        {props.message}
      </div>
      <div>
        <span>like</span>
      </div>
    </div>
  )

}

export default Post;