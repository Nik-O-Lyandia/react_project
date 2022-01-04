import React from 'react';
import style from './Profile.module.css';

const Profile = (props) => {
    return <div className={style.content}>
    <div>
      <img src={props.profileData.imgAddress} />
    </div>
    <div>
      ava + description
    </div>
  </div>
}

export default Profile;