import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
  const postsElements = props.posts.map((p, i) => (
    <Post users={props.users} message={p.message} likesCount={p.likesCount} key={i} />
  ));

  return (
    <div className={style.postsBlock}>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default Posts;
