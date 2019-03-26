import {createStore, combineReducers} from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import routerReducer from 'react-router-redux';


let reducers = combineReducers({
        routing: routerReducer,
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer
    }
)

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;