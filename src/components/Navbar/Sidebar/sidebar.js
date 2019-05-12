import React from 'react';
import s from './sidebar.module.css';

const Sidebar = (props) => {

    let friend = props.friends.map((f) =>
        <div key={f.id}>
            <span className={s.friend}>
                <img src={f.avatar}/>
            </span>
            <span className={s.friend}>
                {f.name}
            </span>
        </div>
    );

    return(
        <div className={s.container}>
            <h4>Friends</h4>
            <div className={s.box}>
                <div className={s.friends}>
                    {friend}
                </div>
            </div>
        </div>  
    );
}

export default Sidebar;