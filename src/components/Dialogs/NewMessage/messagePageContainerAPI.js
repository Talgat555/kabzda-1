import React from 'react';
import {addNewMessageAction} from './../../../redux/dialogs-reducer';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import NewMessage from "./newMessage";
import Preloader from "../../common/Preloader/preloader";


class MessagePageContainerAPI extends React.Component{

    render(){
        const {addNewMessageAction, dialogsPage, match} = this.props;
        let userId = match.params.userId;

        if (userId != null) {
            return (
                <div>
                    <NewMessage path={`/dialogs/${userId}`}
                                addNewMessageAction={addNewMessageAction}
                                dialogsPage={dialogsPage}/>
                </div>)
        }
        else {
            return(
                <div>
                    <Preloader/>
                </div>)
            };
    }

}

const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
};

export default connect(mapStateToProps,
    {addNewMessageAction})
    (withRouter(MessagePageContainerAPI));