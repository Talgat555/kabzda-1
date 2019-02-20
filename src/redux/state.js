import { rerenderEntireTree } from "../render";

window.state = state;

let state = {
    profilePage: {
        posts:[
        { id:1, message: 'Hi, how are you?', likesCount:12},
        { id:2, message: 'It\'s my first post', likesCount:11 }
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs:[
            {id:1, name: 'Dimych', avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg'},
            {id:2, name: 'Andrey', avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg'},
            {id:3, name: 'Sveta', avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg'},
            {id:4, name: 'Sasha', avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg'},
            {id:5, name: 'Victor', avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg'},
            {id:6, name: 'Valera', avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg'}
        ],
        messages:[
            {id:1, message: 'Hi'},
            {id:2, message: 'How is your it-kamasutra?'},
            {id:3, message: 'Yo'},
            {id:4, message: 'Yo'},
            {id:5, message: 'Yo'},
        ],
        newMessageText: ''
    },
    sidebar: {
        friends: [
            {id:1, name: 'Dimych', avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg'},
            {id:2, name: 'Andrey', avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg'},
            {id:3, name: 'Sveta', avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg'},
            {id:4, name: 'Sasha', avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg'},
            {id:5, name: 'Victor', avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg'},
            {id:6, name: 'Valera', avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg'}
        ]   
    }
}

export let addPost = () => {
    let i = 3;
    let newPost = {
        id:i++,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText= '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state);
};

export let addMessage = () =>{
    let i =6;
    let newMessageElement = {
        id: i++,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessageElement);
    state.dialogsPage.newMessageText= '';
    rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText=newText;
    rerenderEntireTree(state);
};

export default state;