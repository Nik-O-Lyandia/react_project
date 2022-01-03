import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
  return (
    <div>
      My posts
      <div className={style.posts}>
        <Post message='Hi, how are you?' />
        <Post message="It's my first post" />
      </div>
    </div>
  )

}

export default Posts;