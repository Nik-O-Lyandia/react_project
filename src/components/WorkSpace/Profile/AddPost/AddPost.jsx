import React from 'react';
import style from './AddPost.module.css';

const AddPost = ({ addPost, updateNewPostText, newPostText }) => {
  const newPostElement = React.createRef();

  const addPostLocal = () => {
    addPost();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
  }
  return (
    <div className={style.container}>
      <textarea
        className={style.postContent}
        ref={newPostElement}
        onChange={onPostChange}
        value={newPostText}
      />

      <button
        className={style.addPostBtn}
        onClick={addPostLocal}>
        Add post
      </button>
    </div>
  );
};

export default AddPost;
