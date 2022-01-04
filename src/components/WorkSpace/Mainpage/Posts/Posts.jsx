import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {

  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'It\'s my first post', likesCount: 15 },
    { id: 3, message: 'Blabla', likesCount: 2 },
    { id: 4, message: 'Dada', likesCount: 1 }
  ]

  let postsElements =
    posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  )

}

export default Posts;