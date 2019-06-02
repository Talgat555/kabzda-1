import React from 'react';
import s from './header.module.css';
import {NavLink} from "react-router-dom";


const Header = ({auth}) => {
    return (
        <header className={s.header}>
            <div className={s.headerLogo}>
                <img src='https://liveopencart.ru/image/cache/data/products/coverreview-400x400.jpg'/>
            </div>
            <div className={s.loginContainer}>
                <div className={s.loginBlock}>
                    {auth.isAuth
                        ? auth.login
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