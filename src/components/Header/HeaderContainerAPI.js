import React from 'react';
import Header from './header';
import {logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";


class HeaderContainerAPI extends React.Component{
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
};

export default connect(mapStateToProps, {logout})(HeaderContainerAPI);