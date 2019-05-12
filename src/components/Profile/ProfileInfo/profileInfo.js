import React from 'react';
import s from './profileInfo.module.css';

  
const ProfileInfo = () => {
    return (
      <div className={s.contaner}>
        <div className={s.content}>
            <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg' />
        </div>
        <div className={s.descriptionBlock}>
          ava+description
        </div>
      </div>
    );
}


export default ProfileInfo;