import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setUsersAC, setTotalUserCountAC } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';

class UsersApiComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/Users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {

            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);

        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/Users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {

            this.props.setUsers(response.data.items);
        })
    }




    render() {
        return <Users totalUserCount = {this.props.totalUserCount} 
        pageSize = {this.props.pageSize} 
        currentPage = {this.props.currentPage}
        onPageChanged = {this.onPageChanged}
        users = {this.props.users}
        follow = {this.props.follow} 
        />
    }
}


let mapStateToProps = (state) => {
    return {
        users : state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: 55,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUserCount: (totalCount) => {
            dispatch(setTotalUserCountAC(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);