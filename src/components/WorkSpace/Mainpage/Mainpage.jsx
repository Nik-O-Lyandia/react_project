import React from 'react';
import style from './Mainpage.module.css';
import Posts from './Posts/Posts';

function Mainpage({ posts }) {
  return (
    <div>
      <div className={style.postsHeading}>Posts</div>
      <Posts posts={posts} />
    </div>
  );
}

export default Mainpage;
