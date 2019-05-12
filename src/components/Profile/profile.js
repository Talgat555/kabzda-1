import React from 'react';
import ProfileInfo from './ProfileInfo/profileInfo';
import MypostsContainer from './MyPostsContainer/mypostsContainer';
import s from './profile.module.css';


const Profile = ({store}) => {
    return (
        <div className={s.contaner} >
            <div className={s.profileInfo}>
                <ProfileInfo />
            </div>
            <div className={s.myPost}>
                <MypostsContainer store={store}/>
            </div>
        </div>
    );
}


export default Profile;