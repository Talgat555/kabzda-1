import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts:[
            { id:1, message: 'Hi, how are you?', likesCount:12},
            { id:2, message: 'It\'s my first post', likesCount:11 }
            ],
            newPostText: {
                text:'',
                id:3
            }
        },
        dialogsPage: {
            dialogs:[
                {   id:1,
                    name: 'Dimych',
                    avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg',
                    messages:[
                        {id:1, message: 'Hi'},
                        {id:2, message: 'How is your it-kamasutra?'},
                        {id:3, message: 'Yo'},
                        {id:4, message: 'Yo'},
                        {id:5, message: 'Yo'}
                    ]
                },
                {   id:2,
                    name: 'Andrey',
                    avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg',
                    messages:[
                        {id:1, message: 'Hi'},
                        {id:2, message: 'How is your it-kamasutra?'},
                        {id:3, message: 'Yo'},
                        {id:4, message: 'Yo'},
                        {id:5, message: 'Yo'}
                    ]
                },
                {   id:3,
                    name: 'Sveta',
                    avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg',
                    messages:[
                        {id:1, message: 'Hi'},
                        {id:2, message: 'How is your it-kamasutra?'},
                        {id:3, message: 'Yo'},
                        {id:4, message: 'Yo'},
                        {id:5, message: 'Yo'}
                    ]
                },
                {   id:4,
                    name: 'Sasha',
                    avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg',
                    messages:[
                        {id:1, message: 'Hi'},
                        {id:2, message: 'How is your it-kamasutra?'},
                        {id:3, message: 'Yo'},
                        {id:4, message: 'Yo'},
                        {id:5, message: 'Yo'}
                    ]
                },
                {   id:5,
                    name: 'Victor',
                    avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg',
                    messages:[
                        {id:1, message: 'Hi'},
                        {id:2, message: 'How is your it-kamasutra?'},
                        {id:3, message: 'Yo'},
                        {id:4, message: 'Yo'},
                        {id:5, message: 'Yo'}
                    ]
                },
                {   id:6,
                    name: 'Valera',
                    avatar:'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg',
                    messages:[
                        {id:1, message: 'Hi'},
                        {id:2, message: 'How is your it-kamasutra?'},
                        {id:3, message: 'Yo'},
                        {id:4, message: 'Yo'},
                        {id:5, message: 'Yo'}
                    ]
                }
            ],
            messages:[
                {id:1, message: 'Hi'},
                {id:2, message: 'How is your it-kamasutra?'},
                {id:3, message: 'Yo'},
                {id:4, message: 'Yo'},
                {id:5, message: 'Yo'},
            ],
            newMessageText: {
                text:'',
                id: 6
            }
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
    },
    _callSubscriber() {
        console.log('State is changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action); 
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        sidebarReducer();
        this._callSubscriber(this._state);
    }
}

export default store;

window.store=store;