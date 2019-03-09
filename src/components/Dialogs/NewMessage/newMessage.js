import React from 'react';
import s from './newMessage.module.css';
import { addNewMessageActionCreate, updateNewMessageTextActionCreate } from './../../../redux/dialogs-reducer';


const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const NewMessage = ({ store }) => {

    let addNewMessage = () => {
        store.dispatch(addNewMessageActionCreate());
    }

    let newTextMessage = (e) => {
        let message= e.target.value;
        store.dispatch(updateNewMessageTextActionCreate(message))
    }
    const { newMessageText, messages } = store.getState().dialogsPage

    let messagesElements = messages
        .map( (m) => <Message key={m.id}message={m.message} />)

    return (
        <div>
            <div>
                {messagesElements}
            </div>
            <textarea
                onChange={newTextMessage}
                value={newMessageText.text}
                placeholder='Enter your message'
            />
            <button onClick={addNewMessage}>New message</button>
        </div>
    )
} 

export default NewMessage;