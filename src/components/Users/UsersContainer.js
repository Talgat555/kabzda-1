import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    unfollow, requestUsers
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


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


// const mapStateToProps = (state) => {
//     return{
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//     isAuth: state.auth.isAuth
//     }
// };


const mapStateToProps = (state) => {
    return{
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
};

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        getUsers: requestUsers})
    )(UsersAPI);