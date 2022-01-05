import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {

  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  return (
    <div className={style.postsBlock}>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  )

}

export default Posts;