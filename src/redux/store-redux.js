import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import logger from 'redux-logger';
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import appReducer from "./app-reducer";


let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        sidebar: sidebarReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer
    }
)

let store = createStore(reducers, applyMiddleware(logger, thunkMiddleware));


export default store;