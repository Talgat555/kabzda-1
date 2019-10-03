import {setTotalUsersCount, setUsers, toggleIsFetching} from "./users-reducer";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POS-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    profile: null,
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
    ],
    newPostText: {
        text: '',
        id: 3
    },
    status: ''
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
                message: action.text,
                likesCount: 0
            };
            return {...state,
                posts: [...state.posts, newPost],
                newPostText: {...state.newPostText, text: '', id: i}
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile };
        case SET_STATUS:
            return {...state, status: action.status };
        default:
            return state;
    }
}

export const addTextPost = (newPostText) => ({ type: ADD_POST, text: newPostText });
export const onPostChange = (text) => ({ type: UPDATE_NEW_POST_TEXT, text });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getProfile = (userId) => {
    return(dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    }
};

export const getStatus = (userId) => {
    return(dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    }
};

export const updateStatus = (status) => {
    return(dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0 ) {
                    dispatch(setStatus(status));
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
};


export default profileReducer;