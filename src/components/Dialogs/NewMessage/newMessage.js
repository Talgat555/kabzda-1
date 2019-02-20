import React from 'react';
import s from './newMessage.module.css';


const NewMessage = ({addMessage, updateNewMessageText}) => {

    let text = React.createRef();

    let addNewMessage = () => {
        addMessage()
        text.current.value = '';
    }

    let newTextMessage = () => {
        let message= text.current.value;
        updateNewMessageText(message)
    }

    return (
        <div>
            <textarea onChange={newTextMessage} ref={text} />
            <button onClick={addNewMessage}>New message</button>
        </div>
    )
} 

export default NewMessage;