import React from 'react';
import s from './profileInfo.module.css';
import Preloader from "../../common/Preloader/preloader";
import {Route} from "react-router-dom";


const ProfileInfo = ({profile}) => {

    if (!profile) {
        return <Preloader />
    }
    return (
        <div className={s.contaner}>
            <div>
                <img src={profile.photos.large} />
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}


export default ProfileInfo;