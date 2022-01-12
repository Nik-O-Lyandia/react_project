import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = ({ posts }) => {
  const user = useSelector((state) => state.user);
  const friends = useSelector((state) => state.friends);
  const postsElements = posts.map((p, i) => {
    let userData = friends.find((f) => f.userId === p.userId);
    if(userData !== undefined)
      p.userName = userData.name + ' ' + userData.surname;
    return <Post
      userName={p.userName}
      text={p.text}
      likesCount={p.likesCount}
      key={i}
    />
});

  return (
    <div className={style.postsBlock}>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default Posts;
