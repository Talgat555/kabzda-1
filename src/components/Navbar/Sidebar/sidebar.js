import React from 'react';
import s from './sidebar.module.css';

const Friends = (props) => {

    let friend = props.friends.map((f) =>
        <div key={f.id} className={s.friend}>
            <img src={f.avatar}/>
            <div>{f.name}</div>
        </div>
    );

    return(
        <div className={s.friends}>
            <h4>Friends</h4>
            <div>
                {friend}
            </div>
        </div>  
    );
}

export default Friends;