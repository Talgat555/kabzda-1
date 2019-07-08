import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersAPI extends React.Component {

   componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.pageSize)
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    };

    render(){

        const { users, follow, unfollow, totalUsersCount, pageSize, followingInProgress,
                currentPage, setCurrentPage, isFetching, isAuth } = this.props;

        return(
            <>
                {isFetching ?
                    <Preloader />
                :
                    <Users users={users}
                           follow={follow}
                           unfollow={unfollow}
                           currentPage={currentPage}
                           setCurrentPage={setCurrentPage}
                           totalUsersCount={totalUsersCount}
                           pageSize={pageSize}
                           onPageChanged={this.onPageChanged}
                           followingInProgress={followingInProgress}
                           isAuth={isAuth}
                    />
                }
            </>
        )
    }
};


const mapStateToProps = (state) => {
    return{
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isAuth: state.auth.isAuth
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        getUsers})
    )(UsersAPI);