import React from 'react';
import s from './newMessage.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/Textarea";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


const maxLength50 = maxLengthCreator(50);

const AddNewMessageForm =(props)=>{
    return(
        <form>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder='Enter your message' name={"NewMessageBody"} component={Textarea} validate={[required, maxLength50]} />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </form>
    )
};

const AddNewMessageFormRedux= reduxForm ({form:"dialogAddNewMessageForm"})(AddNewMessageForm);

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const NewMessage = ({ addNewMessageAction, dialogsPage }) => {
    const { messages } = dialogsPage;

    let addNewMessage = (values) => {
        addNewMessageAction(values.NewMessageBody)
    };
    
    let messagesElements =
        messages.map( (m) =>
            <Message key={m.id}message={m.message} />
        )

    return (
        <div className={s.contaner}>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddNewMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
} 

export default NewMessage;