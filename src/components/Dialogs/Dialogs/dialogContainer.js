import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./dialogs";
import {addNewMessageAction, updateNewMessageAction } from "../../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
};

export default compose(connect(mapStateToProps, {addNewMessageAction, updateNewMessageAction}),
    withAuthRedirect)
(Dialogs);