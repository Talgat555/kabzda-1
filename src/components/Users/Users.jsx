import React from 'react';
import s from './users.module.css';
import userPhoto from '../../../src/Assets/images/user.png';

const Users = ({
                   users, follow, unfollow,
                   currentPage, setCurrentPage,
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
                                    <img
                                        src={u.photos.small != null ? u.photos.small : userPhoto}
                                        className={s.userPhoto}
                                    />
                                </div>
                                <div>
                                    {u.followed ? <button onClick={() => {
                                            unfollow(u.id)
                                        }}>folllow</button>
                                        : <button onClick={() => {
                                            follow(u.id)
                                        }}>unfolllow</button>}
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