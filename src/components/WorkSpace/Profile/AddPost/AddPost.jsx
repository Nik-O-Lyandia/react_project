import React from 'react';
import style from './AddPost.module.css';

const AddPost = ({ addPost }) => {
  let newPostElement = React.createRef();

  let addPostLocal = () => {
    let text = newPostElement.current.value;
    addPost(text);
    newPostElement.current.value = '';
  }

  return (
    <div className={style.container}>
      <textarea className={style.postContent} ref={newPostElement}></textarea>
      <button className={style.addPostBtn} onClick={addPostLocal}>Add post</button>
    </div>
  );
};

export default AddPost;
