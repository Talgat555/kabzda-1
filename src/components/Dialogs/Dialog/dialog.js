import React from 'react';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import s from './dialog.module.css';
import Message from '../Message/message';


const Dialog = () => {
    return (
        <div>
            <div className={s.dialog}>
            <NavLink to='/dialogs/1'>Dimych</NavLink> 
            </div>    
            <div className={s.messages}>
                <Message />
            </div> 
        </div>
    )
} 

export default Dialog;