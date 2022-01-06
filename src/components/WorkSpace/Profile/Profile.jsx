import React from 'react';
import Posts from '../Mainpage/Posts/Posts';
import AddPost from './AddPost/AddPost';
import style from './Profile.module.css';

const Profile = ({ profileData, posts }) => {
  return (
    <div className={style.content}>
      <div className={style.infoContainer}>
        <div className={style.userAvatar}>
          <img src={profileData.imgAddress} alt="avatar" />
        </div>
        <div>description</div>
      </div>
      <div className={style.postsHeading}>My Posts</div>
      <AddPost />
      <div>
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Profile;
