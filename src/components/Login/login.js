import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/Input";


const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required, maxLength10]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLength10] }/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'LoginForm'})(LoginForm);

const Login = () => {

    const onSubmit = (formdata) => {
        console.log(formdata)
    };

    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

export default  Login;