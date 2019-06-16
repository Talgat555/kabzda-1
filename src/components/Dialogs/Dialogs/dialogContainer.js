import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./dialogs";
import {addNewMessageAction, updateNewMessageAction } from "../../../redux/dialogs-reducer";


const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps,
    {addNewMessageAction, updateNewMessageAction})
    (Dialogs)

export default DialogsContainer;