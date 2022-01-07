import React from 'react';
import style from './Mainpage.module.css';
import Posts from './Posts/Posts';

function Mainpage({ users, posts }) {
  return (
    <div>
      <div className={style.postsHeading}>Posts</div>
      <Posts users={users} posts={posts} />
    </div>
  );
}

export default Mainpage;
