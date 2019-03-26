const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POS-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
    ],
    newPostText: {
        text: '',
        id: 3
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let i = state.newPostText.id;
            i++
            let newPost = {
                id: state.newPostText.id,
                message: state.newPostText.text,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText.text = '';
            state.newPostText.id = i;
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText.text = action.text;
            return state;
        default:
            return state;
    }

    return (
        state
    )
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});

export default profileReducer;