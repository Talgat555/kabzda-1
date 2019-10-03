import React from 'react';
import DialogsContainer from "./Dialogs/dialogContainer";




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