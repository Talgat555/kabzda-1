import React from 'react';
import {NavLink, Redirect, Route, Switch} from 'react-router-dom';
import s from './dialogs.module.css';
import NewMessage from "../NewMessage/newMessage";
// import MessagePage from "./NewMessage/messagePage";


const Dialog = (props) => {
    // let path = '/dialogs/'+props.id;
    return (
        <div className={s.dialog}>
                <div className={s.avatar}>
                    <img src={props.avatar} />
                </div>
                <div>
                    <li>
                        <NavLink to={{pathname: `messages/${props.id}`}}>{props.name}</NavLink>
                    </li>
                </div>
        </div>
    )
}

const Dialogs = ({ dialogsPage, isAuth}) => {

    if(!isAuth) return <Redirect to={'login'} />

    const { dialogs } = dialogsPage

    let dialogsElements = dialogs
        .map( (d) =>
            <Dialog key={d.id} name={d.name} id={d.id} avatar={d.avatar} />
        )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
        </div>
    )
}

export default Dialogs;