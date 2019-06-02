import React from 'react';
import { Route } from 'react-router-dom';
import NewMessage from './newMessage';

const MessagePage = ({ addNewMessageAction, updateNewMessageAction, dialogsPage }) => {
    const { newMessageText, messages } = dialogsPage;
    return(
        <div>
            <NewMessage path={`/dialogs/${1}`}
                addNewMessageAction={addNewMessageAction}
                updateNewMessageAction={updateNewMessageAction}
                newMessageText={ newMessageText }
                messages={messages}
            />}
        </div>
        )
};

export default MessagePage;