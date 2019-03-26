import React from 'react';
import {addNewMessageActionCreate, updateNewMessageTextActionCreate} from './../../../redux/dialogs-reducer';
import MessagePage from '../NewMessage/messagePage';
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        messages: state.dialogsPage.messages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessageAction: () => {
            dispatch(addNewMessageActionCreate())
        },

        updateNewMessageAction: (message) => {
            dispatch(updateNewMessageTextActionCreate(message))
        }
    }
};

const MessagePageContainer = connect(mapDispatchToProps, mapStateToProps)(MessagePage);


export default MessagePageContainer;