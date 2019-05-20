import React from 'react';
import Users from './Users';
import preloader from '../../Assets/images/preloader.svg';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import * as axios from 'axios';


class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
                })
            .catch(error => {
                console.log(error);
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
            })
    };

    render(){

        const { users, follow, unfollow, totalUsersCount, pageSize,
            currentPage, setCurrentPage, isFetching } = this.props;

        return(
            <>
                {isFetching ?
                    <img src={preloader} />
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