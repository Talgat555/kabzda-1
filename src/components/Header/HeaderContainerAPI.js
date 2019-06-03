import React from 'react';
import Header from './header';
import * as axios from "axios/index";
import {setUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";


class HeaderContainerAPI extends React.Component{

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0)
                this.props.setUserData(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };
    render(){
        return(
            <div>
                <Header {...this.props} />
            </div>
        )
}
}

let mapStateToProps = (state) =>{
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainerAPI);