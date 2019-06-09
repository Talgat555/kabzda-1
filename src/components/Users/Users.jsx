import React from 'react';
import s from './users.module.css';
import userPhoto from '../../../src/Assets/images/user.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios/index";
import {toggleIsFollowingInProgress} from "../../redux/users-reducer";

const Users = ({
                   users, follow, unfollow, currentPage, setCurrentPage,
                   onPageChanged, totalUsersCount, pageSize, toggleIsFollowingInProgress, followingInProgress
               }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

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
                                        toggleIsFollowingInProgress(true, u.id);
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "25918ef5-629a-49e7-adc2-673b7c4515a5"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0){unfollow(u.id)}
                                                toggleIsFollowingInProgress(false, u.id);
                                            })
                                            .catch(error => {
                                                console.log(error);
                                            });
                                    }}>
                                        unfollow
                                        </button>
                                     :   <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                        toggleIsFollowingInProgress(true, u.id);
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "25918ef5-629a-49e7-adc2-673b7c4515a5"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {follow(u.id)}
                                                toggleIsFollowingInProgress(false, u.id);
                                            })
                                            .catch(error => {
                                                console.log(error);
                                            });
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