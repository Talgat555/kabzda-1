import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './dialogs.module.css';


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

const Dialogs = ({ dialogs }) => {

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