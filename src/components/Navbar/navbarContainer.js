import React from 'react';
import Navbar from './navbar';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return{
        friends: state.sidebar.friends
    }
}

const NavbarContainer = withRouter (connect(mapStateToProps)(Navbar));

export default NavbarContainer;