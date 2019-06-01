import {connect} from "react-redux";
import Dialogs from "./dialogs";
import {addNewMessageActionCreate, updateNewMessageTextActionCreate} from "../../../redux/dialogs-reducer";


const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;