import React from 'react';
import DialogsContainer from "./Dialogs/dialogContainer";
import MessagePageContainer from "./NewMessage/messagePageContainer";




class DialogsContainerAPI extends React.Component {


    render(){
        return(
            <div>
                <div>
                    <DialogsContainer {...this.props} />
                </div>
                <div>
                    <NavLink to={}>
                        <MessagePageContainer {...this.props} />
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default DialogsContainerAPI;