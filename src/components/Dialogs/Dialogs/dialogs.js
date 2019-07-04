import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './dialogs.module.css';

const Dialog = (props) => {
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
};

const Dialogs = ({ dialogsPage}) => {

    const { dialogs } = dialogsPage;

    let dialogsElements = dialogs
        .map( (d) =>
            <Dialog key={d.id} name={d.name} id={d.id} avatar={d.avatar} />
        );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
        </div>
    )
};

export default Dialogs;