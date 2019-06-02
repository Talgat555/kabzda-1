const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POS-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    profile: null,
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
        case UPDATE_NEW_POST_TEXT:
            return {...state,
                newPostText: {...state.newPostText, text: action.text}
            };
        case ADD_POST:
            let i = state.newPostText.id;
            i++;
            let newPost = {
                id: state.newPostText.id,
                message: state.newPostText.text,
                likesCount: 0
            };
            return {...state,
                posts: [...state.posts, newPost],
                newPostText: {...state.newPostText, text: '', id: i}
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile }
        default:
            return state;
    }
}

export const addTextPost = () => ({type: ADD_POST});
export const onPostChange = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;