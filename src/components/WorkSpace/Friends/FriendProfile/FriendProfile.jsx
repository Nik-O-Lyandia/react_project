import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Posts from '../../Mainpage/Posts/Posts';
import style from './FriendProfile.module.css';

const FriendProfile = () => {
  let { friendId } = useParams();
  let profileData = useSelector((state) =>
    state.friends.find((f) => f.userId === parseInt(friendId))
  );
  let posts = useSelector((state) =>
    state.posts.filter((p) => p.userId === parseInt(friendId))
  );

  return (
    <div className={style.content}>
      <div className={style.infoAndAvatar}>
        <div className={style.userAvatar}>
          <img src={profileData.imgAddress} alt="avatar" />
        </div>
        <div className={style.infoContainer}>
          <div className={style.userName}>
            {profileData.name + ' ' + profileData.surname}
          </div>
          <div className={style.description}>{profileData.description}</div>
          <div className={style.email}>{profileData.email}</div>
        </div>
      </div>
      <div className={style.postsHeading}>Friend's Posts</div>
      <div>
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default FriendProfile;
