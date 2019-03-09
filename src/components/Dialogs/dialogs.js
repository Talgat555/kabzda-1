import React, { Fragment }from 'react';
import { NavLink } from 'react-router-dom';
import s from './dialogs.module.css';
import NewMessage from './NewMessage/newMessage';
import { Route } from 'react-router-dom';
import Test from './NewMessage/test';
// import Dialog from './Dialog/dialog';

const Dialog = (props) => {

    let path = '/dialogs/'+props.id;
    return (
        <div className={s.dialog}>
                <div className={s.avatar}>
                    <img src={props.avatar} />
                </div>
                <div>
                    <NavLink to={path}>{props.name}</NavLink>
                </div>                               
        </div>
    )
}

export const MessagePage = ({store}) => {
    return(
        store.getState().dialogsPage.messages
        .map( (m) => 
        <Route key={m.id} path={`/dialogs/${m.id}`} render={ () => <NewMessage store={store} /> } />
        )
    )
}

const Dialogs = ({ store }) => {

    const { dialogs, messages } = store.getState().dialogsPage;
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