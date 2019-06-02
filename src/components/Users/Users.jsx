import React from 'react';
import s from './users.module.css';
import userPhoto from '../../../src/Assets/images/user.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios/index";

const Users = ({
                   users, follow, unfollow, currentPage, setCurrentPage,
                   onPageChanged, totalUsersCount, pageSize
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
                                    ? <button onClick={() =>{
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "480aa397-28b9-4424-9fea-802638e39b56"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {unfollow(u.id)}})}}>
                                        folllow
                                    </button>
                                    : <button onClick={() =>{
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true })
                                            .then(response => {
                                                if (response.data.resultCode === 0){follow(u.id)}})}}>
                                        unfolllow
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