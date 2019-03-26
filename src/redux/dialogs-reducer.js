const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Dimych',
            avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg',
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        },
        {
            id: 2,
            name: 'Andrey',
            avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg',
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        },
        {
            id: 3,
            name: 'Sveta',
            avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg',
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        },
        {
            id: 4,
            name: 'Sasha',
            avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg',
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        },
        {
            id: 5,
            name: 'Victor',
            avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg',
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        },
        {
            id: 6,
            name: 'Valera',
            avatar: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525351974_kung_fu_panda.jpg',
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],

        }
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    newMessageText: {
        text: '',
        id: 6
    }
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessageElement = {
                id: state.newMessageText.id,
                message: state.newMessageText.text
            }
            state.messages.push(newMessageElement);
            state.newMessageText.text = '';
            let i = state.newMessageText.id;
            i++
            state.newMessageText.id = i;
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText.text = action.text;
            return state;
        default:
            return state;
    }

    return (
        state
    )
}

export const addNewMessageActionCreate = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreate = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: message});

export default dialogsReducer;