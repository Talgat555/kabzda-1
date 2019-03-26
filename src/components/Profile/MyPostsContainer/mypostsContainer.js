import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import Myposts from './myposts';
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        profilePage: state.profilePage
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        addTextPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}


const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MypostsContainer;