import React from 'react';
import s from './newMessage.module.css';
import { addNewMessageActionCreate, updateNewMessageTextActionCreate } from './../../../redux/dialogs-reducer';


const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const NewMessage = ({ addNewMessageAction, updateNewMessageAction, newMessageText, messages }) => {

    let addNewMessage = () => {
        addNewMessageAction()
    }

    let newTextMessage = (e) => {
        let message= e.target.value;
        updateNewMessageAction(message)
    }
    
    let messagesElements =
        messages.map( (m) =>
            <Message key={m.id}message={m.message} />
        )

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