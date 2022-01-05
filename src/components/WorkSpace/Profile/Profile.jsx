import React from 'react';
import Posts from '../Mainpage/Posts/Posts';
import style from './Profile.module.css';

const Profile = (props) => {
  
    return <div className={style.content}>
    <div>
      <img src={props.profileData.imgAddress} />
    </div>
    <div>
      ava + description
    </div>
    <h2>My posts</h2>
    <div>
      <Posts posts={props.posts}/>
    </div>
  </div>
}

export default Profile;