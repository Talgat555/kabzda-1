import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import routerReducer from 'react-router-redux';
import logger from 'redux-logger';
import authReducer from "./auth-reducer";


let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        sidebar: sidebarReducer,
        auth: authReducer
    }
)

let store = createStore(reducers, applyMiddleware(logger));


export default store;