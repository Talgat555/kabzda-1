import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/preloader";
import {usersAPI} from "../../api/api";


class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
                })
            .catch(error => {
                console.log(error);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            })
    };

    render(){

        const { users, follow, unfollow, totalUsersCount, pageSize,
            currentPage, setCurrentPage, isFetching } = this.props;

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
    isFetching: state.usersPage.isFetching
    }
};

const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching
    })(UsersAPI);

export default UsersContainer;