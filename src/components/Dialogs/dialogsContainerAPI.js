import React from 'react';
import DialogsContainer from "./Dialogs/dialogContainer";
import MessagePageContainer from "./NewMessage/messagePageContainerAPI";




class DialogsContainerAPI extends React.Component {


    render(){
        return(
            <div>
                <div>
                    <DialogsContainer {...this.props} />
                </div>
            </div>
        )
    }
}

export default DialogsContainerAPI;