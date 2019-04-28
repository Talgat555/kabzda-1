import React from 'react';
import s from './sidebar.module.css';

const Sidebar = (props) => {

    let friend = props.friends.map((f) =>
        <div key={f.id} className={s.friend}>
            <span>
                <img src={f.avatar}/>
            </span>
            <span>
                {f.name}
            </span>
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

export default Sidebar;