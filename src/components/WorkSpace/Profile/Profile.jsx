import React from 'react';
import { useDispatch } from 'react-redux';
import Posts from '../Mainpage/Posts/Posts';
import AddPost from './AddPost/AddPost';
import style from './Profile.module.css';
import { addPost } from '../../../redux/actions/posts';
import { uuid } from '../../../utils/uuid';

const Profile = ({ profileData, posts }) => {
  const dispatch = useDispatch();

  const handleAddPost = (text) => {
    dispatch(
      addPost({
        id: uuid(),
        userId: profileData.userId,
        userName: profileData.userName,
        text,
        likesCount: 0,
      })
    );
  };

  return (
    <div className={style.content}>
      <div className={style.infoAndAvatar}>
        <div className={style.userAvatar}>
          <img src={profileData.imgAddress} alt="avatar" />
        </div>
        <div className={style.infoContainer}>
          <div className={style.userName}>{profileData.userName}</div>
          <div className={style.description}>{profileData.description}</div>
          <div className={style.email}>{profileData.email}</div>
        </div>
      </div>
      <div className={style.postsHeading}>My Posts</div>
      <AddPost addPost={handleAddPost} />
      <div>
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Profile;
