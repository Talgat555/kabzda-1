import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import routerReducer from 'react-router-redux';
import logger from 'redux-logger';


let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        sidebar: sidebarReducer
    }
)

let store = createStore(reducers, applyMiddleware(logger));


export default store;