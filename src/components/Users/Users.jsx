import React from 'react';
import s from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../../src/Assets/images/user.png';

const Users = ({users, follow, unfollow, setUsers}) => {

    if (users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response   => { setUsers(response.data.items)}
            );
    }

    return (
        <div>
            {users.map( u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small: userPhoto } className={s.userPhoto} />
                        </div>
                        <div>
                            {u.followed ? <button onClick={() =>{unfollow(u.id)}}>folllow</button>
                                : <button onClick={()=> {follow(u.id)}}>unfolllow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </div>
            )}
        </div>
    )
}

export default Users;