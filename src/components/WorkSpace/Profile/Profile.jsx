import React from 'react';
import style from './Profile.module.css';

const Profile = () => {
    return <div className={style.content}>
    <div>
      <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
    </div>
    <div>
      ava + description
    </div>
  </div>
}

export default Profile;