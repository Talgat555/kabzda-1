import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './dialogs.module.css';
import NewMessage from './NewMessage/newMessage';
// import Dialog from './Dialog/dialog';

const Dialog = (props) => {

    let path = '/dialogs/'+props.id;
    return (
        <div className={s.dialog}>
                <div className={s.avatar}>
                    <img src={props.avatar} />
                </div>
                <NavLink to={path}>{props.name}</NavLink> 
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = ({ store }) => {

    const { dialogs, messages } = store.getState().dialogsPage;
    let dialogsElements = dialogs
        .map( (d) => <Dialog key={d.id} name={d.name} id={d.id} avatar={d.avatar}/> )

    let messagesElements = messages
        .map( (m) => <Message key={m.id}message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div> 
            <div>
                <NewMessage store={store} />
            </div>  
        </div> 
    )
} 

export default Dialogs;