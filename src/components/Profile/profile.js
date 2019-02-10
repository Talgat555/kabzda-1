import React from 'react';
import s from './profile.module.css';
import Myposts from './MyPosts/myposts';
import ProfileInfo from './ProfileInfo/profileInfo';

  
const Profile = () => {
    return (
        <div>
          <ProfileInfo />
          <Myposts />
        </div>
    );
}


export default Profile;