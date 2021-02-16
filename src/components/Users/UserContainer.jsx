import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from './../common/Preloader/Preloader';
import { compose } from 'redux';
import { getPageSize, getUsers, getCurrentPage, getTotalUserCount, getFollowingInProgress, getIsFetching } from '../../redux/users-selectors';





class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.page, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {

        this.props.requestUsers(pageNumber, this.props.pageSize);
        
    }




    render() {
        return <>
        { this.props.isFetching ? <Preloader /> : null }
        <Users totalUserCount = {this.props.totalUserCount} 
        pageSize = {this.props.pageSize} 
        page = {this.props.page}
        onPageChanged = {this.onPageChanged}
        users = {this.props.users}
        follow = {this.props.follow} 
        unfollow = {this.props.unfollow}
        toggleFollowingProgress = {this.props.toggleFollowingProgress}
        followingInProgress = {this.props.followingInProgress}
        />
        </>
    }
    
}


// let mapStateToProps = (state) => {
//     return {
//         users : state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUserCount: 55,// state.usersPage.totalUserCount,
//         page: state.usersPage.page,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        users : getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: 55,//getTotalUserCount(state), // state.usersPage.totalUserCount,
        page: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps,
            {
            follow,
            unfollow,
            setCurrentPage,
            requestUsers
            })
)(UsersContainer)


// export default connect(mapStateToProps,
//     {
//     follow,
//     unfollow,
//     setCurrentPage,
//     requestUsers
//     }
// )(UsersContainer);