import React from 'react';
import Dialogs from '../dialogs';
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs
    }
}

const DialogsContainer = connect(mapStateToProps)(Dialogs)

export default DialogsContainer;