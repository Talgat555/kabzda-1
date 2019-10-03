import React from 'react';
import {addTextPost} from '../../../redux/profile-reducer';
import Myposts from './myposts';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

const MypostsContainer =
    connect(mapStateToProps,
        {addTextPost})(Myposts);

export default MypostsContainer;