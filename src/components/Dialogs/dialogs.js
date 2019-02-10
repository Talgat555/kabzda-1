import React from 'react';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import s from './dialogs.module.css';
// import Dialog from './Dialog/dialog';

const Dialog = (props) => {
    let path = '/dialogs/'+props.id;
    return (
        <div className={s.dialog}>
                <NavLink to={path}>{props.name}</NavLink> 
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}



const Dialogs = () => {

    let dialogs = [
        {id:1, name: 'Dimych'},
        {id:2, name: 'Andrey'},
        {id:3, name: 'Sveta'},
        {id:4, name: 'Sasha'},
        {id:5, name: 'Victor'},
        {id:6, name: 'Valera'}
    ]

    let messages = [
        {id:1, message: 'Hi'},
        {id:2, message: 'How is your it-kamasutra?'},
        {id:3, message: 'Yo'},
        {id:4, message: 'Yo'},
        {id:5, message: 'Yo'},
    ]

    let dialogsElements = dialogs
        .map( (d) => <Dialog name={d.name} id={d.id}/> )

    let messagesElements = messages
        .map( (m) => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>   
        </div>
       
    )
} 

export default Dialogs;