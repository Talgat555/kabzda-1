import React from 'react';
import {connect} from "react-redux";
import Login from "./login";


class LoginContainer extends React.Component {

    render(){
        return(
            <Login {...this.props}/>
        )
    }
};

const mapStateToProps = (state) => {

}

export default connect(mapStateToProps())(LoginContainer);