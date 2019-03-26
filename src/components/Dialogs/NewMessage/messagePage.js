import React from 'react';
import { Route } from 'react-router-dom';
import NewMessage from './newMessage';

const MessagePage = ({ addNewMessageAction, updateNewMessageAction, dialogsPage }) => {
    const { newMessageText, messages } = dialogsPage
    return(
        messages.map( (m) =>
            <Route key={m.id} path={`/dialogs/${m.id}`} render={ () =>
                    <NewMessage
                        addNewMessageAction={addNewMessageAction}
                        updateNewMessageAction={updateNewMessageAction}
                        newMessageText={ newMessageText }
                        messages={messages}
                    />
                }
            />
        )
    )
}

export default MessagePage;