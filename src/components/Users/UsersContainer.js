import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import * as axios from 'axios';


class UsersAPI extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount)
                })
            .catch(error => {
                console.log(error);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    };

    render(){

        const {users, follow, unfollow, totalUsersCount, pageSize, currentPage, setCurrentPage} = this.props;

        return(
            <Users users={users}
                   follow={follow}
                   unfollow={unfollow}
                   currentPage={currentPage}
                   setCurrentPage={setCurrentPage}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   onPageChanged={this.onPageChanged}
            />
        )
    }
};


const mapStateToProps = (state) => {
    return{
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
    }
};


const mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer;