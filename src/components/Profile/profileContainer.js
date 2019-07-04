import React from 'react';
import Profile from "./Profile/profile";
import * as axios from "axios/index";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId=2;
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+ userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render(){

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile
    }
};

export default compose(connect(mapStateToProps, {setUserProfile}), withRouter, withAuthRedirect)(ProfileContainer);