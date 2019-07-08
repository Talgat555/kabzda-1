import React from 'react';
import s from './profileInfo.module.css';
import Preloader from "../../common/Preloader/preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";


const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader />
    }
    return (
        <div className={s.contaner}>
            <div>
                <img src={profile.photos.large} />
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <ProfileStatus status={status}
                                   updateStatus={updateStatus}

                    />
                </div>
            </div>
        </div>
    );
};


export default ProfileInfo;