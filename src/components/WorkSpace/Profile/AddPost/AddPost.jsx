import React from 'react';
import style from './AddPost.module.css';

const AddPost = ({ newPostText, dispatch }) => {
  const newPostElement = React.createRef();

  const addPostLocal = () => {
    dispatch({ type: 'ADD_POST' });
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    dispatch({ type: 'UPDATE_NEW_POST_TEXT', newText: text});
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
