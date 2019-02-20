import React from 'react';
import ReactDOM from 'react-dom';
import { addPost, updateNewPostText, addMessage, updateNewMessageText } from './redux/state';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';


// export let rerenderEntireTree = (state) => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <App state={state} addPost={addPost} />
//         </BrowserRouter>, document.getElementById('root')
//     );
// }

export let rerenderEntireTree = (state) => {
    ReactDOM.render
    (<App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
    />, document.getElementById('root'));
}