import React from 'react';
import s from './profile.module.css';
import Myposts from './MyPosts/myposts';
import ProfileInfo from './ProfileInfo/profileInfo';

  
const Profile = ({ state, addPost, updateNewPostText }) => {
    return (
        <div>
          <ProfileInfo />
          <Myposts state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </div>
    );
}


export default Profile;