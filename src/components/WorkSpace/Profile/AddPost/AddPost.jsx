import React, { useRef } from 'react';
import style from './AddPost.module.css';

const AddPost = ({ addPost }) => {
  const postTextRef = useRef();

  const addPostOnClick = () => {
    addPost(postTextRef.current.value);
    postTextRef.current.value = '';
  };

  return (
    <div className={style.container}>
      <textarea
        className={style.postContent}
        ref={postTextRef}
        placeholder={'New Post text...'}
      />

      <button className={style.addPostBtn} onClick={addPostOnClick}>
        Add post
      </button>
    </div>
  );
};

export default AddPost;
