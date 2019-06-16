import React from 'react';
import s from './users.module.css';
import userPhoto from '../../../src/Assets/images/user.png'
import {NavLink, Redirect} from "react-router-dom";

const Users = ({
                   users, follow, unfollow, currentPage, setCurrentPage, isAuth,
                   onPageChanged, totalUsersCount, pageSize, followingInProgress
               }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    if(!isAuth) return <Redirect to={'login'} />

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (<span key={p}
                                  className={currentPage === p && s.selectedPage}
                                  onClick={() => {
                                      onPageChanged(p)
                                  }}>{p}
                         </span>
                    )
                })}
            </div>
            <div>
                {users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={`profile/${u.id}`}>
                                    <img
                                        src={u.photos.small != null ? u.photos.small : userPhoto}
                                        className={s.userPhoto}
                                    />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                        unfollow(u.id);
                                    }}>
                                        unfollow
                                        </button>
                                     :   <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                        follow(u.id)
                                        }}>
                                        follow
                                    </button>
                                }
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
        </div>
    )
};

export default Users;