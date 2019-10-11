import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/Input";
import {Redirect} from "react-router-dom";
import styles from "./../common/FormsControls/formsControls.module.css";

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required, maxLength30]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required, maxLength30] }/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} />
            </div>
            {props.error && <div className={styles.formSommaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: "Login"})(LoginForm);

const Login = (props) => {

    const onSubmit = (formdata) => {
        props.login(formdata.email, formdata.password, formdata.rememberMe)
    };

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

export default  Login;