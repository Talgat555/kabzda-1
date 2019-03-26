import React from 'react';
import s from './profile.module.css';
import ProfileInfo from './ProfileInfo/profileInfo';
import MypostsContainer from './MyPostsContainer/mypostsContainer';


const Profile = ({store}) => {
    return (
        <div>
            <ProfileInfo/>
            <MypostsContainer store={store}/>
        </div>
    );
}


export default Profile;