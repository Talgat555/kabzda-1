import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navbar.module.css';
import Friends from './Sidebar/sidebar';



const Navbar  = ({ state }) => {
  const { friends } = state;
    return (
        <nav className={s.nav}>
            <div className={s.item}>
              <NavLink to='/profile' activeClassName={s.activeLink}>
                Profile
              </NavLink>
            </div>
            <div className={s.item}>
              <NavLink to='/dialogs' activeClassName={s.activeLink}>
                Messages
              </NavLink>
            </div>
            <div className={s.item}> 
              <NavLink to='/news' activeClassName={s.activeLink}>
                
              News</NavLink>
            </div>
            <div className={s.item}>
              <NavLink to='/music' activeClassName={s.activeLink}>
                Music
              </NavLink>
            </div>
            <div className={s.item}>
              <NavLink to='/settings' activeClassName={s.activeLink}>
                Settings
              </NavLink>
            </div>
            <Friends friends={friends}/>
        </nav>
    );
}


export  default Navbar;