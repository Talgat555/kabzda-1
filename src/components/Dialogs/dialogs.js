import React from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import s from './dialogs.module.css';
import NewMessage from "./NewMessage/newMessage";
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
                        <NavLink to={{pathname: `dialogs/${props.id}`}}>{props.name}</NavLink>
                    </li>
                </div>
        </div>
    )
}

const MessagePage = ({ addNewMessageAction, updateNewMessageAction, dialogsPage }) => {
    const { newMessageText, messages } = dialogsPage;
    return(
        messages.map( (m) => {
                return(
                    <Route key={m.id} path={`/dialogs/${m.id}`} render={ () =>
                        <NewMessage
                            addNewMessageAction={addNewMessageAction}
                            updateNewMessageAction={updateNewMessageAction}
                            newMessageText={ newMessageText }
                            messages={messages}
                        />}
                    />
                )
            }
        )
    )
}

const Dialogs = ({ dialogsPage, addNewMessageAction, updateNewMessageAction }) => {

    const { dialogs, newMessageText, messages } = dialogsPage

    let dialogsElements = dialogs
        .map( (d) =>
            <Dialog key={d.id} name={d.name} id={d.id} avatar={d.avatar} />
        )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <NewMessage
                newMessageText={newMessageText}
                messages={messages} addNewMessageAction={addNewMessageAction}
                updateNewMessageAction={updateNewMessageAction}
            />
            <div>
                { messages.map( (m) => {
                return(
                <Route key={m.id} path={`/dialogs/${m.id}`} render={ () =>
                    <NewMessage
                        addNewMessageAction={addNewMessageAction}
                        updateNewMessageAction={updateNewMessageAction}
                        newMessageText={ newMessageText }
                        messages={messages}
                    />}
                />
                )
            }
                )}
            </div>
            {/*<MessagePage*/}
                {/*addNewMessageAction={addNewMessageAction}*/}
                {/*updateNewMessageAction={{updateNewMessageAction}}*/}
                {/*dialogsPage={dialogsPage}*/}
            {/*/>*/}
        </div>
    )
}

export default Dialogs;