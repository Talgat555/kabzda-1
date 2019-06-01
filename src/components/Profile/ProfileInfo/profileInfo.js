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
            {/*<div>*/}
                {/*<Route key={profile.userId} path={`/profile/${profile.userId}`} render={ () =>*/}
                    {/*<div>*/}
                        {/*<img src={profile.photos.large} />*/}
                    {/*</div>}*/}
                {/*/>*/}
            {/*</div>*/}
            {/*<div className={s.content}>*/}
                {/*<img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}


export default ProfileInfo;