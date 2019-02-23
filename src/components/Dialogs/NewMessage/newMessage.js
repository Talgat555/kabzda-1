import React from 'react';
import s from './newMessage.module.css';


const NewMessage = ({ store }) => {

    let text = React.createRef();

    let addNewMessage = () => {
        let action = {
            type:'ADD-MESSAGE',
            newText: {
            }
        }

        store.dispatch(action);
    }

    let newTextMessage = () => {
        let message= text.current.value;
        let action = {
            type: 'UPDATE-NEW-MESSAGE-TEXT',
            text: message
        } 
        store.dispatch(action)
    }
    const { newMessageText } = store.getState().dialogsPage
    return (
        <div>
            <textarea
                onChange={newTextMessage}
                ref={text}
                value={newMessageText.newText}
            />
            <button onClick={addNewMessage}>New message</button>
        </div>
    )
} 

export default NewMessage;