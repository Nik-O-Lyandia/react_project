import React from 'react';
import style from './AddPost.module.css';

const AddPost = (props) => {
  return (
    <div className={style.container}>
      <textarea className={style.postContent}></textarea>
      <button className={style.addPostBtn}>Add post</button>
    </div>
  );
};

export default AddPost;
