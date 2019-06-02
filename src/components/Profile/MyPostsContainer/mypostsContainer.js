import React from 'react';
import {addTextPost, onPostChange} from '../../../redux/profile-reducer';
import Myposts from './myposts';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

const MypostsContainer =
    connect(mapStateToProps,
        {addTextPost, onPostChange})(Myposts);

export default MypostsContainer;