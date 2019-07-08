import React from 'react';
import ProfileInfo from '../ProfileInfo/profileInfo';
import MypostsContainer from '../MyPostsContainer/mypostsContainer';
import s from './profile.module.css';


const Profile = ({ profile, status, updateStatus }) => {

    return (
        <div className={s.contaner} >
            <div className={s.profileInfo}>
                <ProfileInfo profile={profile}
                             status={status}
                             updateStatus={updateStatus}
                />
            </div>
            <div className={s.myPost}>
                <MypostsContainer />
            </div>
        </div>
    );
};

export default Profile;