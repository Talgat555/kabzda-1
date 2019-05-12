import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './navbar.module.css';
import Sidebar from './Sidebar/sidebar';


const Wrapper = ({children}) => {
    return(
        <div className={s.item}>
            <NavLink to={`/${children.toLowerCase()}`}   activeClassName={s.activeLink}>
                {children}
            </NavLink>
        </div>
    )
};

const Navbar = ({friends}) => {
    return (
        <nav className={s.nav}>
            <Wrapper>
                Profile
            </Wrapper>
            <Wrapper>
                Dialogs
            </Wrapper>
            <Wrapper>
                News
            </Wrapper>
            <Wrapper>
                Music
            </Wrapper>
            <Wrapper>
                Users
            </Wrapper>
            <Wrapper>
                Settings
            </Wrapper>
            <Sidebar friends={friends}/>
        </nav>
    );
}


export default Navbar;