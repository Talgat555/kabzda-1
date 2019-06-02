import React from 'react';
import s from './newMessage.module.css';


const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const NewMessage = ({ addNewMessageAction, updateNewMessageAction, dialogsPage }) => {
    const { newMessageText, messages } = dialogsPage;

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
        <div className={s.contaner}>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea
                className={s.textarea}
                onChange={newTextMessage}
                value={newMessageText.text}
                placeholder='Enter your message'
            />
            <button
                className={s.btnMessage}
                onClick={addNewMessage}>New message
            </button>
        </div>
    )
} 

export default NewMessage;