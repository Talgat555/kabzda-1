import React from 'react';
import s from './header.module.css';
import {NavLink} from "react-router-dom";


const Header = ({auth, logout}) => {
    return (
        <header className={s.header}>
            <div className={s.headerLogo}>
                <img src='https://liveopencart.ru/image/cache/data/products/coverreview-400x400.jpg'/>
            </div>
            <div className={s.loginContainer}>
                <div className={s.loginBlock}>
                    {auth.isAuth
                        ? <div>
                            {auth.login}
                            <button onClick={logout}>LogOut</button>
                        </div>
                        : <NavLink to={'/login'}>
                            Login
                        </NavLink>
                    }
                </div>
            </div>

        </header>
    );
}


export default Header;