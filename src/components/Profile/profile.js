import React from 'react';
import s from './profile.module.css';
import Myposts from './MyPosts/myposts';
import ProfileInfo from './ProfileInfo/profileInfo';

  
const Profile = ({store}) => {
    return (
        <div>
          <ProfileInfo />
          <Myposts store={store} />
        </div>
    );
}


export default Profile;